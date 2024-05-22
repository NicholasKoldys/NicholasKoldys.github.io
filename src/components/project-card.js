import nkLogo from '../assets/img/nkLogo.svg';

export class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( {mode: 'open'} );
    }

    connectedCallback() {
        /** @type {Array<String>} */
        const images = this.dataset.imageUrls ? JSON.parse(this.dataset.imageUrls) : [ nkLogo ];

        const imageElements = images.map(url => {
            return /* HTML */ `<img src=${url} alt=""/>`;
        });

        this.shadowRoot.innerHTML = /* HTML */`
            <style>
                :host {
                    box-sizing: border-box;
                    display: block;
                    width: 100%;
                }

                .project {
                    box-sizing: border-box;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    background-color: var(--section-shadow);
                    opacity: 1;
                    transition: var(--section-transition);

                    margin: 0 auto;
                    width: var(--inner-width);

                    margin-bottom: 15ex;
                    padding: 1%;
                    border: 1px #fff solid;
                }

                .project-img {
                    padding: clamp(1ch, 1vh, 3ch) 0;
                    height: auto;
                    width: clamp(30vw, 600px, 100%);
                }

                .image-selection {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-evenly;
                }

                .image-selection > img {
                    padding: clamp(1ch, 5%, 5ch);
                    width: clamp(25vw, 350px, 30%);
                }

                .project-desc {
                    padding: var(--standard-pad);
                }

                .project-desc > p {
                    height: clamp( 10ex, auto, 50ex );
                    width: 100%;
                    overflow: auto;
                }

                @media only screen and (max-width: 65ch) {
                    :host {
                        width: 100dvw;
                    }

                    .project {
                        width: 100dvw;
                    }
                }
            </style>
            <article class="project">
                <slot name="title"></slot>
                <img class="project-img" src="${this.dataset.mainImageUrl}" alt=""/>
                <div class="image-selection">
                    ${ imageElements.join("") }
                </div>
                <div class="project-desc">
                    <slot name="description">
                        <slot name="more"><slot>
                    <slot>
                </div>
            </article>
        `;
    }
}

customElements.define( "project-card", ProjectCard );