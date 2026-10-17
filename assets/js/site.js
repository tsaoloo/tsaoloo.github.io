document.documentElement.classList.add('js-ready');
const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('.site-nav');
const header=document.querySelector('.site-header');
const submenuItems=[...document.querySelectorAll('.nav-item--submenu')];
function updateSubmenu(item,open,{dismiss=false}={}){
  item.classList.toggle('is-expanded',open);
  item.classList.toggle('is-dismissed',dismiss);
  const button=item.querySelector('.submenu-toggle');
  if(button){button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'收合珍藏分類子選單':'展開珍藏分類子選單')}
  header?.classList.toggle('has-open-submenu',submenuItems.some(node=>node.classList.contains('is-expanded')));
}
function closeSubmenus({dismissFocus=false}={}){
  submenuItems.forEach(item=>{
    const activeInside=item.contains(document.activeElement);
    updateSubmenu(item,false,{dismiss:dismissFocus&&activeInside});
    if(dismissFocus&&activeInside)item.querySelector(':scope > a')?.focus();
  });
}
if(menuButton&&menu){
  menuButton.addEventListener('click',()=>{
    const open=menuButton.getAttribute('aria-expanded')==='true';
    menuButton.setAttribute('aria-expanded',String(!open));menu.classList.toggle('is-open',!open);
    if(open)closeSubmenus();
  });
  menu.addEventListener('click',event=>{
    if(event.target.closest('a')){menuButton.setAttribute('aria-expanded','false');menu.classList.remove('is-open');closeSubmenus()}
  });
}
submenuItems.forEach(item=>{
  const button=item.querySelector('.submenu-toggle');
  if(!button)return;
  button.addEventListener('click',()=>{
    const open=button.getAttribute('aria-expanded')!=='true';
    updateSubmenu(item,open,{dismiss:!open});
  });
  item.addEventListener('mouseenter',()=>{
    if(window.matchMedia('(min-width: 1001px)').matches&&!item.classList.contains('is-dismissed'))header?.classList.add('has-open-submenu');
  });
  item.addEventListener('mouseleave',()=>{
    if(window.matchMedia('(min-width: 1001px)').matches&&!item.contains(document.activeElement))updateSubmenu(item,false);
  });
  item.addEventListener('focusin',event=>{
    if(item.classList.contains('is-dismissed')&&event.target===item.querySelector(':scope > a'))return;
    if(item.classList.contains('is-dismissed'))item.classList.remove('is-dismissed');
    updateSubmenu(item,true);
  });
  item.addEventListener('focusout',event=>{
    if(!item.contains(event.relatedTarget))updateSubmenu(item,false);
  });
});
document.addEventListener('click',event=>{
  if(!event.target.closest('.nav-item--submenu'))closeSubmenus({dismissFocus:true});
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    const focused=submenuItems.find(item=>item.contains(document.activeElement));
    closeSubmenus({dismissFocus:true});
    if(menuButton?.getAttribute('aria-expanded')==='true'&&window.matchMedia('(max-width: 1000px)').matches){menuButton.setAttribute('aria-expanded','false');menu?.classList.remove('is-open');menuButton.focus()}
    else if(focused)focused.querySelector(':scope > a')?.focus();
  }
});
const dialog=document.querySelector('#lightbox');
if(dialog){
  const image=dialog.querySelector('img');
  const caption=dialog.querySelector('figcaption');
  const close=dialog.querySelector('.lightbox-close');
  const content=dialog.querySelector('.lightbox-inner');
  const counter=document.createElement('span');
  counter.className='lightbox-counter';
  counter.setAttribute('aria-live','polite');
  counter.setAttribute('aria-atomic','true');
  const makeNavButton=(className,label,symbol)=>{
    const button=document.createElement('button');
    button.className=`lightbox-nav ${className}`;
    button.type='button';
    button.setAttribute('aria-label',label);
    button.textContent=symbol;
    content.append(button);
    return button;
  };
  const previous=makeNavButton('lightbox-previous','上一張作品','‹');
  const next=makeNavButton('lightbox-next','下一張作品','›');
  const groupSelector='[data-lightbox-group],.gallery-group,.figure-group,.sculpture-photo-group,.sculpture-highlight,.about-topic';
  let items=[];
  let currentIndex=0;
  let activeTrigger=null;
  let savedScrollY=0;
  let savedOverflow={root:'',body:''};
  let adjacentPreloads=[];
  let touchStart=null;
  let loadVersion=0;

  const preloadAdjacent=()=>{
    adjacentPreloads=[];
    if(items.length<2)return;
    const neighborIndexes=new Set([(currentIndex+items.length-1)%items.length,(currentIndex+1)%items.length]);
    neighborIndexes.forEach(index=>{
      const preload=new Image();
      preload.decoding='async';
      preload.src=items[index].src;
      adjacentPreloads.push(preload);
    });
  };
  const updateImage=()=>{
    const item=items[currentIndex];
    if(!item)return;
    const version=++loadVersion;
    image.alt=item.alt;
    image.classList.add('is-loading');
    caption.replaceChildren(document.createTextNode(item.caption),counter);
    counter.textContent=`${currentIndex+1} / ${items.length}`;
    const canNavigate=items.length>1;
    previous.hidden=!canNavigate;
    next.hidden=!canNavigate;
    const loader=new Image();
    loader.decoding='async';
    loader.onload=()=>{
      if(version!==loadVersion||!dialog.open)return;
      image.src=item.src;
      image.classList.remove('is-loading');
    };
    loader.onerror=()=>{
      if(version!==loadVersion||!dialog.open)return;
      image.removeAttribute('src');
      image.classList.remove('is-loading');
      image.alt='圖片載入失敗';
      caption.replaceChildren(document.createTextNode(`${item.caption}（圖片載入失敗）`),counter);
    };
    loader.src=item.src;
    preloadAdjacent();
  };
  const showItem=(index)=>{
    if(!items.length)return;
    currentIndex=(index+items.length)%items.length;
    updateImage();
  };
  const galleryFor=(trigger)=>{
    let group=trigger.closest(groupSelector);
    if(!group)group=trigger.closest('.photo-grid')||trigger.closest('section')||trigger.closest('main')||document.body;
    let triggers=[...group.querySelectorAll('.media-trigger[data-full]')];
    if(!triggers.includes(trigger))triggers=[trigger];
    return {
      items:triggers.map(button=>({
        src:button.dataset.full,
        alt:button.dataset.alt||button.querySelector('img')?.alt||'',
        caption:button.dataset.caption||button.dataset.alt||button.querySelector('img')?.alt||''
      })),
      index:triggers.indexOf(trigger)
    };
  };
  const navigate=(direction)=>showItem(currentIndex+direction);

  document.addEventListener('click',event=>{
    const trigger=event.target.closest('.media-trigger[data-full]');
    if(!trigger)return;
    const gallery=galleryFor(trigger);
    items=gallery.items;
    currentIndex=Math.max(0,gallery.index);
    activeTrigger=trigger;
    savedScrollY=window.scrollY;
    savedOverflow={root:document.documentElement.style.overflow,body:document.body.style.overflow};
    document.documentElement.style.overflow='hidden';
    document.body.style.overflow='hidden';
    caption.replaceChildren(counter);
    updateImage();
    dialog.showModal();
    close.focus({preventScroll:true});
  });
  previous.addEventListener('click',()=>navigate(-1));
  next.addEventListener('click',()=>navigate(1));
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
  dialog.addEventListener('keydown',event=>{
    if(!dialog.open)return;
    if(event.key==='ArrowLeft'){event.preventDefault();navigate(-1)}
    else if(event.key==='ArrowRight'){event.preventDefault();navigate(1)}
  });
  content.addEventListener('pointerdown',event=>{
    if(event.pointerType==='touch')touchStart={x:event.clientX,y:event.clientY};
  });
  content.addEventListener('pointerup',event=>{
    if(!touchStart||event.pointerType!=='touch')return;
    const dx=event.clientX-touchStart.x;
    const dy=event.clientY-touchStart.y;
    touchStart=null;
    if(items.length>1&&Math.abs(dx)>52&&Math.abs(dx)>Math.abs(dy)*1.25)navigate(dx<0?1:-1);
  });
  content.addEventListener('pointercancel',()=>{touchStart=null});
  dialog.addEventListener('close',()=>{
    loadVersion++;
    image.removeAttribute('src');
    image.alt='';
    image.classList.remove('is-loading');
    caption.textContent='';
    items=[];
    adjacentPreloads=[];
    previous.hidden=true;
    next.hidden=true;
    document.documentElement.style.overflow=savedOverflow.root;
    document.body.style.overflow=savedOverflow.body;
    window.scrollTo(0,savedScrollY);
    if(activeTrigger?.isConnected)activeTrigger.focus({preventScroll:true});
    activeTrigger=null;
  });
}