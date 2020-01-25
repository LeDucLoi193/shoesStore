$(document).ready(function(){
    $('#loaiGiay').hover(function(event){
        event.stopPropagation();
        $(this).find('ul').slideDown();
    });
    $('#loaiGiay > ul').mouseout(function(){
        event.stopPropagation();
        $(this).slideUp();
    });
});