'use strict';
window.addEventListener('DOMContentLoaded', ()=>{
    const humburgerBtn = document.querySelector('.humburger'),
        menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        container = document.querySelector('body');

        humburgerBtn.addEventListener('click', (e)=> {
            humburgerBtn.classList.toggle('humburger_active');
            menu.classList.toggle('menu_active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', (e)=> {
                humburgerBtn.classList.toggle('humburger_active');
                menu.classList.toggle('menu_active');
                
            });

        });
});