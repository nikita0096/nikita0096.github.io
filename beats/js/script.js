window.addEventListener('DOMContentLoaded', ()=> {
    const btnMenu =document.querySelector('.humburger'),
          nav = document.querySelector('nav'),
          menu = document.querySelector('.menu'),
          btnClose = document.querySelector('[data-close]');

    btnMenu.addEventListener('click', ()=> {
        nav.style.display = 'block';
        menu.style.animation = `menu 0.6s linear normal`;
    });

    btnClose.addEventListener('click', ()=> {
        menu.style.animation = `menuClose 0.6s linear`;
        setTimeout(()=> {
            nav.style.display = 'none';
        }, 500);
    });

    const nextArrow = document.querySelector('.carousel__next'),
          prevArrow = document.querySelector('.carousel__prev'),
          slides = document.querySelectorAll('.carousel__img'),
          slideField = document.querySelector('.carousel__wrapper');
    let slideIndex = 1,
        dots = [];

    const swipe = new Hammer(slideField);

    swipe.on("swipeleft", function(ev) {
            showSlide(slideIndex);
            dotsActiveAdd();

            if (slideIndex === 2) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
    });
    swipe.on("swiperight", function(ev) {
            showSlide(slideIndex);

            dotsActiveAdd();

            if (slideIndex === 0) {
                slideIndex = 2;
            } else {
                slideIndex--;
            }
        
    });

    function showSlide(i) {
        slides.forEach(slide => {
            slide.classList.remove('carousel__img_active');
        });

        slides[i].classList.add('carousel__img_active');
    }

    function dotsActiveAdd () {
        dots.forEach(dot => {
            dot.classList.remove('carousel__dots_active');
        });

        dots[slideIndex].classList.add('carousel__dots_active');
    }

    showSlide(slideIndex);

    nextArrow.addEventListener('click', ()=> {
        showSlide(slideIndex);
        dotsActiveAdd();

        if (slideIndex === 2) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
    });

    prevArrow.addEventListener('click', ()=> {
        showSlide(slideIndex);

        dotsActiveAdd();

        if (slideIndex === 0) {
            slideIndex = 2;
        } else {
            slideIndex--;
        }
    });

    const indicators = document.createElement('ul');
    indicators.classList.add('carousel__indicators');
    document.querySelector('.carousel__inner').append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('carousel__dots');

        dot.setAttribute('data-slide-to', i);
        indicators.append(dot);
        dots.push(dot);


        if (i == 1) {
            dot.classList.add('carousel__dots_active');
        }
    }

    dots.forEach(dot => {
        dot.addEventListener('click', ()=> {
            const slideTo = dot.getAttribute('data-slide-to');
            slideIndex = slideTo;

            showSlide(slideTo);

            dotsActiveAdd();
        });
    });

    ///////////////modal

    const modal = document.querySelector('.modal'),
          overlay = document.querySelector('.modal__overlay'),
          btnModal = document.querySelectorAll('[data-modal]');

    function showModal() {
        modal.style.display = 'flex';
        overlay.style.display = 'block';
    }

    function hideModal() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }

    btnModal.forEach(btn => {
        btn.addEventListener('click', showModal);
    });

    modal.addEventListener('click', (e)=> {
        if (e.target.getAttribute('data-close') == '') {
            hideModal();
        }
    });

    overlay.addEventListener('click', (e)=> {
        if (e.target === overlay) {
            hideModal();
        }
    });
});