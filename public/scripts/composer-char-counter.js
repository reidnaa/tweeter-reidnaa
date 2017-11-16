$( document ).ready(function() {
  console.log('document loaded');

  var maxChar = 140;

  var text_input = $('.text-input');
  var counter = $('.counter');

  counter.text(maxChar);

  text_input.keyup(function(){
    var characters = $(this).val().length ;
     counter.text(maxChar - characters );

    if (characters > maxChar){
      counter.addClass('go-red');
    } else {
      counter.removeClass('go-red');
    }

  });
});