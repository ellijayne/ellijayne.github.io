console.log('are you there?');


//smooth scroll function
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    let target = this.hash,
    $target = $(target);
    let newTop = $('.page-container').scrollTop() + $target.position().top-120;
   $('.page-container').stop().animate({
     'scrollTop': newTop
   }, 1100, 'linear', function () {

    });
});
