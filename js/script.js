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

//////pageup and humburger toogle color //////social toogle color
const toggleCircle = document.querySelector('.theme__toggle');
const themeBlock = document.querySelector('.theme')
const body = document.querySelector('body');


function scroleCgangeColor () {
    if (!body.classList.contains('dark')) {
        if (window.scrollY > 650) {
            // document.querySelector('.pageup').style.display = "block";
            humburgerSpan.forEach(item => {
                item.style.backgroundColor = "#000";
            });
        } else {
            // document.querySelector('.pageup').style.display = "none";
            humburgerSpan.forEach(item => {
                item.style.backgroundColor = "#fff";
            });
        }
    
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
    }

    document.querySelector('.pageup').style.display = window.scrollY > 650 ?  "block" :  "none";
    
}

window.addEventListener('scroll', scroleCgangeColor);
    
/////theme 
const activeTheme = localStorage.getItem('theme');

if (activeTheme === null) {
    localStorage.setItem('theme', 'light');
}

if (activeTheme === 'dark') {
    body.classList.add('dark');
    toggleCircle.classList.add('theme__toggle_active');
}

function changeThemeMode () {
    themeBlock.addEventListener('click' , () => {
        toggleCircle.classList.toggle('theme__toggle_active');
        if (toggleCircle.classList.contains('theme__toggle_active')) {
            localStorage.setItem('theme', 'dark');
            body.classList.toggle('dark');
        } else {
            localStorage.setItem('theme', 'light');
            body.classList.toggle('dark');
        }

    });
}

changeThemeMode();

////animation 

const animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        animItems.forEach(item => {
            const animItemHight = item.offsetHeight;
            const animItemOffset = offset(item).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHight / animStart;

            if (animItemHight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHight)) {
                item.classList.add('_active');
            } else {
                if (!item.classList.contains('anim-no-active')) {
                    item.classList.remove('_active')
                }
            }
        })
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
    setTimeout(animOnScroll, 300)
}
