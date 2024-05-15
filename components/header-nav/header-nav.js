const template = document.createElement("template")
template.innerHTML = /* html */ `
  <style> @import "/components/header-nav/header-nav.css"; </style>
  <header id="header-nav">
    <a class="logo" href="/"></a>
    <a href="/">Home</a>
    <a href="/repository">Repository</a>
    <a href="/resources">Resources</a>
    <a href="/about">About</a>
    <a href="/escape">Quick Escape</a>
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