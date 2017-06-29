var elementID;
function toggleDivHider(elementID){
	var element = document.getElementById(elementID);
	if (element.style.display === 'none'){
		unfade(elementID);
	}
	else {
		fade(elementID);
	}
}
function fade(elementID) {
	var element = document.getElementById(elementID);
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
function unfade(elementID) {
	var element = document.getElementById(elementID);
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}
/*
$(window).click(function() {
//Hide the menus if visible
});

$('#menucontainer').click(function(event){
    event.stopPropagation();
});
*/