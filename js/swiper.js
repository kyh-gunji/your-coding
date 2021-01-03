var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    autoplay: {
        delay: 5000,
    },
    loop: true,
    centeredSlides :true,
    slidesPerView: 1,
    spaceBetween: 10,
    
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3.76,
        spaceBetween: 56
      }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    touchReleaseOnEdges: true,
  })