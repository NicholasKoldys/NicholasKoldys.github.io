import { addGlobalStylesToShadowRoot } from "../../utils/global-styles.js";
import nkLogo from "../assets/img/nkLogo.svg";
import { HiddenMenu } from "./hidden-menu.js";

export class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( {mode: 'open'} ).innerHTML = /* HTML */`
            <!-- <link rel="preload" href=${'./navbar.module.css'} as="style" /> -->
            <style>
                :host {
                    height: var(--nav-height);
                    width: 100dvw;
                    
                    z-index: 100;
                    top: 0;
                    position: fixed;
                }

                .nav-bar {
                    height: 100%;
                    width: 100%;

                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-content: center;

                    background-color: var(--secondary-dark);
                }

                .home {
                    margin-left: 1ch;
                    height: 100%;

                    display: block;
                    transition: all .2s linear;
                }
                .home:hover {
                    background-color: var(--tertiary-dark);
                }

                .home > svg {
                    box-sizing: border-box;
                    padding: 0 1ch;
                    height: 100%;
                }

                .center-space {
                    flex: 1 0;
                }
            </style>

            <nav class="nav-bar">
                <a id="home-link" class="home" href="index.html" aria-label="Go to Nicholas Koldys .dev"> ${nkLogo} </a>
                <div class="center-space" ></div>
                <hidden-menu></hidden-menu>
            <nav>
        `;
        addGlobalStylesToShadowRoot( this.shadowRoot );
    }
}

customElements.define( "nav-bar", NavBar );