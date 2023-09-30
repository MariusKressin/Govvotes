const textfield = new Input(200, 200, 200, 20, "Type text here...");
const label = new Label("Name: ", textfield, 165, 200);
const button = new Button("Click me", () => {}, 200, 300, 400, 20);
const form = new Form([label, textfield], (input) => alert(input[1]), button)

function draw() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT)
	background("#dddddf")
	form.show();
}

function mouseClicked() {}
function mouseMoved() {}
function mouseReleased() {}
function mousePressed() {}
function keyTyped() {}
function keyPressed() {}
function keyReleased() {}
