// text content gives all the data which are visible or not visible on screens but in content it exist
// innerText gives the only content which is visible on screen (display: none,  did't see)
// innerHTML gives the complete content of an element it means if inline css is added on that element then that also included in given content

// document.getElementByClassName("xyz")  returns the HTMLCollection where we can't apply forEach loop 
// for converting HTMLCollection to array we use Array.from("HTMLCollection")

// documnet.querrySelectorAll("xyz") returns the nodeList where we can apply forEach loop