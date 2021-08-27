$(document).ready(function() {


  console.log('are you there?');

  //smooth scroll function
  // $('a[href^="#"]').on('click',function (e) {
  //   e.preventDefault();

  //   let target = this.hash,
  //   $target = $(target);
  //   if ($(window).width() > 500) {
  //     let newTop = $('html body').scrollTop() + $target.position().top-100;
  //     $('html, body').animate({
  //       'scrollTop': newTop
  //     }, 400, 'linear', function () {
  //     });
  //   } else {
  //     let newTop = $('#page-container').scrollTop() + $target.position().top-100;
  //     $('#page-container').animate({
  //       'scrollTop': newTop
  //     }, 400, 'linear', function () {
  //     });
  //   }
  // });


  //read more dropdown
  $('.accordion__title-button').each(function() {

    //binding this to title-button
    var $accordionToggle = $(this);
    

    $accordionToggle.click(function() {

      var $portfolioItem = $(this).closest('.js-portfolio-item'),
          $portfolioText = $portfolioItem.find('.portfolio__project-blurb--secondary');
          console.log($accordionToggle);

      if($portfolioItem.hasClass('active')) {
        $portfolioItem.removeClass('active');
        $accordionToggle.removeClass('active');
        $portfolioText.slideUp(300, function() {
          $portfolioText.removeClass('active');
        });
      } else {
        $portfolioItem.addClass('active');
        $accordionToggle.addClass('active');
        $portfolioText.slideDown(300, function() {
          $portfolioText.addClass('active');
        });
      }
      return false;
    });
  });

  if (window.innerWidth < 960) {
    $('.chevron').css('display', 'none');
  }

  //BURGER NAV 
  // var $windowWidth = $(window).innerWidth(),
  // $desktopLinks = $('.nav__links'),
  // $navIcon = $('.nav__icon');

  //     $(window).on('resize', function(){
       
  //       if ($windowWidth >= 600) {
  //           $desktopLinks.addClass('active');
  //           $navIcon.removeClass('active');
  //       }

  //       if ($windowWidth < 599) {
  //         $navIcon.addClass('active');
  //         $desktopLinks.removeClass('active');
  //       }
       
    
  //       console.log(windowWidth);
  // });

}); //document.ready


