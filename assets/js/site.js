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
    if(window.matchMedia('(min-width: 941px)').matches&&!item.classList.contains('is-dismissed'))header?.classList.add('has-open-submenu');
  });
  item.addEventListener('mouseleave',()=>{
    if(window.matchMedia('(min-width: 941px)').matches&&!item.contains(document.activeElement))updateSubmenu(item,false);
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
    if(menuButton?.getAttribute('aria-expanded')==='true'&&window.matchMedia('(max-width: 940px)').matches){menuButton.setAttribute('aria-expanded','false');menu?.classList.remove('is-open');menuButton.focus()}
    else if(focused)focused.querySelector(':scope > a')?.focus();
  }
});
const dialog=document.querySelector('#lightbox');
if(dialog){const image=dialog.querySelector('img');const caption=dialog.querySelector('figcaption');const close=dialog.querySelector('.lightbox-close');document.addEventListener('click',event=>{const trigger=event.target.closest('.media-trigger[data-full]');if(!trigger)return;image.src=trigger.dataset.full;image.alt=trigger.dataset.alt||'';caption.textContent=trigger.dataset.caption||trigger.dataset.alt||'';dialog.showModal()});close.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});dialog.addEventListener('close',()=>{image.removeAttribute('src');image.alt='';caption.textContent=''})}
