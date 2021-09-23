/**
 * @description This function is used in the init script to load js after default css styles have been applied.  Call all base append, sizing, and class assignments here. 
 * @param {Boolean} isCSSLoaded true | false
 */
 function applyDynStyle(isCSSLoaded) {
    console.log("Applying Dynamic Styles");
    if (isCSSLoaded) {
      //setSegmentSNavHeight(timeline, sections);
      enableDynamicNav(dynNav, collapsedSegTemplate, timeline, sections);
      setDynNavWidth(dynNav, timeline[0]);
    }
  }






/** In the animation frame loop */
positionElementBottom(dynNav, sections.item(sections.length - 1));




/**
 * @description the element will scroll with the viewport until the bottom of the elementBreak is in viewport, then the element will position above the bottom of the element.
 * @param {HTMLElement} element HtmlElement
 * @param {HTMLElement} elementBreak HtmlElement
 */
function positionElementBottom(element, elementBreak) {
  if (elementBreak.getBoundingClientRect().bottom - window.innerHeight < 0) {
    element.style.position = "absolute";
    element.style.bottom = - ( elementBreak.getBoundingClientRect().bottom - window.innerHeight + window.scrollY ) + "px";
  } else if (elementBreak.getBoundingClientRect().bottom - window.innerHeight > 0) {
    element.style.position = "fixed";
    element.style.bottom = 0;
  }
}


/**
 * 
 * @param {HTMLElement} dynamicNavElement 
 * @param {HTMLElement} timelineSegElement 
 */
 function setDynNavWidth(dynamicNavElement, timelineSegElement) {
    dynamicNavElement.style.width = timelineSegElement.getBoundingClientRect().right - timelineSegElement.getBoundingClientRect().left + "px";
    dynamicNavElement.style.left = timelineSegElement.getBoundingClientRect().left + window.scrollX + "px";
  }

/**
 * 
 * @param {HTMLElement} dynamicNavElement 
 * @param {HTMLElement} navButtonTemplate 
 * @param {NodeListOf<HTMLElement>} timelineSegList 
 * @param {NodeListOf<HTMLElement>} sectionsList 
 */
 function enableDynamicNav(dynamicNavElement, navButtonTemplate, timelineSegList, sectionsList) {

    dynamicNavElement.style.display = "flex";
    setDynNavWidth(dynamicNavElement, timelineSegList[0]);
    
    let collapsedHeight = sectionsList.length / 20 + "vh"; /*20 = css vh*/
  
    timelineSegList.forEach( (seg) => {
      let collapsedSeg = navButtonTemplate.cloneNode(true);
      collapsedSeg.id = "";
      collapsedSeg.height = collapsedHeight;
      collapsedSeg.style.backgroundColor = window.getComputedStyle(seg).backgroundColor;
  
      sectionsList.forEach( (sec) => {
        seg.classList.forEach( (className) => {
          if(className == sec.id) {
            collapsedSeg.href = "#" + sec.id;
          }
        });
      });
      dynamicNavElement.append(collapsedSeg);
    });
  }
  



/* ---------------- OTHER------------------ */




  /** @param {HTMLElement} ele @returns {Number} percentage of scroll left of ele */
function percentageOfScrollLeft(ele) {
    let bound = ele.getBoundingClientRect();
    let ratio = ( ( bound.top + ele.offsetHeight ) / window.innerHeight ) * 100;
    if(ratio >= 100) {
      return 100;
    } else if (ratio <= 0) {
      return 0;
    }
    return Math.floor( ratio );
  }


  /** 
 * @description When 100+ it is out of view, when negative it is -% away from the top.
 * @param {Window} window
 * @param {HTMLElement} ele 
 * @returns {Number} percentage of scroll into ele 
 */
function percentageOfScrollInto(window, ele) {
    let bound = ele.getBoundingClientRect();
    // ? This sort of worked but didnt work for the 3rd element
    // let ratio = ( ( ele.offsetHeight - bound.bottom ) / ele.offsetHeight ) * 100;
    // ? Laymans = Take the window's height and change depending on the distance from the elements top, out of the elements height and make it a %.
    let ratio = ( (window.innerHeight - bound.top) / ele.offsetHeight ) * 100;
    return Math.floor(ratio);
  }








  /* ? Transition fks wit the height of the element - need to figure out method to tell if item is in a transition */

/* 
waitUntilHtmlStable = function (callback, unchangedDuration, timeout, unchangedElapsed, html) {
    var sleep = 50;
    window.setTimeout(function () {
        var newHtml = document.documentElement.innerHTML;
        if (html != newHtml) unchangedElapsed = 0;
        if (unchangedElapsed < unchangedDuration && timeout > 0)
            waitUntilHtmlStable(callback, unchangedDuration, timeout - interval, unchangedElapsed + interval, newHtml);
        else
            callback();
    }, sleep);
};
 */






/** NAV */
/* NOT CURRENTLY USED */
/* aside#aside-nav > div#dyn-nav {
    z-index: 30;
    display: none;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 20vh;
}
a#collapsed-segment-template {
    display: none;
}
a.collapsed-segment {
    flex-grow: 1;
    font-family: inherit;
    font-size: 100%;
    color: inherit;
}
a.collapsed-segment:visited {
    color: default;
}
a.collapsed-segment:hover {
    color: default;
    cursor: pointer;
} */