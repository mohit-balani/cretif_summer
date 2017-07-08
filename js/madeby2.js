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
$(document).ready(function(){
  $("#entire").hide();
    $(".vals").click(function(){
        $("#entire").show(1000);
    });
    $(".close").click(function(){
      $("#entire").hide(1000);
    });
     var $win = $("#hero"); // or $box parent container
        var $box = $("#entire");
        var $dc = $(".vals")
      
        
         $win.on("click.Bst", function(event){    
          if ( 
            $box.has(event.target).length == 0 //checks if descendants of $box was clicked
            &&
            !$box.is(event.target) 
            &&
            !$dc.is(event.target)//checks if the $box itself was clicked
          ){
            $("#entire").hide(1000);
          }
    });
     var $checkboxes = $('.counter input[type="checkbox"]');
      
    $checkboxes.change(function(){
        var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
        if(countCheckedCheckboxes>=3){
          alert("Please choose only two variables!")
        }
      
      
        
    });
});


