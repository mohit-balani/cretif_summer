$(document).ready(function(){
	$("#nm").animate({bottom:'3%'}, 3000);
	$("#nm1").animate({left:'3%'}, 3000);
	$("#ap").animate({bottom:'3%'}, 3000);
	$("#ap1").animate({left:'25%'}, 2000);
	$("#sa").animate({bottom:'3%'}, 3000);
	$("#sa1").animate({right:'34.5%'}, 2000);
	$("#mb").animate({bottom:'3%'}, 3000);
	$("#mb1").animate({right:'7.5%'}, 3000);
  var x='4,70,702';
document.getElementById('poas1').value=x;
var x='4,70,702';
document.getElementById('poas2').value=x;
var y='4,70,702.72';
document.getElementById('pomtp').value=y;

var z='4,70,';
document.getElementById('pohs').value=z;
var a='4,70,702.72';
document.getElementById('pomi').value=a;
var x='4,70,702';
document.getElementById('voas1').value=x;
var x='4,70,702';
document.getElementById('voas2').value=x;
var y='4,70,702.72';
document.getElementById('vomtp').value=y;

var z='4,70,';
document.getElementById('vohs').value=z;
var a='4,70,702.72';
document.getElementById('vomi').value=a;
var x='4,70,702';
document.getElementById('inas1').value=x;
var x='4,70,702';
document.getElementById('inas2').value=x;
var y='4,70,702.72';
document.getElementById('inmtp').value=y;

var z='4,70,';
document.getElementById('inhs').value=z;
var a='4,70,702.72';
document.getElementById('inmi').value=a;
var x='4,70,702';
document.getElementById('fras1').value=x;
var x='4,70,702';
document.getElementById('fras2').value=x;
var y='4,70,702.72';
document.getElementById('frmtp').value=y;

var z='4,70,';
document.getElementById('frhs').value=z;
var a='4,70,702.72';
document.getElementById('frmi').value=a;


})
var sub;
function substationTracer(sub){
  alert(sub)
} 

$('.button').click(function(){
  
  
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});
$(document).ready(function() {
	$('.okinput').click(function(){
   	if ($('input[name=joke]:checked', '#form_s2').val()=="History"){
   		var OpenWindow = window.open('history.html','_blank','width=335,height=330,resizable=1');
		OpenWindow.document.write(output);
		
		}
   	else if ($('input[name=joke]:checked', '#form_s2').val()=="Present"){

   		$('.modal-bg').fadeOut();		
    	$('#modal').stop().animate({opacity:0, width:0, height:0 ,marginTop:0, marginLeft:0}, 300, function(){
			$(this).css('display','none');
		});
	    var OpenWindow = window.open('present.html','_blank','width=335,height=330,resizable=1');
		OpenWindow.document.write(output);
   		
  
   	}
   })
   $('body').append('<div class="modal-bg"></div>');
  
    $('.button').click(function(){
      $('#modal').css({'display':'block', opacity:0});
      $('.modal-bg').fadeIn();
      var toWidth = $('#modal').find('#p').width() + 30;
      var toHeight = $('#modal').find('#p').height() + 30;
      $('#modal').animate({opacity:1, width:toWidth,height:toHeight,marginTop:'-100px',marginLeft:'-200px'},300);
       return false;
		}); 
  
  
  
	$('.close, .modal-bg').click(function(){
		   $('.modal-bg').fadeOut();		
    $('#modal').stop().animate({opacity:0, width:0, height:0 ,marginTop:0, marginLeft:0}, 300, function(){
			$(this).css('display','none');
		});
	     return false;
	});
  
});





