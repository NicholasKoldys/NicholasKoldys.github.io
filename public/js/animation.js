
/**
 * @description This function is used in the init script to load js after default css styles have been applied.  Call all base append, sizing, and class assignments here. 
 * @param {Boolean} isCSSLoaded true | false
 */
function applyDynStyle(isCSSLoaded, timeline, sections, sectionTitles) {
  console.log("Applying Dynamic Styles");
  if (isCSSLoaded) {
    setSegmentSNavHeight(timeline, sections);
    setTitlePosition(sectionTitles);
  }
}


/**
 * 
 * @param {NodeListOf<HTMLElement>} timelineSegList 
 * @param {NodeListOf<HTMLElement>} sectionsList 
 */
function setSegmentSNavHeight(timelineSegList, sectionsList) {
  timelineSegList.forEach( (segment) => {
    sectionsList.forEach( (sec) => {
      if (segment.className.includes(sec.id)) {
        segment.style.height = sec.getBoundingClientRect().bottom - sec.getBoundingClientRect().top + "px";
      }
    });
  });
}


/**
 * 
 * @param {NodeListOf<HTMLElement>} sectionTitles 
 */
function setTitlePosition(sectionTitles) {
  sectionTitles.forEach( (title) => {
    title.style.left = (title.parentElement.getBoundingClientRect().left + scrollX) + "px";
  });
}


/**
 * * First call in body-init
 */
var stepAnimationFrame = function() {
  sections.forEach( (sec) => {
    if(isInViewPort(window, sec)) {
      // TODO find the portion the element is mainly in rather than just blasting ScrollDirection.DOWN - even though it is mainly the direction people scroll.
      toggleClass(sec, "shade-overlay-light", isScrollPercentOnElement(window, sec, ScrollDirection.DOWN, 15));

      // * Only need to check timelinevisibility in one direction - DOWN. - on scroll up the timeline should not change.
      // * asideNav display is controlled in mobile overrides
      // TODO Enable Side Nav
      /* if(asideNav.style.display != "none") {
        toggleTimelineVisibility(window, sectionTitles, timeline, sec);
      } */
    } else { 
      toggleClass(sec, "shade-overlay-light", isScrollPercentOnElement(window, sec, getELementPageDirection(window, sec), 15));
    }
  });

  // * Just for flavor js
  scrollWithHeader(header);
  // * asideNav display is controlled in mobile overrides
  // TODO Enable Side Nav
  /* if(asideNav.style.display != "none") {
    setSegmentSNavHeight(timeline, sections);
    setTitlePosition(sectionTitles);
  } */

  window.requestAnimationFrame( stepAnimationFrame );
}


/**
 * @param {HTMLElement} element HtmlElement
 * @param {String} className "string class name"
 * @param {Boolean} bool true | false
 */
function toggleClass(element, className, bool) {
  if (bool && element.classList.contains(className)) {
    element.classList.remove(className);
  } else if (!bool && !element.classList.contains(className)) {
    element.classList.add(className);
  }
}


/**
 * @param {Window} titleList 
 * @param {NodeListOf<HTMLElement>} titleList 
 * @param {NodeListOf<HTMLElement>} timeline 
 * @param {HTMLElement} section 
 */
function toggleTimelineVisibility(window, titleList, timeline, section) {
  let secTitle, timelineSeg;

  titleList.forEach((title) => {
    if (title.parentNode.className.includes(section.id)) {
      secTitle = title;
    }
  });

  timeline.forEach( (segment) => {
    if (segment.className.includes(section.id)) {
      timelineSeg = segment;
    }
  });

  if (secTitle != null && timelineSeg != null) {
    toggleClass(secTitle, "shade-overlay-heavy", isScrollPercentOnElement(window, section, ScrollDirection.DOWN, 15));
    toggleClass(timelineSeg, "shade-overlay-heavy", isScrollPercentOnElement(window, section, ScrollDirection.DOWN, 15));
  }
}


/**
 * 
 * @param {HTMLElement} headerElement 
 */
function scrollWithHeader(headerElement) {
  if(window.scrollY > 0) {
    headerElement.style.position = "fixed";
    headerElement.style.top = 0;
  } else {
    headerElement.style.position = "";
  }
}