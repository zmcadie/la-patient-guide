const template = document.createElement("template")
template.innerHTML = /* html */ `
  <style> @import "components/repository-container/repository-container.css"; </style>
  <details class="topic-container" open>
    <summary>
      <h1><span class="topic-number">1</span>Booking an appointment</h1>
    </summary>
    <p>It's okay if you don't know how to pay for the appointment yet, or how you will get to the clinic. Most people don't.</p>
    <ul class="subtopic-list">
      <subtopic-preview>
        <h2 slot="subtopic-title">
          Finding an appointment
        </h2>
        <p slot="preview-body">
          The first step is to make an appointment. Two good sources for finding a clinic at any time in pregnancy are ineedana.com and abortionfinder.org. These sources will help you make sure that you don't end up at a crisis pregnancy clinic.
          <br><br>
          If you are looking specifically for care offered after 24wks, this list of providers from Ibis Reproductive Health might be a good place to start.
        </p>
      </subtopic-preview>
      <subtopic-preview>
        <h2 slot="subtopic-title">
          Questions to prepare for
        </h2>
        <p slot="preview-body">
          When you call to schedule an appointment, the person you talk to will have a list of questions to ask you. This list of questions is called an intake. Some of the questions might feel weird and personal, or unrelated to abortion.They ask you these questions so that they can they can help figure out what the best place is for you to get care and give the doctor all of the information need to know before you get there. This will save you time, and often means that you only have to have one appointment with them instead of two.
          <br><br>
          Because of these intake questions, you might want to make your calls when you have at least ten to fifteen minutes available. You might also want to make the phone calls from somewhere where you will feel comfortable answering some questions about your medical history. For example, you will probably be asked to give your <strong>height, weight, and blood type.</strong> You also be asked you how many times <strong>you've been pregnant,</strong> if you've ever <strong>had a c-section,</strong> if you take any <strong>medications</strong> and if you have <strong>allergies.</strong>
          <br><br>
          If you can't call from a private place, that's okay too. Clinics will understand that you are balancing a lot. Call when you can, even if it's not the perfect time.
        </p>
      </subtopic-preview>
      <subtopic-preview>
        <h2 slot="subtopic-title">
          What is a crisis pregnancy center?
        </h2>
        <p slot="preview-body">
          Crisis pregnancy clinics (CPCs) are run by people who are against abortion. They look just like abortion clinics so that people who want abortions will go to them. They are designed to trick people into changing their mind about getting an abortion. If you go to a crisis pregnancy clinic, they might tell you it's too late in the pregnancy to get an abortion when that's not true. They might make you watch videos that describe fake consequences or risks to abortion, or make you listen to the electro-pulse or the 'heartbeat'. They will not refer you to an abortion clinic. Also, it's important to know that the people who work there often do not have any medical training.
          <br><br>
          How to spot crisis pregnancy clinics:<br>
          Look for words like “pregnancy options”, “pregnancy care center” or “pregnancy resource center”. If they offer free pregnancy tests and refuse to give you the result or refuse to give you the result in writing, you are likely at a crisis pregnancy center.
        </p>
      </subtopic-preview>
    </ul>
  </details>
`

customElements.define(
  "repository-container",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
)