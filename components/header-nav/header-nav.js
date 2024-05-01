/*///////////////////////////////////////////////////////////
//                                                         //
// REMOVE "la-patient-guide/" FROM LINKS BEFORE GOING LIVE //
//                                                         //
///////////////////////////////////////////////////////////*/
const template = document.createElement("template")
template.innerHTML = /* html */ `
  <style> @import "/components/header-nav/header-nav.css"; </style>
  <header id="header-nav">
    <a class="logo" href="/la-patient-guide/"></a>
    <a href="/la-patient-guide/">Home</a>
    <a href="/la-patient-guide/repository">Repository</a>
    <a href="/la-patient-guide/resources">Resources</a>
    <a href="/la-patient-guide/about">About</a>
    <a href="/la-patient-guide/escape">Quick Escape</a>
  </header>
`

customElements.define(
  "header-nav",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
)