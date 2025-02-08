// Normal Fade Up

// get the elements
const elements = document.querySelectorAll('.element'); // document.querySelectorAll to get all .element classes

// add event listener scroll on the document 
document.addEventListener('scroll', whileScrolling); // call the function whileScrolling when scrolling

// function to check if element is on the view
function isInView(element) {
    // get element postion
    const rect = element.getBoundingClientRect(); // element.getBoundingClientRect returns an object containing the position and size of an element relative to the viewport (the visible part of the page).
    return (
        // uncomment and comment out to try the triggers

        // this will return true if the element is fully visible on the viewport

        rect.top >= 0 && rect.bottom <= window.innerHeight

        // this will return true if the element is partially visible on the viewport

        // rect.top < window.innerHeight && rect.bottom > 0
    )
}

function whileScrolling() {
    elements.forEach(element => {
        if (isInView(element)) { // if the function isInView return true
            // add the class visible to the element
            element.classList.add('visible');
        }
    });
}

// dynamic fade up

// get the elements
const dynamicElements = document.querySelectorAll('.dynamic-element'); // document.querySelectorAll to get all .dynamic-element classes

// add event listener scroll on the document 
document.addEventListener('scroll', dynamicWhileScrolling); // call the function dynamicWhileScrolling when scrolling

function dynamicWhileScrolling() {
    dynamicElements.forEach(element => {

        const rect = element.getBoundingClientRect(); // position of the element relative to viewport

        // window.innerHeight = browser viewport
        // document.documentElement.clientHeight = html visible area

        // use any of this for browser comatibility
        const windowHeight = window.innerHeight || document.documentElement.clientHeight; // use browser viewport or html document visible area

        // calculate how much of the element is visible
        let visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));

        // calculate opacity based on visibility percentage
        let visibilityRatio = visibleHeight / rect.height;
        visibilityRatio = Math.min(1, Math.max(0, visibilityRatio)); // clamp between 0 and 1

        // adjust the opacity and transform dynamically
        element.style.opacity = visibilityRatio; // calculated opacity
        element.style.transform = `translateY(${(1 - visibilityRatio) * 20}px)`; // calculated transform

    });
}

// chatGPT explaination
// https://chatgpt.com/share/67a73f4f-3818-8005-906f-f213081718b2