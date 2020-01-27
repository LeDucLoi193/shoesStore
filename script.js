$(document).ready(function(){
  var inLoaiGiayUl = false;
  var inLoaiGiay = false;
  var appearUl = false;

  $('#loaiGiay').mouseenter(function(){
    inLoaiGiay = true;
    if (appearUl == false){
      $(this).find('ul').slideDown();
    }
  });
  $('#loaiGiay > ul').mouseenter(function(event){
    event.stopPropagation();
    inLoaiGiayUl = true;
    inLoaiGiay = false;
    appearUl = true;
    console.log(inLoaiGiayUl, inLoaiGiay);
  });
  $('#loaiGiay > ul').mouseleave(function(event){
    // event.stopPropagation();
    console.log(inLoaiGiayUl, inLoaiGiay);
    inLoaiGiayUl = false;
    if (inLoaiGiay == false && inLoaiGiayUl == false){
      $(this).slideUp();
      appearUl = false;
    }
  });
  $('#loaiGiay').mouseleave(function(){
    $(this).find('ul').slideUp();
  });

});