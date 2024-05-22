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
                    display: block;
                    margin: var(--section-div) auto;
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

                div {
                    padding: 0 0 5dvh 0;
                }

                h1#resume-title {
                    display: block;
                    text-align: center;
                    font-size: clamp(.5ch, 15ch, 10dvh);
                    line-height: clamp(.5ch, 12ch, 8dvh);

                    text-shadow: -2px -2px var(--nk-main);

                    height: 25dvh;
                }
                h1#resume-title::first-line {
                    color: var(--nk-main);
                    text-decoration: underline dotted;
                    text-shadow: -.1ch .1ch var(--section-shadow);
                }

                #resume-contact {
                    box-sizing: border-box;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-evenly;

                    margin: var(--thumbH) auto;
                    padding: var(--standard-pad);
                    height: 22dvh;
                    width: 100dvw;
                    max-width: 120ch;

                    #contact-links {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-evenly;

                        margin-bottom: calc(var(--thumbH) * 2);
                        padding: var(--standard-pad);
                        width: 100%;

                        background-color: var(--section-shadow);
                        box-shadow: 8px 7px 44px 1px var(--section-shadow);

                        a {
                            display: inline-flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-evenly;

                            font-weight: bolder;
                            font-size: clamp(.5ch, 6ch, 4dvw);
                            line-height: clamp(.5ex, 6ex, 4dvh);

                            padding: 2%;
                            height: 100%;
                            width: clamp(1ch, 30%, 30%);

                            svg {
                                box-sizing: border-box;
                                display: inline-block;
                                height: 100%;
                            }
                        }
                    }

                    .linkedInFull {
                        svg { fill: #2766b1; }
                    }
                    .linkedInFull:hover {
                        svg { fill: #6299dc; }
                    }
                    .gitHubFull {
                        svg { fill: #ffffff; }
                    }
                    .gitHubFull:hover {
                        svg { fill: #6a00ff; }
                    }
                    .messageEmail {
                        svg { fill: #8711d0;
                            max-height: clamp(.5ex, 5ex, 20dvh);
                        }
                    }
                    .messageEmail:hover {
                        svg { fill: #f201ff; }
                    }
                }

                .topic {
                    box-sizing: border-box;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-evenly;

                    margin: auto auto;
                    padding: 0 2dvw;
                    width: var(--inner-width);

                    .experience {
                        padding: 0 2dvw;
                    }

                    .about {
                        padding: 0 4dvw;
                    }

                    #resume-obj {
                        p {
                            width: var(--inner-width);
                        }
                    }

                    li.big {
                        background-color: var(--section-shadow);
                        box-shadow: 8px 7px 44px 1px var(--section-shadow);
                        list-style: none;

                        font-size: clamp(.5ch, 2ch, 2dvw);
                        line-height: clamp(.5ex, 2ex, 2dvh);
                        
                        a {
                            display: inline-flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-between;
                        }
                    }
                }

                .linkedInSmall {
                    svg {
                        fill: #6299dc;
                        width: calc(var(--thumbW) * 2);
                        height: auto;
                        padding: 0 2ch;
                    }
                }

                .gitHubSmall {
                    svg {
                        fill: #ffffff;
                        width: calc(var(--thumbW) * 2);
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

                @media only screen and (max-width: 65ch) {
                    :host {
                        width: 100%;
                    }

                    #resume {
                        width: 100%;
                        #resume-contact {
                            padding: 0;
                            #contact-links {
                                padding: 0;
                            }
                        }

                        .topic {
                            width: 100%;
                            padding: 1dvh 3dvw;

                            .experience {
                                padding: 0;
                            }
                            .about {
                                padding: 0;
                            }
                        }
                    }
                }
            </style>
            <article id="resume">
                <h1 id="resume-title">${ content.resume.title }</h1>
                
                <div id="resume-contact" class="part">
                    <h2>${ content.resume.contactTitle }</h2>
                    <div id="contact-links">
                        <a class="linkedInFull breathing" target="_blank" href="${ content.resume.experiencePath }" aria-label="${ content.resume.experienceAria }"> ${ lnFull } </a> 
                        |
                        <a class="gitHubFull breathing" target="_blank" href="${ content.resume.projectsPath }" aria-label="${ content.resume.projectseAria }" > ${ gitFull } </a> 
                        |
                        <a class="messageEmail breathing" href="#section-3" aria-label="${ content.resume.messagePath }" title="Send a Message"> ${ messageIcon } Email</a>
                    </div>
                </div>
                
                <div class="topic">
                    <div class="experience">

                        <div id="resume-obj" class="part">
                            <h2>${ content.resume.objectiveTitle }</h2>
                            <p>${ content.resume.objective }</p>
                        </div>
                
                        <div id="resume-back" class="part">
                            <h2>${ content.resume.educationTitle }</h2>
                            <ul><li><h3>${ content.resume.school1 }</h3><pre>${ content.resume.degree1 }</pre></li>
                                <li><h3>${ content.resume.school2 }</h3><pre>${ content.resume.degree2 }</pre></li>
                            </ul>
                        </div>
                
                        <!--◆	9670	25C6	 	BLACK DIAMOND
                            ◇	9671	25C7	 	WHITE DIAMOND
                            ◈	9672	25C8	 	WHITE DIAMOND CONTAINING BLACK SMALL DIAMOND-->
                
                        <div id="resume-exp" class="part">
                            <h2>${ content.resume.experienceTitle }</h2>
                            <ul><li class="big"><a class="linkedInSmall breathing" target="_blank"  href="${ content.resume.experiencePath }">
                                        ${ lnSmall} ${ content.resume.experienceDescription }
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div >
            
                    <div id="resume-about" class="about">
                        <h2>${ content.resume.aboutTitle }</h2>
                        
                        <div id="resume-cert" class="part">
                            <h3>${ content.resume.certificationsTitle }</h3>
                            <ul>${ certsArr.join("")
                                    /* content.resume.certsArr.map( str => { return`<li class="breathing">${str} </li>`; }) */
                                }
                                <li><a href="${ content.resume.experiencePath }" class="breathing">${ content.resume.certsInfo }</a></li>
                            </ul>
                        </div>
                        <div id="resume-skills" class="part">
                            <h3>${ content.resume.skillsTitle }</h3>
                            <ul>${ skillsArr.join("")
                                    /* content.resume.skillsTitle.map( str => { return`<li class="breathing">${str}</li>`; }) */
                                }
                            </ul>
                        </div>
                        <div id="resume-projects" class="part">
                            <h3>${ content.resume.projectsTitle }</h3>
                            <ul>${ projectsArr.join("")
                                    /* content.resume.projectsArr.map( obj => { return`<li class="breathing"><a href="${obj.repo}">${obj.title}</a></li>`; }) */
                                }
                                <li class="big"><a class="gitHubSmall breathing" href="${ content.resume.projectsPath }">${gitSmall}${ content.resume.projectsInfo }</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }
}

customElements.define( "resume-section", InteractiveResume );