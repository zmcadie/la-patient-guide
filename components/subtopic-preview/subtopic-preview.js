const template = document.createElement("template")
template.innerHTML = /* html */ `
  <style> @import "/components/subtopic-preview/subtopic-preview.css"; </style>
  <li class="subtopic-container">
    <div class="subtopic-content-container">
      <h2><slot name="subtopic-title">Finding an appointment</slot></h2>
      <p>
        <slot name="preview-body">
          The first step is to make an appointment. Two good sources for finding a clinic at any time in pregnancy are ineedana.com and abortionfinder.org. These sources will help you make sure that you don't end up at a crisis pregnancy clinic.
          <br><br>
          If you are looking specifically for care offered after 24wks, this list of providers from Ibis Reproductive Health might be a good place to start.
        </slot>
      </p>
    </div>
    <div class="subtopic-actions-container">
      <button>+</button>
      <button>⤡</button>
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
    }
  }
)