console.log('are you there?');


//smooth scroll function
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    let target = this.hash,
    $target = $(target);
    let newTop = $('.page-container').scrollTop() + $target.position().top-70px;
   $('.page-container').stop().animate({
     'scrollTop': newTop
   }, 1100, 'linear', function () {
     // window.location.hash = target;
    });
});
// //
// $('#home-btn').on('click', function(e) {
//   e.preventDefault();
//   $('.page-container').animate({
//     scrollTop: 0
//     }, 1100);
//   });
//
// $("#aboutme-btn").on('click', function(e) {
//     e.preventDefault();
//     console.log(e);
//       $('.page-container').animate({
//           scrollTop: $("#aboutme-section").offset().top - 70
//       }, 1100);
// });
//
// $("#portfolio-btn").on('click', function(e) {
//     e.preventDefault();
//       $('.page-container').animate({
//           scrollTop: $("#portfolio-section").offset().top - 70
//       }, 1100);
// });
// $("#contact-btn").on('click', function(e) {
//     e.preventDefault();
//       $('.page-container').animate({
//           scrollTop: $("#contact-section").offset().top - 70
//       }, 1100);
// });


//TRYING TO FIX MENU
//
// $('.page-container').bind('scroll', function () {
//     var nav = $('nav');
//     if ($('.page-container').scrollTop() > nav.offset().top) {
//         nav.addClass('fixed');
//     } else {
//         nav.removeClass('fixed');
//     }
// });
