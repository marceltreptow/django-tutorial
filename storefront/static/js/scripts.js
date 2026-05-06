// scripts.js - CSS Selector Methods in JavaScript

// document.querySelector(selector) - Returns the first element that matches the CSS selector
const firstParagraph = document.querySelector('p');
console.log('First paragraph:', firstParagraph);

// document.querySelectorAll(selector) - Returns all elements that match the CSS selector as a NodeList
const allParagraphs = document.querySelectorAll('p');
console.log('All paragraphs:', allParagraphs);

// Using class selector
const elementsWithClass = document.querySelectorAll('.my-class');
console.log('Elements with class "my-class":', elementsWithClass);

// Using ID selector
const elementWithId = document.querySelector('#my-id');
console.log('Element with ID "my-id":', elementWithId);

// Using attribute selector
const inputsOfTypeText = document.querySelectorAll('input[type="text"]');
console.log('Text inputs:', inputsOfTypeText);

// Using pseudo-class (though querySelector can't select :hover directly, but can select elements that have it)
const hoveredElements = document.querySelectorAll('button:hover'); // Note: This won't work as expected in static selection

// Element methods
const container = document.querySelector('.container');
if (container) {
    const childParagraph = container.querySelector('p');
    console.log('First paragraph inside container:', childParagraph);

    const allChildParagraphs = container.querySelectorAll('p');
    console.log('All paragraphs inside container:', allChildParagraphs);
}

// Combinators
const descendantDivs = document.querySelectorAll('div p'); // All p inside div
console.log('Descendant paragraphs:', descendantDivs);

const childDivs = document.querySelectorAll('div > p'); // Direct child p of div
console.log('Child paragraphs:', childDivs);

const adjacentSiblings = document.querySelectorAll('div + p'); // p immediately after div
console.log('Adjacent siblings:', adjacentSiblings);

const generalSiblings = document.querySelectorAll('div ~ p'); // All p siblings after div
console.log('General siblings:', generalSiblings);