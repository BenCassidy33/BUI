"use strict";

import "./code.css";

// BUI_CODE element always assumes that the code is written in plain text as the child of the element!
class BUI_CODE extends HTMLElement {
	static observedAttributes = ["language", "theme"];

    constructor() {
        super();
        this._internals = this.attachInternals();
    }

	connectCallback() {
        this._parseAttributes();
    }

    _parseAttributes() {
        this._code = this.innerText || "";
    }
}

customElements.define("BUI_CODE");
