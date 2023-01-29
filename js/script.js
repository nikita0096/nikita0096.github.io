const humburger = document.querySelector('.humburger'),
    menu = document.querySelector('.menu'),
    overlay = document.querySelector('.menu__overlay'),
    menuLinks = document.querySelectorAll('.menu__link'),
    closeBtn = document.querySelector('.menu__close'),
    countProgress = document.querySelectorAll('.capabilities__progress-percent'),
    progressLine = document.querySelectorAll('.capabilities__progress_line');

    //menu humburger
humburger.addEventListener('click', (e)=> {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', ()=> {
    menu.classList.remove('active');
});

overlay.addEventListener('click', ()=> {
    menu.classList.remove('active');
});

menuLinks.forEach(item => {
    item.addEventListener('click', ()=> {
        menu.classList.remove('active');
    });
});

//////Progress lines

const sidePanel = document.querySelector('.sidepanel'),
    sidePanelDivider = document.querySelector('.sidepanel__divider'),
    iconSidePanel = document.querySelectorAll('.sidepanel__link'),
    humburgerSpan = document.querySelectorAll('.humburger_span');


countProgress.forEach((item, i)=> {
    progressLine[i].style.width = item.innerHTML;
});

//////pageup and humburger toogle color
window.addEventListener('scroll', () => {
    if (window.scrollY > 650) {
        document.querySelector('.pageup').style.display = "block";
        humburgerSpan.forEach(item => {
            item.style.backgroundColor = "#000";
        });
    } else {
        document.querySelector('.pageup').style.display = "none";
        humburgerSpan.forEach(item => {
            item.style.backgroundColor = "#fff";
        });
    }
});

//////social toogle color
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        sidePanel.style.color = "#000";
        sidePanelDivider.style.backgroundColor = "#000";
        iconSidePanel.forEach(item => {
            item.style.color = "#000";
        });
    } else {
        sidePanel.style.color = "#fff";
        sidePanelDivider.style.backgroundColor = "#fff";
        iconSidePanel.forEach(item => {
            item.style.color = "#fff";
        });
    }
});