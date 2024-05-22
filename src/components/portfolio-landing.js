import mainImage from  '../assets/img/headshot-blk-bdr.png';
import content from '../locales/en/home.json';

export class PortfolioLanding extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( {mode: 'open'} ).innerHTML = /* HTML */`

            <style>
                :host {
                    
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    background-color: var(--section-shadow);
                    opacity: 1;
                    transition: var(--section-transition);

                    margin: auto auto;
                    padding: var(--extra-pad);
                    width: var(--preferred-content);
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

                .summary {
                    margin: auto auto;
                    padding: var(--standard-pad);
                    width: var(--inner-width);
                }

                @media only screen and (max-width: 65ch) {
                    :host {
                        margin: 0;
                        padding: 0;
                        width: 100dvw;
                    }

                    .container {
                        margin: 0;
                        padding: 0;
                        width: 100dvw;

                        .summary {
                            width: 90%;
                        }
                    }
                }
            </style>

            <div class="container">
                <div id="name-main-pic">
                    <h1>${ content.landing.title }</h1>
                    <!-- Main Image / Artistic Headshot  -->
                    <div id="eye-candy-1">
                        <img class="mainImage" src=${ mainImage } alt="Picture of me in Vietnam, wearing a really nice fitting suit."/>
                    </div>
                </div>
                <h2 class="pitch">${ content.landing.pitch }</h2>
                <p class="summary">${ content.landing.summary }<a href="${ content.landing.morePath }" >${ content.landing.more }</a></p>
            <div>
        `;
    }
}

customElements.define( "portfolio-landing", PortfolioLanding );