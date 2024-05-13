import { applyDynStyle } from "./animation.js";
import { setupDynamicLinkMenu } from "./dynamic-content.js";

export function init() {
    // applyDynamicStyle();
    console.log("Initialized Body Script");
}

/** @return {Promise} isCSSLoaded */
export async function isCSSLoaded() {
    let isCSSLoaded = new Promise( (resolve, reject) => {
        let count = 0;
        let intervalId = setInterval(
            function() {
                if (getComputedStyle(cssLink).zIndex === '0') {
                    console.log("Style Sheet - Loaded");
                    clearInterval(intervalId);
                    resolve(true);
                } else if( count >= 10) {
                    console.log("Style Sheet - Failed");
                    clearInterval(intervalId);
                    resolve(false);
                } else {
                    count++;
                    return;
                }
            },
            300
        );
    });
    // * in ES2020 RETURN AWAIT Share a cycle, so it is flavor to make the async function more verbose. // * This value is also then-able
    return await isCSSLoaded;
}

function applyInitToDoc() {
    //document.querySelector("body").onload = ...
    window.onload = function() {
        init();
    }
}

// TODO Temp Removal
/* function applyDynamicStyle() {
    isCSSLoaded().then( (result) => {
        applyDynStyle( result, timeline, sections, sectionTitles );
        window.requestAnimationFrame( stepAnimationFrame );
    });
} */

{
    applyInitToDoc();
    setupDynamicLinkMenu();
}