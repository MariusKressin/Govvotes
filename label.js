class Label extends Component {
	component;
	text = "";

	constructor(text, component, x, y) {
		super("black", x, y, text.length * 6, 12);
		this.label = text;
		this.component = component;
	}

	onClick() {
		this.component.focus = true;
	}

	show() {
		ctx.font = "10px Monospace";
		fill("black");
		ctx.fillText(this.label, this.x, this.y + 12);
		this.focus = false;
	}
}
