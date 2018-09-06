console.log('Hello, is it me you\'re looking for?
\'Cause I wonder where you are,
And I wonder what you do.
Is your team in need of a Junior, do you need someone new!?');


//smooth scroll function
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    let target = this.hash,
    $target = $(target);
    if ($(window).width() > 500) {
      // console.log('window is OVER 450px');
      let newTop = $('html body').scrollTop() + $target.position().top-160;
      $('html, body').stop().animate({
        'scrollTop': newTop
      }, 1100, 'linear', function () {
      });
    } else {
      // console.log('window is UNDER 450px');
      console.log($target.position() );
      let newTop = $('#page-container').scrollTop() + $target.position().top-160;
      $('#page-container').stop().animate({
        'scrollTop': newTop
      }, 1100, 'linear', function () {
      });
    }
});
