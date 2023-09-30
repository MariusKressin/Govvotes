class Component {
	color;
	x;
	y
	width;
	height;
	focus = false;

	constructor(color, x, y, width, height) {
		this.color = color;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		env.pushClickEvent(this, this.onClick.bind(this));
		env.pushKeyEvent(this, this.onKeyPress.bind(this));
	}
	onClick() {}
	onKeyPress() {}
}
