class Input extends Component {
	value = "";
	position = 0;
	placeholder = "";

	constructor(x, y, width, height, placeholder, color = "white") {
		super(color, x, y, width, height);
		this.placeholder = placeholder;
	}

	onKeyPress(key) {
		if (key.length <= 1) {
			const array = this.value.split("")
			array.splice(this.position, 0, key)
			this.value = array.join("");
			this.position++;
			return;
		}
		switch (key) {
			case "ArrowLeft":
				this.position--;
				if (this.position < 0) {
					this.position = 0;
				}
				break;
			case "ArrowRight":
				this.position++;
				if (this.position > this.value.length) {
					this.position = this.value.length;
				}
				break;
			case "ArrowUp":
				this.position = this.value.length;
				break;
			case "ArrowDown":
				this.position = 0;
				break;
			case "Escape":
				this.focus = false;
				break;
			case "Backspace":
				if (this.value.length == 0) return;
				const array = this.value.split("")
				array.splice(this.position-1, 1)
				this.value = array.join("");
				this.position --;
				break;
			// default:
			// 	console.log(key);
			// 	break;
		}
	}

	show() {
		if (this.focus) {
			stroke("blue");
			strokeWeight(1.5);
		} else {
			stroke("black")
			strokeWeight(1);
		}
		fill(this.color);
		rect(this.x, this.y, this.width, this.height);
		ctx.font = "10px Monospace";
		fill("black");
		ctx.fillText(this.value, this.x + 5, this.y + this.height/2 + 3);
		if (!this.value) {
			fill("#777");
			ctx.fillText(this.placeholder, this.x + 5, this.y + this.height/2 + 3);
		}
		if (this.focus) {
			stroke("black");
			strokeWeight(1);
			line(this.x + 6 + this.position * 6, this.y + this.height/2 + 4, this.x + 6 + this.position * 6, this.y + this.height/2 - 6);
		}
	}
}
