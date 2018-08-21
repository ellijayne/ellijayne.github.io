console.log('are you there?');

// $(document).ready(function() {


//smooth scroll function
// $('a[href^="#"]').on('click',function (e) {
//     // e.preventDefault();
//
//     let target = this.hash,
//     $target = $(target);
//
//    $('html, body').stop().animate({
//      'scrollTop': $target.offset().top-70
//     }, 900, 'swing', function () {
//      window.location.hash = target;
//     });
// });
//
$('#home-btn').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
    }, 1100);
  });

$("#aboutme-btn").on('click', function(e) {
    e.preventDefault();
    console.log(e);
      $('html, body').animate({
          scrollTop: $("#aboutme-section").offset().top - 70
      }, 1100);
});


// })
