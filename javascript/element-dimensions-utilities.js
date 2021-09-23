// ! becareful objects are referenced so clone to copy.
/**
 * 
 */
const ElementDimensions = {
    height: 0,
    width: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};


/**
 * @param {HTMLElement} element
 * @return {ElementDimensions} listOfDimenstions
 */
function fixedContainerDimensions(element) {
    let bounds = element.getBoundingClientRect();

    // * "{}" is the target, so it passes it.
    let dimensions = Object.assign({}, ElementDimensions);

    dimensions.height = bounds.bottom - bounds.top;
    dimensions.width = bounds.right - bounds.left;
    dimensions.top = bounds.top + window.scrollY;
    dimensions.right = bounds.right + window.scrollX;
    dimensions.bottom = bounds.bottom + window.scrollY;
    dimensions.left = bounds.left + window.scrollX;

    return dimensions;
}
  
  
