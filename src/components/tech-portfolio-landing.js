import mainImage from "../assets/img/nick-profile-portrait-round-01.png";
import content from "../locales/en/home.json";

export class TechPortfolioLanding extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = /* HTML */ `
      <style>
        :host {
          display: block;
          margin: 0 auto var(--section-div) auto;
          width: 100%;
        }

        .bento {
          display: grid;
          grid-template-columns: repeat(5, 0.5fr);
          grid-template-rows: repeat(4, 0.2fr);

          grid-column-gap: 0.3em;
          grid-row-gap: 0.3em;

          grid-template-areas: 
            "til til til til til"
            "bf1 bf1 bf1 bf1 pic"
            "bf1 bf1 bf1 bf1 pic"
            "bf3 tex tex tex bf2";

          .box_1 {
            grid-area: til;
          }
          .box_2 {
            grid-area: pic;
          }
          .box_3 {
            grid-area: bf1;
          }
          .box_4 {
            grid-area: tex;
          }
          .box_5 {
            grid-area: bf2;
          }
          .box_6 {
            grid-area: bf3;
          }
        }

        .centerfy {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          background-color: var(--section-shadow);
          opacity: 1;
          transition: var(--section-bkg-opac-transition);

          margin: auto auto;
          padding: var(--standard-pad);

          .box {
            background: #47928238;
            border-radius: 0.5em;
            padding: 0.5em;
          }

          .boxx {
            background: #47928263;
            border-radius: 0.5em;
            padding: 0.5em;
          }
        }

        h1 {
          text-align: center;
          margin-bottom: var(--half-line);
          line-height: var(--barely-big-line);
          font-size: var(--bento-xlarge-font);
          text-decoration: underline solid;

          margin: auto auto;
          padding: var(--standard-pad);
        }

        .mainImage {
          width: clamp(150px, 20dvw, 500px);
        }

        .pitch {
          line-height: var(--bento-large-font);
          font-size: var(--bento-large-font);
          padding: var(--standard-pad);
          
          text-align: right;

          > .no-wrap {
            white-space: nowrap;
          }
        }

        .summary {
          padding: var(--standard-pad);
          text-align: right;
        }

        

        @media only screen and (max-width: 65ch) {
          :host {
          }
          .bento {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
            grid-template-areas: 
            "til"
            "pic"
            "tex";
          }
        }
      </style>

      <div class="container bento">

        <div class="box box_1 centerfy">
          <h1 class="">${content.tech_landing.title}</h1>
        </div>

        <div id="eye-candy-1" class="box_2 centerfy">
          <img class="boxx mainImage" src=${mainImage}
            alt="Picture of me in Vietnam, wearing a really nice fitting suit." />
        </div>

        <div class="box_3"></div>
        <div class="box_6"></div>

        <div class="box_4">
          <h2 class="pitch">${content.tech_landing.pitch_1}
            <span class="no-wrap">${content.tech_landing.pitch_2}</span>
          </h2>
          <p class="summary">${content.tech_landing.summary}<a href="${content.tech_landing.morePath}">${content.tech_landing.more}</a></p>
        </div>

        <div class="box_5"></div>

      </div>
    `;
  }
}

customElements.define("tech-portfolio-landing", TechPortfolioLanding);
