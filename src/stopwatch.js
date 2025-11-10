import "./button.js"
import "./counter.js"

class StopWatch extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <app-counter></app-counter>
    <app-button text="Start"> </app-button>
    <app-button text="Reset"> </app-button>
    `
  }
}

customElements.define("app-stopwatch", StopWatch);