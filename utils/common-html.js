/**
 * @typedef {'a'|'abbr'|'address'|'area'|'article'|'aside'|'audio'|'b'|'base'|'bdi'|'bdo'|'blockquote'|'body'|'br'|'button'|'canvas'|'caption'|'cite'|'code'|'col'|'colgroup'|'data'|'datalist'|'dd'|'del'|'details'|'dfn'|'dialog'|'div'|'dl'|'dt'|'em'|'embed'|'fieldset'|'figcaption'|'figure'|'footer'|'form'|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'head'|'header'|'hr'|'html'|'i'|'iframe'|'img'|'input'|'ins'|'kbd'|'label'|'legend'|'li'|'link'|'main'|'map'|'mark'|'meta'|'meter'|'nav'|'noscript'|'object'|'ol'|'optgroup'|'option'|'output'|'p'|'param'|'picture'|'pre'|'progress'|'q'|'rp'|'rt'|'ruby'|'s'|'samp'|'script'|'section'|'select'|'small'|'source'|'span'|'strong'|'style'|'sub'|'summary'|'sup'|'svg'|'table'|'tbody'|'td'|'template'|'textarea'|'tfoot'|'th'|'thead'|'time'|'title'|'tr'|'track'|'u'|'ul'|'var'|'video'|'wbr'} tagNames
 */
/**
 * 
 * @param {tagNames} type 
 * @param {string?} componentId 
 * @param {string?} className 
 * @param {HTMLElement?} container 
 * @returns 
 */
export function createElement(type, componentId, className, container) {
	const el = document.createElement(type);
		el.id = componentId;
		el.className = className || '';

	if (container) container.appendChild(el);

	return el;
}

export function applyToParentTop(el) {
	const parent = el.parentNode;
	if (parent && parent.lastChild !== el) {
		parent.appendChild(el);
	}
}

export function applyToParentBottom(el) {
	const parent = el.parentNode;
	if (parent && parent.firstChild !== el) {
		parent.insertBefore(el, parent.firstChild);
	}
}

/**
 * @typedef {'click'|'mousedown'|'mouseup'|'mouseenter'|'mouseleave'|'mouseover'|'mouseout'|'mousemove'|'dblclick'|'contextmenu'|'wheel'|'drag'|'dragstart'|'dragend'|'dragenter'|'dragleave'|'dragover'|'drop'|'keydown'|'keyup'|'keypress'|'submit'|'change'|'input'|'cut'|'copy'|'paste'|'select'|'load'|'unload'|'beforeunload'|'resize'|'scroll'|'focus'|'blur'|'error'|'animationstart'|'animationend'|'animationiteration'|'transitionend'|'message'|'offline'|'online'} eventTypes
 */
/**
 * @param {HTMLElement} ele 
 * @param {eventTypes} eType 
 * @param {Function} handler 
 * @param {...any} handleArgs 
 * @returns 
 */
export function addEventPreventDup(ele, eType, handler, handleArgs) {
    const id = eType + checkGID(ele);

	if (ele[eventsKey] && ele[eventsKey].id ) { return ele; }

    ele.addEventListener(eType, function(event){
        handler(handleArgs)
    });

	ele[eventsKey] = ele[eventsKey] || {};
	ele[eventsKey][id] = id;
}