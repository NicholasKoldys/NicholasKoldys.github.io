"use strict";(self.webpackChunknicholas_koldys_dev_profile=self.webpackChunknicholas_koldys_dev_profile||[]).push([[460],{117:n=>{n.exports='<svg id="nkLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">\r\n   <style>\r\n      path {\r\n         stroke: #120030;\r\n      }\r\n\r\n      @media (prefers-color-scheme: dark) {\r\n         path {\r\n            stroke: #00ffcc;\r\n         }\r\n      }\r\n   </style>\r\n   <g fill="none" stroke="#FFF">\r\n      <path stroke-linecap="square" stroke-linejoin="round" stroke-width="1.42"\r\n         d="M13.2 3.82c.47 0 .66-.02 1.16.03.01.7.03 1.44.01 2.94l.88.98-.86.91c.01 1.28.14 2.4-.19 2.9-.21.32-.42.23-1 .24m-10.43.07c-.46 0-.66-.04-1.16-.08V8.86l-.89-.98.87-.91c-.01-1.28-.14-2.4.2-2.9.2-.32.41-.23 1-.24" />\r\n      <path stroke-linecap="square" stroke-width="1.42"\r\n         d="m4.14 10.08-.01-4.03L5.59 6c.42 0 .68-.03.86.1.15.1.21.13.34.35.09.27.12.34.12 1.16.02 1.14.01 1.28.01 2.45" />\r\n      <path stroke-width="1.49"\r\n         d="M10.4 8.02c.37.73.74 1.29 1.02 1.78.22.37.4.7.4 1.03m-2.7-1.87 1.95-2.56s.67-.73.67-1.13M9.05 3.13v7.71" />\r\n   </g>\r\n</svg>'},460:(n,e,t)=>{t.r(e),t.d(e,{ProjectCard:()=>r});var o=t(117);class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const n=(this.dataset.imageUrls?JSON.parse(this.dataset.imageUrls):[o]).map((n=>`<img src=${n} alt=""/>`));this.shadowRoot.innerHTML=`\n            <style>\n                :host {\n                    box-sizing: border-box;\n                    display: block;\n                    \n                    margin: auto auto;\n                    width: 100%;\n                }\n\n                .project {\n                    box-sizing: border-box;\n\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: center;\n                    align-items: center;\n\n                    background-color: var(--section-shadow);\n                    box-shadow: 8px 7px 44px 1px var(--section-shadow);\n\n                    opacity: 1;\n                    transition: var(--section-transition);\n\n                    margin: var(--thumbH) auto;\n                    width: var(--content-width);\n\n                    padding: 1%;\n                    border: 1px #fff solid;\n                }\n\n                .project-img {\n                    padding: clamp(1ch, 1vh, 3ch) 0;\n                    height: auto;\n                    width: clamp(30vw, 600px, 100%);\n                }\n\n                .image-selection {\n                    display: flex;\n                    flex-direction: row;\n                    align-items: center;\n                    justify-content: space-evenly;\n                }\n\n                .image-selection > img {\n                    padding: clamp(1ch, 5%, 5ch);\n                    width: clamp(25vw, 350px, 30%);\n                }\n\n                .project-desc {\n                    padding: var(--standard-pad);\n                }\n\n                .project-desc > p {\n                    height: clamp( 10ex, auto, 50ex );\n                    width: var(--inner-width);\n                    overflow: auto;\n                }\n\n                @media only screen and (max-width: 65ch) {\n                    :host {\n                        width: 100dvw;\n                    }\n\n                    .project {\n                        width: 100dvw;\n                    }\n                }\n            </style>\n            <article class="project">\n                <slot name="title"></slot>\n                <img class="project-img" src="${this.dataset.mainImageUrl}" alt=""/>\n                <div class="image-selection">\n                    ${n.join("")}\n                </div>\n                <div class="project-desc">\n                    <slot name="description">\n                        <slot name="more"><slot>\n                    <slot>\n                </div>\n            </article>\n        `}}customElements.define("project-card",r)}}]);