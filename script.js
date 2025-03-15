// script.js

// 1. Change text content dynamically
const dynamicTextElement = document.getElementById('dynamicText');
if (dynamicTextElement) {
    dynamicTextElement.textContent = 'The text content has been updated by JavaScript!';
}

// 2. Modify CSS styles via JavaScript
const styledElement = document.getElementById('styledElement');
if (styledElement) {
    styledElement.style.backgroundColor = 'lightblue';
    styledElement.style.color = 'darkblue';
    styledElement.style.padding = '15px';
    styledElement.style.border = '2px solid blue';
}

// 3. Add or remove an element when a button is clicked
const toggleElementButton = document.getElementById('toggleElementButton');
const elementContainer = document.getElementById('elementContainer');
let elementAdded = false;
let addedParagraph;

if (toggleElementButton && elementContainer) {
    toggleElementButton.addEventListener('click', () => {
        if (elementAdded) {
            // Remove the element
            if (addedParagraph) {
                elementContainer.removeChild(addedParagraph);
                addedParagraph = null;
                toggleElementButton.textContent = 'Add Element';
                elementAdded = false;
            }
        } else {
            // Add a new element
            addedParagraph = document.createElement('p');
            addedParagraph.textContent = 'A new paragraph has been added dynamically!';
            addedParagraph.style.marginTop = '10px'; // Add some spacing
            elementContainer.appendChild(addedParagraph);
            toggleElementButton.textContent = 'Remove Element';
            elementAdded = true;
        }
    });
}