$(document).ready(function(){
  $('#loaiGiay').mouseenter(function(event){
    event.stopPropagation();
    $(this).find('ul').slideDown();
  });
  $('#loaiGiay').mouseleave(function(event){
    event.stopPropagation();
    $(this).find('ul').slideUp();
  });

});