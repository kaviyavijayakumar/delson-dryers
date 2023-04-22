$(document).ready(function() {
    $('a').click(function() {
      $(this).prev('div').toggleClass('hide');
      if ($(this).prev('div').hasClass('hide')) {
        $(this).text('Show more');
      } else {
        $(this).text('Show less');
      }
    });
  });