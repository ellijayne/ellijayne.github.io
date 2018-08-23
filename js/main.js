console.log('are you there?');


//smooth scroll function
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    let target = this.hash,
    $target = $(target);
    let newTop = $('html body').scrollTop() + $target.position().top-160;
   $('html, body').stop().animate({
     'scrollTop': newTop
   }, 1100, 'linear', function () {

    });
});
