const template = document.createElement("template")
template.innerHTML = /* html */ `
  <style> @import "components/header-nav/header-nav.css"; </style>
  <style id="selectorStyles"></style>
  <header id="header-nav">
    <a class="logo" href=""></a>
    <a href="">
      <span>Home</span>
    </a>
    <a href="repository">
      <span>Repository</span>
    </a>
    <a href="resources">
      <span>Resources</span>
    </a>
    <a href="about">
      <span>About</span>
    </a>
    <a href="https://www.youtube.com" onclick="document.body.classList.add('escape')">
      <span>Quick Escape</span>
    </a>
  </header>
`

customElements.define(
  "header-nav",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
      
      const path = this.dataset.currentPath || "/"
      this.shadowRoot.querySelector(`[href='${path}']:not(.logo)`).classList.add("selected")

      const selectorStyle = this.shadowRoot.getElementById("selectorStyles")
      
      const moveSelector = target => {
        const el = target || this.shadowRoot.querySelector(".selected span")
        selectorStyle.textContent = "header::after {left:" + el.offsetLeft + "px; width:" + el.offsetWidth + "px;}"
      }

      window.addEventListener("DOMContentLoaded", () => window.setTimeout(() => moveSelector(), 10) )

      const header = this.shadowRoot.querySelector("header")
      const navLinks = header.querySelectorAll("a:not(.logo)")

      header.addEventListener("mouseover", e => {
        if (e.target === e.currentTarget) moveSelector()
      })
      
      header.addEventListener("mouseleave", e => {
        if (e.target === e.currentTarget) moveSelector()
      })
      
      
      for (const link of navLinks) {
        if (!link.classList.contains("logo")) {
          const textSpan = link.firstElementChild
          link.addEventListener("mouseenter", e => {
            e.stopPropagation()
            if (e.target === e.currentTarget) {
              moveSelector(textSpan)
            }
          })
        }
      }
    }
  }
)