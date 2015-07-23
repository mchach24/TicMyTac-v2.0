$.fn.drawCircle = function (id) {
	var c = document.getElementById(id);
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(100,100,75,0,2*Math.PI);
	ctx.strokeStyle = "#A70000";
	ctx.stroke();
}

function assignCanvasId() {
    var canvasNumber = 1;
    while (canvasNumber <= 81) {
        var canvasNumber = canvasNumber.toString();
        var canvas = $("canvas[canvas-number='" + canvasNumber +"']");
        var parentId = canvas.parents(".subGame").attr("id");
        for (row = 1; row <= 3; row++) {
            for (column = 1; column <= 3; column++) {
                canvas.attr("id","'" + parentId + "-ca" + canvasNumber + "-r" + row + "c" + column +"'");
                canvasNumber++;
            }
        }
    }
}

assignCanvasId();