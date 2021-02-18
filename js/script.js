$(function() {
  $('#headerimg').fadeIn(2000);

});
// スクロールフェードイン
$(function(){
function fianim(){
$('.fade-in-up').each(function(){
var target = $(this).offset().top;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll > target - windowHeight){
$(this).css('opacity','1');
$(this).css('transform','translateY(0)');
}
});
}
fianim();
$(window).scroll(function (){
fianim();
});
jQuery(window).scroll();
});
