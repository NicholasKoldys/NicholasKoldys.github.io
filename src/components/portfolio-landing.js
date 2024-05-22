import mainImage from  '../assets/img/headshot-blk-bdr.png';
import content from '../locales/en/home.json';

export class PortfolioLanding extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( {mode: 'open'} ).innerHTML = /* HTML */`

            <style>
                :host {
                    display: block;
                    margin: 0 auto var(--section-div) auto;
                    width: 100%;
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    background-color: var(--section-shadow);
                    opacity: 1;
                    transition: var(--section-transition);
                    <!-- box-shadow: 0px -50px var(--nav-height) var(--nav-height) var(--section-shadow); -->

                    margin: auto auto;
                    padding: var(--extra-pad) 0;
                    width: 100%;
                }

                #name-main-pic {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    h1 {
                        text-align: center;
                        margin: 0;
                        margin-bottom: var(--half-line);
                        line-height: var(--barely-big-line);
                        font-size: var(--big-smooshed-font);
                        text-decoration: underline solid;
                    }
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
                    }

                    .container {
                        margin: 0;
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