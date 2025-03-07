$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".netflix-navbar").css("background","#0c0c0c")
        }
        else {
            $(".netflix-navbar").css("background","transparent");
        }
    })
})
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 6,
//     spaceBetween: 10,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   // navigation: {
//   //   nextE1: ".swiper-button-next",
//   //   prevEl: ".swiper-button-prev",
//   // },
//     breakpoints: {
//       320: {
//         slidesPerView: 2, // 2 slides for screens >= 640px
//         spaceBetween: 2,
//       },
//       375: {
//         slidesPerView: 3, // 2 slides for screens >= 640px
//         spaceBetween: 2,
//       },
//       425: {
//         slidesPerView: 3, // 2 slides for screens >= 640px
//         spaceBetween: 2,
//       },
//       640: {
//         slidesPerView: 4, // 2 slides for screens >= 640px
//         spaceBetween: 2,
//       },
//       768: {
//         slidesPerView: 5, // 4 slides for screens >= 768px
//         spaceBetween: 0,
//       },
//       1024: {
//         slidesPerView: 6, // 6 slides for screens >= 1024px
//         spaceBetween: 10,
//       },
//     },
    
//   });
//   var swiper = new Swiper(".mySwiper1", {
//     slidesPerView: 6,
//     spaceBetween: 10,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     // navigation: {
//     //   nextE1: ".swiper-button-next",
//     //   prevEl: ".swiper-button-prev",
//     // },
//       breakpoints: {
//         320: {
//           slidesPerView: 2, // 2 slides for screens >= 640px
//           spaceBetween: 2,
//         },
//         375: {
//           slidesPerView: 3, // 2 slides for screens >= 640px
//           spaceBetween: 2,
//         },
//         425: {
//           slidesPerView: 3, // 2 slides for screens >= 640px
//           spaceBetween: 2,
//         },
//         640: {
//           slidesPerView: 4, // 2 slides for screens >= 640px
//           spaceBetween: 2,
//         },
//         768: {
//           slidesPerView: 5, // 4 slides for screens >= 768px
//           spaceBetween: 0,
//         },
//         1024: {
//           slidesPerView: 6, // 6 slides for screens >= 1024px
//           spaceBetween: 10,
//         },
//       },
      
//     });
