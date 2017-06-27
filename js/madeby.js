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
$(document).ready(function() {
	$('.okinput').click(function(){
   	if ($('input[name=joke]:checked', '#form_s2').val()=="History"){
   		var OpenWindow = window.open('history.html','_blank','width=335,height=330,resizable=1');
		OpenWindow.document.write(output);
		var count = 0;
 		var checked = 0;
  		function countBoxes() { 
    		count = $("input[type='checkbox']").length;
    		console.log(count);
  		}
  
  		countBoxes();
  		$(":checkbox").click(countBoxes);
  
  // count checks
  
 		function countChecked() {
    		checked = $("input:checked").length;
    
    		var percentage = parseInt((checked ));
   			 if (percentage>=3){
      			alert('Chose');
    	}
    
    
  }
  
  		countChecked();
  		$(":checkbox").click(countChecked);
		
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
