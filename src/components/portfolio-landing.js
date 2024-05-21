import mainImage from  '../assets/img/headshot-blk-bdr.png';
import content from '../locales/en/home.json';

export class PortfolioLanding extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( {mode: 'open'} ).innerHTML = /* HTML */`

            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: var(--extra-pad);
                }

                #name-main-pic {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                #eye-candy-1 {
                    margin: auto auto;
                }

                .mainImage {
                    width: clamp( 350px, 50dvw, 500px );
                }
            </style>

            <div id="name-main-pic">
                <h1>${ content.landing.title }</h1>
                <!-- Main Image / Artistic Headshot  -->
                <div id="eye-candy-1">
                    <img class="mainImage" src=${ mainImage } alt="Picture of me in Vietnam, wearing a really nice fitting suit."/>
                </div>
            </div>
            <h2>${ content.landing.pitch }</h2>
            <p>${ content.landing.summary }<a href="${ content.landing.morePath }" >${ content.landing.more }</a></p>
        `;
    }
}

customElements.define( "portfolio-landing", PortfolioLanding );