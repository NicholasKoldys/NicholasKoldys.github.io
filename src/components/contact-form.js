import content from '../locales/en/home.json';
import nkLogo from '../assets/img/nkLogo.svg';

export class ContactForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( {mode: 'open'} );
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = /* HTML */`
            <style>
                :host {
                    display: block;
                    margin: var(--section-div) auto;
                    width: var(--content-width);
                }

                form {
                    box-sizing: border-box;

                    display: flex;
                    flex-direction: column;
                    align-content: center;
                    justify-content: space-between;
                    
                    border-radius: 2em;
                    padding: var(--standard-pad);
                    width: 100%;

                    background-color: var(--section-shadow);
                    box-shadow: 8px 7px 44px 1px var(--nk-main);

                    h2 {
                        margin: 0;
                        margin-bottom: var(--half-line);
                        line-height: var(--big-font);
                        font-size: var(--big-font);
                        text-decoration: underline solid;
                    }
                }

                :is(input, select, textarea, button) {
                    font-family: inherit;
                    font-style: inherit;
                    font-size: 100%;

                    display: inline-block;

                    padding: var(--standard-pad);
                    
                    border-radius: 1ch;
                }

                label > b { /* BOLD Form Star/Astrisk */
                    color: red;
                }

                button {
                    font-weight: 900;
                    color: inherit;
                    
                    display: block;
                    
                    border: none;
                    padding: var(--extra-pad);
                    
                    background-color: #4CAF50;
                    cursor: pointer;
                    transition: all .2s linear;
                }
                button:hover {
                    color: white;
                    text-shadow: 3px 3px var(--react-dark);
                    background-color: #265e29;
                }

                @media only screen and (max-width: 65ch) {
                    :host {
                        padding: var(--standard-pad) 0;
                        width: 100dvw;
                    }

                    form {
                        margin: 0;
                        padding: var(--standard-pad) 0;

                        .summary {
                            width: 90%;
                        }
                    }
                }
            </style>
            <form action="https://formspree.io/f/xrgrpbrv" method="POST">  
                <h2>Contact Me</H2>
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