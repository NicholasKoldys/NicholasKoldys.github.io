const styles = [];

export function getApplicableStyles( ) {
    if (styles === null) {
        styles = Array.from(document.styleSheets)
        .map(s => {
            const sheet = new CSSStyleSheet();
            const css = Array.from(s.cssRules).map(rule => rule.cssText).join(' ');
            sheet.replaceSync(css);
            return sheet;
        });
    }

    return styles;
}

export function addGlobalStylesToShadowRoot(shadowRoot) {
    shadowRoot.adoptedStyleSheets.push(
        ...getApplicableStyles()
    );
}