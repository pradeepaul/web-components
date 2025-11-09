
class Counter extends HTMLElement {
  // initialize a variable or an attribute
  constructor() {
    super();
  }
  // dom manipulation to be done
  connectedCallback() {
    this.innerHTML = 'counter';
  }
  // remove the dom manipulations
  disconnectedCallback() { }
  // listen to the attribute change example inprogress,
  attributeChangedCallback() { }
  // move or chnage child node to iframe or modal
  adoptedCallback() { }
}

customElements.define('app-counter', Counter);