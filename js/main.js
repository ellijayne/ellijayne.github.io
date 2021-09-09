console.log('are you there?');
var nav = document.querySelector('.hamburger');

nav.addEventListener('click', function () {
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
    nav.classList.add('closed')
  } else {
    nav.classList.remove('closed');
    nav.classList.add('open');
  }
});


$(document).ready(function() {



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

}); //document.ready


