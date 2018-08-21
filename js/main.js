console.log('are you there?');

// $(document).ready(function() {


//smooth scroll function
/ $('a[href^="#"]').click(function(e)  {
//
//   e.preventDefault();
//
//   let position = $($(this).attr("href")).offset().top;
//     $("body, html").animate({
//       scrollTop: position
//     }, 1100);
//   });


//   this.hash,
//   $target = $(target);
//
//   $('html, body').stop().animate({
//     'scrollTop': $target.offset().top-70
//   }, 900, 'swing', function(){
//     window.location.hash = target;
//   });
// });
//
$('#home').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
    }, 1100);
  });

$('#aboutme').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#head-shot').offset().top - 70
  }, 1100);
});


// })
