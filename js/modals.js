<<<<<<< HEAD
function SubstationTracer()
=======
var sub;
function SubstationTracer(sub){
	alert(sub);
	document.getElementById("modal").innerHTML = '<h1>' + sub + '</h1>' + '<a href="" class="close">&#215;</a>\
<div id="p">\
<form id="form_s2" action="" method="post">\
<input class="historyinput" type="radio" name="joke" value="History" /> History\
<input class="presentinput" type="radio" name="joke" value="Present" /> Present\
<input class="okinput" type="submit" value="OK"></form></div>';
}
>>>>>>> samm
