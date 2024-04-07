// Create a <script> element
var scriptElement = document.createElement("script");

// Set the source of the script to the URL of your JavaScript file
scriptElement.src = chrome.runtime.getURL("youtube.js");

// Define an onload event handler to remove the script element after it's loaded and executed
scriptElement.onload = function() {
    this.remove(); // Remove the <script> element from the DOM
};

// Append the <script> element to the <head> of the document
document.head.appendChild(scriptElement);
