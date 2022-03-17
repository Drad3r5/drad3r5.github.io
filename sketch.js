let circleX = 25;
let circleY = 50;

let circle2X = 410;
let circle2Y = 100;

function setup() {
	createCanvas(500, 500);
}


function draw() {
	background(0);

	fill(255, 0, 0)
	circle(circle2X, circle2Y, 34);

	noStroke();
	fill(0, 255, 0);
	circle(circleX, circleY, 34);

	circleX = circleX + 1;
	if(circleX == 470) {
		circleX = 25;
	}

	circle2X = circle2X + 1;
	if(circle2X == 470) {
		circle2X = 25;
	}
}
