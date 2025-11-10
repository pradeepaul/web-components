const btnTemplate = document.createElement('template');
btnTemplate.innerHTML = `
 <style>
        .btn {
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 7px;
          padding: 0 2rem;
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
            'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
          font-size: 12px;
          box-shadow: 0px 4px, 14px rgba(0, 118, 225, 0.39);
        }
        .btn:hover {
          background-color: #1d80f0;
        }
        .btn:disabled {
          background-color: #6aa8f0;
        }
        .fading {
          animation: fading 0.5s infinite;
        }

        @keyframes fading {
          0% {
            color: #6aa8f0;
          }

          50% {
            color: white;
          }

          100% {
            color: #6aa8f0;
          }
        }

    
      </style>
      <button class="btn">button text</button>
`;
class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    const text = this.getAttribute('text');
    this.shadowRoot.appendChild(btnTemplate.content.cloneNode(true));
    this.button = this.shadowRoot.querySelector("button");
    this.button.textContent = text;
  }

  set inprogress(progress) {
    if (progress) {
      this.setAttribute("inprogress", "true");
    } else {
      this.removeAttribute("inprogress");
    }
  }

  get inprogress() {
    return this.getAttribute("inprogress");
  }

  static get observedAttributes() {
    return ['inprogress'];
  }

  attributeChangedCallback(attr, old, newval) {
    if (newval) {
      this.button.textContent = 'loading ...';
      this.button.setAttribute('disabled', true);
      this.button.classList.add('fading');
    } else {
      this.button.textContent = this.getAttribute('text');
      this.button.classList.remove('fading');
      this.button.removeAttribute('disabled');
    }
  }
}

customElements.define('app-button', Button);
