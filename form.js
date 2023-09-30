class Form {
	components = [];
	submitButton = {};
	action = () => {};

	constructor(components, action, submitButton) {
		this.components = components;
		this.submitButton = submitButton;
		this.action = action;

		for (let c of this.components) {
			env.pushKeyEvent(c, (key => {
				if (key == "Enter") {
					c.focus = false;
					this.submit();
				}
			}).bind(this))
		}

		env.pushClickEvent(this.submitButton, this.submit.bind(this))
	}

	push(component) {
		this.components.push(component);

		env.pushKeyEvent(component, (key => {
			if (key == "Enter") {
				this.submit();
			}
		}).bind(this))
	}

	submit() {
		this.action(this.components.map(c => c.value))
	}

	show() {
		for (let c of this.components) {
			c.show();
		}
		this.submitButton.show();
	}
}
