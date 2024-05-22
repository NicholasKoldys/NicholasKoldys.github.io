import menuIcon from "../assets/img/menuIcon.svg";

export class HiddenMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).innerHTML = /* HTML */ `
            <style>
                :host {
                    display: block;
                    margin: auto var(--content-spacing);
                    height: 100%;
                }

                .menu {
                    margin-right: 2ch;
                    height: 100%;
                    width: 100%;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    
                    transition: all .2s linear;
                }

                .btn {
                    border: none;
                    margin-right: 1dvw;
                    height: 100%;
                    width: 100%;

                    cursor: pointer;
                    background-color: transparent;
                    transition: all .2s linear;
                }

                .btn:hover {
                    background-color: var(--tertiary-dark);
                }

                .btn:hover > svg {
                    fill: var(--primary-dark);
                }

                .btn > svg {
                    box-sizing: border-box;
                    margin: auto auto;
                    padding: 10% 5%;
                    height: 100%;

                    fill: var(--text-primary);
                    transition: all .2s linear;
                }

                .menu-list {
                    z-index: 110;
                    padding: 0;
                    margin: 0;

                    position: fixed;
                    top: var(--nav-height);
                    right: 0;

                    display: flex;
                    flex-direction: column;
                    align-items: space-between;
                    justify-content: center;
                    list-style: none;

                    background-color: var(--tertiary-dark);
                }
                .menu-list.hidden {
                    display: none;
                }

                .menu-list > li {
                    flex-grow: 1;
                    font-size: larger;
                    width: 100%;
                }

                .menu-list > li > a {
                    display: block;
                    font-family: var(--heading-family);
                    text-decoration: none;
                    color: inherit;
                    padding: 1ch 2ch;
                    transition: all .2s linear;
                }

                .menu-list > li > a:hover {
                    color: var(--text-primary);
                    background-color: var(--react-dark);
                    animation: background-opacity-pulse 2s linear 0s infinite alternate both;
                }

                .menu-list > li > a:visited {
                    color: var(--text-primary);
                }

                @keyframes opacity-pulse {
                    from {
                        opacity: 100;
                    }
                    to {
                        opacity: 0;
                    }
                }

                @keyframes background-opacity-pulse {
                    from {
                        background-color: rgba(255,255,255,.2);
                    }
                    to {
                        background-color: rgba(255,255,255,0);
                    }
                }
            </style>

            <nav class='menu'>
                <button class='btn' aria-labelledby="menu Main Menu">
                    ${menuIcon}
                </button>
                <ul class='menu-list hidden'>
                    <li><a href="#section-1">Home</a></li>
                    <li><a href="#section-2">Projects</a></li>
                    <li><a href="#section-3">Message Me</a></li>
                    <li><a href="#section-4">Resume</a></li>
                </ul>
            </nav>
        `;

        this.shadowRoot.querySelector('ul.menu-list').classList.add('hidden');
        this.clickHandler = this.createClickHandler();
        this.mouseHandler = this.createMouseHandler();
    }

    createClickHandler() {
        return (event) => {
            this.shadowRoot.querySelector('ul.menu-list').classList.toggle('hidden');
            /* if(!menuBtn.classList.contains("showContent")) {
                menuBtn.classList.add("showContent");
                menuList.style.display = "flex";
                menuList.style.top = (fixedContainerDimensions( document.getElementById("header") ).height) + "px";
                menuList.style.backgroundColor = "#242324";
            } else {
                menuBtn.classList.remove("showContent");
                    menuList.style.display = "none";
                    menuList.style.backgroundColor = "#302f2f";
            } */
        };
    }

    createMouseHandler() {
        return (event) => {
            this.shadowRoot.querySelector('ul.menu-list').classList.toggle('hidden');
            // menuBtn.classList.remove("showContent");
            // menuList.style.display = "none";
            // menuList.style.backgroundColor = "#302f2f";
        };
    }

    connectedCallback() {
        this.shadowRoot.querySelector('button.btn').addEventListener('click', this.clickHandler);
        this.shadowRoot.querySelector('ul.menu-list').addEventListener('mouseout', this.mouseHandler);
    }

    disconnectedCallback () {
		this.shadowRoot.querySelector('button.btn').removeEventListener('click', this.clickHandler);
        this.shadowRoot.querySelector('ul.menu-list').removeEventListener('mouseout', this.mouseHandler);
	}
}

customElements.define("hidden-menu", HiddenMenu);