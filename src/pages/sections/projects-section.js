import content from '../../locales/en/home.json';

import matsoMain from '../../assets/img/java-matso-02-700xw.png';
import matso1 from '../../assets/img/java-matso-01-700xw.png';
import matso4 from '../../assets/img/java-matso-04-700xw.png';

import noteApp from '../../assets/img/college-app-500xw.png';

import schedulerMain from '../../assets/img/java-scheduler-01-700xw.png';
import scheduler2 from '../../assets/img/java-scheduler-02-700xw.png';
import scheduler3 from '../../assets/img/java-scheduler-03-700xw.png';

import inventory1 from '../../assets/img/inventory-management-500xw.png'

// import webNode1 from '../../assets/img/web-nodejs-01-700xw.png';
// import webNode2 from '../../assets/img/web-nodejs-02-700xw.png';
// import webNode3 from '../../assets/img/web-nodejs-03-700xw.png';

import { ProjectCard } from '../../components/project-card.js';

export class ProjectsSection extends HTMLElement {

    constructor() {
        super();
        this.attachShadow( {mode: 'open'} );
    }

    connectedCallback() {
        this.shadowRoot.innerHTML= /* HTML */`
            <style>
                :host {
                    margin: auto auto;
                    width: var(--preferred-content);
                }
            </style>

            <project-card data-main-image-url="${matsoMain}" data-image-urls='["${matso1}", "${matso4}"]'>
                <h3 slot="title">${ content.projects.matso.title }</h3>
                <p slot="description">${ content.projects.matso.description }<a slot="more" href="${ content.projects.matso.gitPath }" >Learn More >></a></p>
            </project-card>
            
            <project-card data-main-image-url="${noteApp}" data-image-urls='[]'>
                <h3 slot="title">${ content.projects.collegeApp.title }</h3>
                <p slot="description">${ content.projects.collegeApp.description }<a slot="more" href="${ content.projects.collegeApp.gitPath }" >Learn More >></a></p>
            </project-card>

            <project-card data-main-image-url="${schedulerMain}" data-image-urls='["${scheduler2}", "${scheduler3}"]'>
                <h3 slot="title">${ content.projects.scheduler.title }</h3>
                <p slot="description">${ content.projects.scheduler.description }<a slot="more" href="${ content.projects.scheduler.gitPath } " >Learn More >></a></p>
            </project-card>

            <project-card data-main-image-url="${inventory1}" data-image-urls='[]'>
                <h3 slot="title">${ content.projects.inventoryManagementSystem.title }</h3>
                <p slot="description">${ content.projects.inventoryManagementSystem.description }<a slot="more" href="${ content.projects.inventoryManagementSystem.gitPath } " >Learn More \>\></a></p>
            </project-card>
        `;
    }
}

/* <project-card data-main-image-url="${webNode1}" data-image-urls='["${webNode2}", "${webNode3}"]'>
    <h3 slot="title">Web / Node.JS - Comment-Stack Message Board</h3>
    <p slot="description">The famous "Reddit" made comment message boards what they are today.  This website is an attempt at recreating their famous cascading comment section that you see on every post.  Mainly, this project is an experiment with Node.JS backend, Postgres database, and an NGINX proxy server, all containerzed through Docker.  It is a functioning website built without templates, and purely vanilla with the exception of a few required libraries. I thoroughly enjoyed working in this environment and plan to expand my knowledge of it into the future.  Feel free to visit the site and make a post! <a href="https://comment-stack-board.nicholaskoldys.dev/">(Website) https://comment-stack-board.nicholaskoldys.dev/</a></p>
    <a slot="more" href="https://github.com/NicholasKoldys/comment-stack-board">Learn More >></a>
</project-card> */

customElements.define( "projects-section", ProjectsSection );
