/**
 * 
 */
 const ScrollDirection = {
  DOWN: 0,
  UP: 1,
  INVIEW: 2
}


/** @param {HTMLElement} ele @returns {Boolean} is inViewPort */
function isInViewPort(window, ele) {
  let bound = ele.getBoundingClientRect();
  return (
    (bound.top <= 0 && bound.bottom >= 0)
    || (bound.bottom >= window.innerHeight && bound.top <= window.innerHeight)
    || (bound.top >= 0 && bound.bottom <= window.innerHeight)
  );
}


/**
 * @description is the element within the percentage in the scrollDirection.
 * @param {Window} window 
 * @param {HTMLElement} element 
 * @param {ScrollDirection} scrollDirection
 * @param {Number} percentage 0 - 100
 * @returns {Boolean} true | false
 */
function isScrollPercentOnElement(window, element, scrollDirection, percentage) {
  let bound = element.getBoundingClientRect();

  // if(element.id == "section-2") printf.innerHTML = "<p>" + "RatioD = " + (( (window.innerHeight - bound.top) / window.innerHeight ) * 100) + " RatioUP = " + (( ( (window.innerHeight + bound.bottom) / window.innerHeight ) * 100 ) - 100) + "</p>";

  if(scrollDirection == ScrollDirection.DOWN) {
    let ratio = ( (window.innerHeight - bound.top) / window.innerHeight ) * 100;
    if (Math.floor(ratio) > percentage) {
      return true;
    } else {
      return false;
    }
  } else if(scrollDirection == ScrollDirection.UP) {
    let ratio = ( ( (window.innerHeight + bound.bottom) / window.innerHeight ) * 100 ) - 100;
    if (Math.floor(ratio) > percentage) {
      return true;
    } else {
      return false;
    }
  } else if(scrollDirection == ScrollDirection.INVIEW) {
    return true;
  } else {
    return false;
  }
}


/**
 * @description get the ScrollDirection the element is in.
 * @param {window} window 
 * @param {HTMLElement} element 
 * @returns {ScrollDirection} ScrollDirection.UP | DOWN | INVIEW
 */
function getELementPageDirection(window, element) {
  if (isScrollPercentOnElement(window, element, ScrollDirection.DOWN, 0) 
      && isScrollPercentOnElement(window, element, ScrollDirection.UP, 0)) {
    return ScrollDirection.INVIEW;
  } else if (!isScrollPercentOnElement(window, element, ScrollDirection.DOWN, 0)) {
    return ScrollDirection.DOWN;
  } else if (!isScrollPercentOnElement(window, element, ScrollDirection.UP, 0)) {
    return ScrollDirection.UP;
  }
}