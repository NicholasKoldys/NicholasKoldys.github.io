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
                .project {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;


                    margin-bottom: 15ex;
                    padding: 1%;
                    border: 1px #fff solid;
                }

                .project-img {
                    padding: clamp(1ch, 1vh, 3ch) 0;
                    height: auto;
                    width: clamp(30vw, 600px, 70vw);
                }

                .image-selection {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-evenly;
                }

                .image-selection > img {
                    padding: clamp(1ch, 5%, 5ch);
                    width: clamp(25vw, 350px, 30vw);
                }

                .project-desc {
                    padding: var(--standard-pad);
                    width: clamp(55ch, 100%, 75ch);
                }

                .project-desc > p {
                    height: clamp( 10ex, auto, 50ex );
                    overflow: auto;
                }
            </style>
            <article class="project">
                <img class="project-img" src="${this.dataset.mainImageUrl}" alt=""/>
                <div class="image-selection">
                    ${ imageElements.join("") }
                </div>
                <div class="project-desc">
                    <slot name="title"></slot>
                    <slot name="description"><slot>
                    <slot name="more"><slot>
                </div>
            </article>
        `;
    }
}

customElements.define( "project-card", ProjectCard );