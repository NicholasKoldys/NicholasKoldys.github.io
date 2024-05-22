import "./public/style/colors.css";
import "./public/style/global.css";

( function loadWebComponents() {
    window.addEventListener('DOMContentLoaded', (event) => {
        const allElements = Array.from(document.querySelectorAll('*'));
        allElements
        .filter((el, i)  => el.tagName.includes('-') && allElements.indexOf(el) === i)
        .map( el => {

            let tag = el.tagName.toLowerCase();

            switch (true) {
                case tag.includes('section'):
                    import(`./pages/sections/${tag}.js`);
                    break;
                case tag.includes('page'):
                    import(`./pages/${tag}.js`);
                    break;
                default:
                    import(`./components/${tag}.js`);
                    break;
            }
        } );
    });
})();

import "./public/style/finalize.css";