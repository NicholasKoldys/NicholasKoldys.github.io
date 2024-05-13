import { menuList, sections } from "./enivronment-variables.js";

export function setupDynamicLinkMenu(/* listOfLinks, sectionsList */) {
    sections.forEach( (sec) => {

        let addedItem = document.createElement("li");

        let link = document.createElement("a");
            link.href = "#" + sec.id;
            link.innerText = sec.id;

        // * Must append li to ul before appending to li.
        menuList.append( addedItem );
        addedItem.appendChild(link);
    });
}