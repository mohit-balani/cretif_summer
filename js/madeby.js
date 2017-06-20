$(document).ready(function(){
	$("#nm").animate({bottom:'3%'}, 3000);
	$("#nm1").animate({left:'3%'}, 3000);
	$("#ap").animate({bottom:'3%'}, 3000);
	$("#ap1").animate({left:'25%'}, 2000);
	$("#sa").animate({bottom:'3%'}, 3000);
	$("#sa1").animate({right:'34.5%'}, 2000);
	$("#mb").animate({bottom:'3%'}, 3000);
	$("#mb1").animate({right:'7.5%'}, 3000);
})
$('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});