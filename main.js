$.fn.drawCircle = function(id) {
	var c = document.getElementById(id);
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(100,100,75,0,2*Math.PI);
	ctx.strokeStyle = "#A70000";
	ctx.stroke();
}

for ( canvasNum = 1; canvasNum <= 1; canvasNum++) {
    var canvasNum = canvasNum.toString();
    alert(canvasNum + typeof canvasNum);
    canvasNum = canvasNum - 1;
    var array = [1,2];
    var canId = $("canvas[canvasElement=array[canvasNum]]").attr("id");
    alert(canId);
}