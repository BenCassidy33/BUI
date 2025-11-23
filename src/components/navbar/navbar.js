/* Quantum Element! Element is defined in code (html) and immediately collapses into standard html when code is executed */

"use strict";

import "./navbar.css";

class BUI_NAVBAR extends HTMLElement {
	static observedAttributes = [];

	constructor() {
		super();
	}

	connectedCallback() {
		this._internals = this.attachInternals();

		this._left = this.querySelector("bui-navbar-left");
		this._right = this.querySelector("bui-navbar-right");
		this._center = this.querySelector("bui-navbar-right");
	}

	render() {
		// const left = this._left !== null ? this._left.render() : ""
		// const center = this._center !== null ? this._center.render() : ""
		// const right = this._right !== null ? this._right.render() : ""
	}
}

class BUI_NAVBAR_SECTION extends HTMLElement {
	static observedAttributes = [];

	constructor() {
		super();
	}

	connectedCallback() {
		this._internals = this.attachInternals();
	}

	render() {
		return this.innerHTML;
	}
}


customElements.define("bui-navbar", BUI_NAVBAR);
customElements.define("bui-navbar-left", BUI_NAVBAR_SECTION);
