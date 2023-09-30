const canvas = document.getElementById("canvas");
canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const ctx = canvas.getContext("2d");
function fill(color) {
	ctx.fillStyle = color;
}
function stroke(color) {
	ctx.strokeStyle = color;
}
function strokeWeight(weight) {
	ctx.lineWidth = weight;
}
function background(color) {
	const oldColor = ctx.fillStyle;
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = oldColor;
}
function rect(x, y, width, height) {
	ctx.fillRect(x, y, width, height);
	ctx.strokeRect(x, y, width, height);
}
function ellipse(x, y, width, height) {
	ctx.fillEllipse(x, y, width, height);
	ctx.strokeEllipse(x, y, width, height);
}
function line(x, y, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x2, y2);
	ctx.stroke();
	ctx.closePath();
}
function circle(x, y, r) {
	ctx.fillCircle(x, y, r);
	ctx.strokeCircle(x, y, r);
}

class Environment {
	clickEvents = [];
	keyEvents = [];
	constructor() {}

	pushClickEvent(obj, func) {
		const event = canvas.addEventListener("click", function (e) {
			if (e.clientX >= obj.x && e.clientX <= obj.x + obj.width && e.clientY >= obj.y && e.clientY <= obj.y + obj.height) {
				obj.focus = true;
				func();
			} else {
				obj.focus = false;
			}
		});
		this.clickEvents.push(event);
	}

	pushKeyEvent(obj, func) {
		const event = document.addEventListener("keydown", function (e) {
			if (obj.focus) {
				func(e.key);
			}
		});
		this.keyEvents.push(event);
	}
}

const env = new Environment();
