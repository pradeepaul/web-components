const cardTemplate = document.createElement("template");
cardTemplate.innerHTML = `
<style>
div {
border: 1px solid black;
}
</style>
  <div>
  <slot name="card-header">card header</slot>
  </div>
  <div>
    <slot name="card-body">card body</slot>
  </div>
`
class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
  }
}

customElements.define("app-card", Card);