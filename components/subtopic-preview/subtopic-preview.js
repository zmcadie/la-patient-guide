const template = document.createElement("template")
template.innerHTML = /* html */ `
  <style> @import "components/subtopic-preview/subtopic-preview.css"; </style>
  <li class="subtopic-container">
    <button class="subtopic-action-button save-button"></button>
    <div class="subtopic-content-container">
      <slot name="subtopic-title"><h2>Finding an appointment</h2></slot>
      <slot name="preview-body">
        <p>
          The first step is to make an appointment. Two good sources for finding a clinic at any time in pregnancy are ineedana.com and abortionfinder.org. These sources will help you make sure that you don't end up at a crisis pregnancy clinic.
          <br><br>
          If you are looking specifically for care offered after 24wks, this list of providers from Ibis Reproductive Health might be a good place to start.
        </p>
      </slot>
    </div>
  </li>
`

customElements.define(
  "subtopic-preview",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));

      window.addEventListener("DOMContentLoaded", () => window.setTimeout(() => moveSelector(), 10) )

      const container = this.shadowRoot.querySelector("li")
      const saveButton = this.shadowRoot.querySelector(".save-button")
      const expandButton = this.shadowRoot.querySelector(".expand-button")

      saveButton.addEventListener("click", e => {
        if (e.target === e.currentTarget) container.classList.toggle("saved")
      })
      
      container.addEventListener("click", e => {
        if (e.target !== saveButton && !(container.classList.contains("open") && e.target.tagName === "P")) container.classList.toggle("open")
      })
    }
  }
)