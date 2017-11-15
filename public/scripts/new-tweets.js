
$( document ).ready(function() {




var hov = $('article');
var icon = $('div');
 hov.mouseenter(function(){
  hov.css('opacity', 1 );
  icon.css('opacity' , 1);
});


hov.mouseleave(function(){
  hov.css('opacity', .7 );
  icon.css('opacity', 0);
});

});