const menu_button_mobile = document.querySelector('.menu_button_mobile')
const menu               = document.querySelector('.menu_links')

menu_button_mobile.addEventListener('click', ()=>{
    if(menu_button_mobile.classList.contains('menu_button_active')){
        menu_button_mobile.classList.remove('menu_button_active')
        menu.classList.remove('show_menu')
    }else{
        menu_button_mobile.classList.add('menu_button_active')
        menu.classList.add('show_menu')
    }
})
