$(document).ready(function(){
	$("#entire").hide();
    $("button").click(function(){
        $("p").hide(1000);
        $("#entire").show(1000);
    });
});