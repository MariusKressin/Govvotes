class Button extends Component {
	textColor;
	label;
	click = () => {};

	constructor(label, click, x, y, width, height, color = "blue", textColor = "white") {
		super(color, x, y, width, height);
		this.label = label;
		this.textColor = textColor;
		this.click = click;
	}

	show() {
		strokeWeight(0.001);
		fill(this.color);
		rect(this.x, this.y, this.width, this.height);
		fill(this.textColor);
		ctx.textAlign = "center";
		ctx.fillText(this.label, this.x + this.width / 2, this.y + this.height / 2 + 4);
		ctx.textAlign = "start";
	}

	onClick() {
		this.click();
	}
}
