// ####################
// Draw actions in field
// ####################

const canvas = document.getElementById('canvas');

canvas.width  = 640;
canvas.height = 460;

let index = 0;

const printLine = (x1,y1,x2,y2) => {
	const ctx = canvas.getContext('2d');
	ctx.beginPath();
	// ctx.setLineDash([2, 6]);
	ctx.moveTo(x1, y1);
	// ctx.quadraticCurveTo(((Math.abs((xpos_1-xpos_2))/2)+xpos_1), ((Math.abs((ypos_1-ypos_2))/2)+ypos_2),xpos_2, ypos_2);
	// ctx.bezierCurveTo(20, 100, 200, 100, xpos_2, ypos_2);
	ctx.lineTo(x2, y2);
	ctx.lineWidth = 4;
	ctx.strokeStyle = '#00FFC6';
	ctx.lineCap = 'round';
	ctx.stroke();
};

const defineCoordinates = (event) => {

	index += 1;

	console.log(`point ${index}: ${event.offsetX} / ${event.offsetY}`);

	if (index == 1) {
		this ['xpos_' + index] = event.offsetX;
		this ['ypos_' + index] = event.offsetY;	
	}else if (index == 2) {
		this ['xpos_' + (index)] = event.offsetX;
		this ['ypos_' + (index)] = event.offsetY;

		printLine(xpos_1,ypos_1,xpos_2,ypos_2);

		index = 0;
	}

};

canvas.addEventListener("click", defineCoordinates);


// USE OBJECT INSTEAD OF USING VARIABLE!!! 
// https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object