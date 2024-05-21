import content from '../locales/en/home.json';
import nkLogo from '../assets/img/nkLogo.svg';

export class ContactForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( {mode: 'open'} );
    }

    connectedCallback() {
        /** @type {Array<String>} */
        const images = this.dataset.imageUrls ? JSON.parse(this.dataset.imageUrls) : [ nkLogo ];

        this.shadowRoot.innerHTML = /* HTML */`
            <style>
                :host {
                    width: 100%;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    
                    background-color: var(--tertiary-dark);
                    padding: var(--standard-pad);
                }

                form > :is(input, select, textarea, button) {
                    font-family: inherit;
                    font-style: inherit;
                    font-size: 100%;
                    color: black;
                    display: inline-block;
                    box-sizing: border-box;
                    width: 100%;
                    padding: var(--standard-pad);
                    margin: 2ex 0;
                    /* border: 1px solid #ccc; */
                    border-radius: 1ch;
                }
                form > label > b { /* BOLD Form Star/Astrisk */
                    color: red;
                }

                form > button[type=submit] {
                    display: block;
                    font-weight: 900;
                    color: inherit;
                    background-color: #4CAF50;
                    padding: var(--extra-pad);
                    margin: 4ex 0;
                    border: none;
                    cursor: pointer;
                    transition: all .2s linear;
                }
                form > button[type=submit]:hover {
                    color: white;
                    text-shadow: 3px 3px var(--react-dark);
                    background-color: #265e29;
                }
            </style>
            <form action="https://formspree.io/f/xrgrpbrv" method="POST">  
                <label for="_name">${ content.form.name }:</label>
                    <input type="text" name="_name" placeholder="${ content.form.name }">
                <label for="_phone">${ content.form.phone }:</label>
                    <input type="tel" name="_phone" placeholder="${ content.form.phone } #"></label>
                <label for="_replyto">${ content.form.email }:<b> *</b></label>
                    <input type="email" name="_replyto" required placeholder="your@email.com">
                <label for="_msgtype">${ content.form.typeTitle }:</label>
                    <select name="_msgtype">
                        <option value="contact">${ content.form.types.contact }</option>
                        <option value="interest">${ content.form.types.interest }</option>
                        <option value="job">${ content.form.types.work }</option>
                        <option value="other">${ content.form.types.other }</option>
                    </select>
                <label for="_message">${ content.form.message }:<b> *</b></label>
                    <textarea name="_message" rows="8" cols="33" required placeholder="${ content.form.message }" ></textarea>
                <button type="submit" aria-label="${ content.form.submit }">${ content.form.submit }</button>
            </form>
        `;
    }
}

customElements.define( "contact-form", ContactForm );