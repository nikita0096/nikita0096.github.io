  ///tini
//   import { tns } from "./node_modules/tiny-slider/src/tiny-slider";
//     const slider = tns({
//         container: '.carousel__inner',
//         items: 1,
//         slideBy: 'page',
//         autoplay: false,
//         controls: false,
//         nav: false,
//         responsive: {
//             640: {
//             edgePadding: 20,
//             gutter: 20,
//             items: 2
//             },
//             700: {
//             gutter: 30
//             },
//             900: {
//             items: 3
//             }
//         }
//         });
//         document.querySelector('.prev').addEventListener('click',function () {
//         slider.goTo('prev');
//         });
//         document.querySelector('.next').addEventListener('click',function () {
//       slider.goTo('next');
//   });

/////////////// slik-slide
// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         variableWidth: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                   dots: true,
//                   arrows: false
//                 }
//             }
//         ]
//       });
//   });

  //////jquery tabs

  (function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
    });
    
    ///tabs description
    
    $('.catalog-item__content').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
    
    $('.catalog-item__list').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
    
    ///// modal jquery
    
    $('[data-modal="consultation"]').on('click', function(e) {
        $('.overlay, #consultation').fadeIn('slow');
    });
    
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    
    $('[data-modal="order"]').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    ////smooth scroll page up

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a[href^='#']").click(function() {
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
    
    //////validate
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                  required: true,
                  email: true
                }
            },
            messages: {
                name: "Please specify your name",
                phone: "Please enter valide phone",
                email: {
                  required: "We need your email address to contact you",
                  email: "Your email address must be in the format of name@domain.com"
                }
              }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation .feed-form');
    validateForms('#order .feed-form');

//////
/////////////mailer 
$('form').submit(function(e) {
  e.preventDefault();

  if (!$(this).valid()) {
    return;
  }

  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    $('#consultation, #order').fadeOut();
    $('.overlay, #thanks').fadeIn('slow');
    $('form').trigger('reset');
  });

  return false;
});

})(jQuery); //jquery tab






// window.addEventListener('DOMContentLoaded', ()=> {
//     const catalogTabs = document.querySelector('.catalog__tabs'),
//         catalogTab = document.querySelectorAll('.catalog__tab'),
//         catalogContent = document.querySelectorAll('.catalog__content'),
//         other = document.querySelectorAll('.catalog-item__link'),
//         backTabBtn = document.querySelectorAll('.catalog-item__back'),
//         itemContent = document.querySelectorAll('.catalog-item__content'),
//         itemList = document.querySelectorAll('.catalog-item__list');

//     function toggleSlide (selector) {
//         selector.forEach((item, i) => {
//             item.addEventListener('click', (e)=> {
//                 if (e.target == item) {
//                     itemContent[i].classList.toggle('catalog-item__content_active');
//                     itemList[i].classList.toggle('catalog-item__list_active');
//                 }
//             });
//         });
//     }

//     toggleSlide(other);
//     toggleSlide(backTabBtn);

//     function hideTabs () {
//         catalogTab.forEach(item => {
//             item.classList.remove('catalog__tab_active');
//         });

//         catalogContent.forEach(item=> {
//             item.classList.remove('catalog__content_active');
//         });
//     }

//     function showTabs (i = 0) {
//         catalogTab[i].classList.add('catalog__tab_active');
//         catalogContent[i].classList.add('catalog__content_active');
//     }

//     hideTabs();
//     showTabs();

//     catalogTabs.addEventListener('click', (e)=> {
//             if (e.target && e.target.classList.contains('catalog__tab')) {
//                 catalogTab.forEach((item, i)=> {
//                     if (e.target == item) {
//                         hideTabs();
//                         showTabs(i);
//                     }
//                 });
//             }
//     });
// }); ///tabs


// //////////////my cod slider
// window.addEventListener('DOMContentLoaded', ()=> {
//     const carouselWrap = document.querySelector('.carousel__wrap'),
//         carouselInner = document.querySelector('.carousel__inner'),
//         btnPrew = document.querySelector('.carousel__prewios'),
//         slides = document.querySelectorAll('.carousel__slide'),
//         btnNext = document.querySelector('.carousel__next'),
//         width = window.getComputedStyle(carouselWrap).width;
//     let offset = 0;

//     function deletTextPx (num) {
//         return +num.replace(/\D/g, '');
//     }


//     btnNext.addEventListener('click', (e)=> {
//         if (offset == deletTextPx(width) * (slides.length - 1)) {
//             offset = 0;
//         } else {
//             offset += deletTextPx(width);
//         }
//         carouselInner.style.transform = `translate(-${offset}px)`;
//     });

//     btnPrew.addEventListener('click', (e)=> {
//         if (offset == 0) {
//             offset = deletTextPx(width) * (slides.length - 1);
//         } else {
//             offset -= deletTextPx(width);
//         }

//         carouselInner.style.transform = `translate(-${offset}px)`;
//     });

//     /////modal
//     const consultationBtn = document.querySelectorAll('[data-modal = "consultation"]'),
//         modalConsultation = document.querySelector('#consultation'),
//         closeModal =document.querySelectorAll('.modal__close'),
//         overlay = document.querySelector('.overlay'),
//         orderBtn =document.querySelectorAll('[data-modal="order"]'),
//         modalOrder = document.querySelector('#order'),
//         modalDescr = document.querySelectorAll('#descr_puls'),
//         catalogItemSubtitle = document.querySelectorAll('.catalog-item__subtitle');
//         // timerModalConsultation = setTimeout(showModal, 20000);

//     function showModal(modal = modalConsultation) {
//         modal.style.display = 'block';
//         overlay.style.display ='block';
//         // clearInterval(timerModalConsultation);
//     }

//     function hideModal(modal) {
//         modal.style.display = 'none';
//         overlay.style.display ='none';
//     }

//     function eventModal(btn, modal) {
//         btn.forEach((item, i) => {
//             item.addEventListener('click', ()=> showModal(modal));
//         });
//     }

//     eventModal(consultationBtn, modalConsultation);
//     eventModal(orderBtn, modalOrder);

//     // consultationBtn.forEach(item => {
//     //     item.addEventListener('click', ()=> showModal(modalConsultation));
//     // });
//     closeModal.forEach(item => {
//         item.addEventListener('click',()=> {
//             hideModal(modalConsultation);
//             hideModal(modalOrder);
//         });
//     });

//     overlay.addEventListener('click', (e)=> {
//         if (e.target === overlay) {
//             hideModal(modalConsultation);
//         }
//     });

//     document.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape') {
//             hideModal(modalConsultation);
//         }
//     });

    
// });

