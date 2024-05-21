import content from '../../locales/en/home.json';

import gitSmall from '../../assets/img/gitHubSmall.svg';
import gitFull from '../../assets/img/gitHubFull.svg';
import lnSmall from '../../assets/img/linkedInSmall.svg';
import lnFull from '../../assets/img/linkedInFull.svg';
import messageIcon from '../../assets/img/chatMessageConversation.svg';

export class InteractiveResume extends HTMLElement {

    constructor() {
        super();
        this.attachShadow( {mode: 'open'} );
    }

    connectedCallback() {
        const certsArr = content.resume.certsArr.map( str => {
            return/* HTML */`<li><a class="breathing">${str}</a></li>`;
        });

        const skillsArr = content.resume.skillsArr.map( str => {
            return/* HTML */`<li><a class="breathing">${str}</a></li>`;
        })

        const projectsArr =  content.resume.projectsArr.map( obj => {
            return/* HTML */`<li><a class="breathing" href="${obj.repo}">${obj.title}</a></li>`;
        })

        this.shadowRoot.innerHTML= /* HTML */`
            <style>
                :host {
                }

                h2 {
                    text-decoration: underline;
                    text-decoration-thickness: .5ex;
                    text-decoration-skip: none;
                }

                a {
                    text-decoration: none;
                    color: inherit;
                }

                a.breathing:hover {
                    text-decoration: underline var(--text-primary) .5ex;
                    animation-name: breathing-underline-pulse-text;
                    animation-timing-function: linear;
                    animation-duration: 3s;
                    animation-iteration-count: infinite;
                    transition: all .5s linear;
                }

                h1#resume-title {
                    display: block;
                    text-align: center;
                    font-size: clamp(.5ch, 5ch, 10ch);
                }

                h1#resume-title::first-line {
                    font-size: clamp(.5ch, 1ch, 5ch);
                    text-decoration: underline;
                    text-decoration-thickness: .3ex;
                }

                div {
                    padding: clamp(2ex, 5vh, 10ex) 0;
                }

                #resume-contact {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                #contact-links {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-evenly;

                    width: 100%;
                    height: clamp(8ex, 8ex, 10dvh);

                    a {
                        vertical-align: middle;
                        text-align: center;
                        padding: clamp(1%, 2ex, 2%);

                        height: 100%;
                        width: clamp(5ch, 33%, 33%);

                        svg {
                            box-sizing: border-box;
                            height: 100%;
                        }
                    }
                }

                .linkedInFull {
                    svg {
                        width: 100%;
                        fill: #2766b1;
                    }
                }
                .linkedInFull:hover {
                    svg { fill: #6299dc; }
                }
                .gitHubFull {
                    svg { 
                        width: 100%;
                        fill: #ffffff; }
                }
                .gitHubFull:hover {
                    svg { fill: #6a00ff; }
                }
                .messageEmail {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-evenly;

                    svg { fill: #8711d0; }
                }
                .messageEmail:hover {
                    svg { fill: #f201ff; }
                }

                #resume-back > ul > li > pre {
                    /* display: flex; */
                    overflow: hidden;
                }

                .linkedInSmall {
                    svg {
                        fill: #6299dc;
                        width: 4ch;
                        height: auto;
                        padding: 0 2ch;
                    }
                }

                .gitHubSmall {
                    svg {
                        fill: #ffffff;
                        width: 4ch;
                        height: auto;
                        padding: 0 2ch;
                    }
                }
                .gitHubSmall:hover {
                    svg { fill: #8711d0; }
                }

                #resume-about li {
                    padding: 1ch;
                }

                @keyframes font-pulse {
                from {
                        font-weight: 100;
                    }
                    to {
                        font-weight: 900;
                    }
                }

                @keyframes breathing-underline-pulse-text {
                    0%  { text-decoration: underline var(--text-primary) .5ex ; }
                    33% { text-decoration: underline var(--react-dark) .5ex ; }
                    66% { text-decoration: underline var(--react-dark) .5ex ; }
                    99% { text-decoration: underline var(--text-primary) .5ex ; }
                }

                @media (min-width: 700px) {

                }

            </style>
            <article id="resume">

            <h1 id="resume-title">${ content.resume.title }</h1>
            
            <div id="resume-contact">
                <h2>${ content.resume.contactTitle }</h2>
                <div id="contact-links">
                    <a class="linkedInFull breathing" target="_blank" href="${ content.resume.experiencePath }" aria-label="${ content.resume.experienceAria }"> ${ lnFull } </a> 
                    |
                    <a class="gitHubFull breathing" target="_blank" href="${ content.resume.projectsPath }" aria-label="${ content.resume.projectseAria }" > ${ gitFull } </a> 
                    |
                    <a class="messageEmail breathing" href="#section-3" aria-label="${ content.resume.messagePath }" title="Send a Message"> ${ messageIcon } Email</a>
                </div>
            </div>
            
            <div id="resume-obj">
                <h2>${ content.resume.objectiveTitle }</h2>
                <p>${ content.resume.objective }</p>
            </div>
    
            <div id="resume-back">
                <h2>${ content.resume.educationTitle }</h2>
                <ul><li><h3>${ content.resume.school1 }</h3><pre>${ content.resume.degree1 }</pre></li>
                    <li><h3>${ content.resume.school2 }</h3><pre>${ content.resume.degree2 }</pre></li>
                </ul>
            </div>
    
            <!--◆	9670	25C6	 	BLACK DIAMOND
                ◇	9671	25C7	 	WHITE DIAMOND
                ◈	9672	25C8	 	WHITE DIAMOND CONTAINING BLACK SMALL DIAMOND-->
    
            <div id="resume-exp">
                <h2>${ content.resume.experienceTitle }</h2>
                <ul><li><a class="linkedInSmall breathing" target="_blank"  href="${ content.resume.experiencePath }">
                            ${ lnSmall} ${ content.resume.experienceDescription }
                        </a>
                    </li>
                </ul>
            </div>
    
            <div id="resume-about">
                <h2>${ content.resume.aboutTitle }</h2>
                
                <div id="resume-cert">
                    <h3>${ content.resume.certificationsTitle }</h3>
                    <ul>${ certsArr.join("")
                            /* content.resume.certsArr.map( str => { return`<li class="breathing">${str} </li>`; }) */
                        }
                        <li><a href="${ content.resume.experiencePath }" class="breathing">${ content.resume.certsInfo }</a></li>
                    </ul>
                </div>
                <div id="resume-skills">
                    <h3>${ content.resume.skillsTitle }</h3>
                    <ul>${ skillsArr.join("")
                            /* content.resume.skillsTitle.map( str => { return`<li class="breathing">${str}</li>`; }) */
                        }
                    </ul>
                </div>
                <div id="resume-projects">
                    <h3>${ content.resume.projectsTitle }</h3>
                    <ul>${ projectsArr.join("")
                            /* content.resume.projectsArr.map( obj => { return`<li class="breathing"><a href="${obj.repo}">${obj.title}</a></li>`; }) */
                        }
                        <li><a class="gitHubSmall" href="${ content.resume.projectsPath }" class="breathing">${gitSmall}${ content.resume.projectsInfo }</a></li>
                    </ul>
                </div>
            </div>
            </article>
        `;
    }
}

customElements.define( "resume-section", InteractiveResume );