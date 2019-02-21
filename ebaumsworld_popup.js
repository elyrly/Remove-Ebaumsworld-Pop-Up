// ==UserScript==
// @name         search for and click a matching element on a webpage
// @namespace    http://tampermonkey.net/
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @version      0.1
// @description  Polls elements of a webpage looking for some element with some value. Clicks it when found. Set the max attempt limit. Exits after first instance(s) found.
// @author       seesharp15
// @include      https://www.ebaumsworld.com/*
// @grant        window.focus
// @run-at       document-end
// ==/UserScript==

var SEARCH_TEXT = "NO";
var MAX_ATTEMPTS = 50;
var TIMEOUT_INTERVAL = 100; //ms
var ELEMENT_TYPE = "button";
var t, attemptNo = 0; //timeout & attempt tracking.

(function() {
    'use strict';
    $(window).ready(function () {
        console.log("Starting '" + SEARCH_TEXT + "' searcher...");
    });
})();

function findAndClickMatchingItem() {
    attemptNo += 1;
    var attemptCounter = " (attempt " + attemptNo + " of " + MAX_ATTEMPTS + ")";
    console.log("Checking for '" + SEARCH_TEXT + "' in any '" + ELEMENT_TYPE + "'." + attemptCounter);
    var matchingItem = $(ELEMENT_TYPE + ":contains('" + SEARCH_TEXT + "')");

    console.log("Found " + matchingItem.length + " items of type: '" + ELEMENT_TYPE + "'." + attemptCounter);
    if (matchingItem.length > 0)
    {
        matchingItem.click();
        console.log("Clicked " + ELEMENT_TYPE + "..." );
        clearInterval(t);
        console.log("Stopping script.");
    }
    else if (attemptNo >= MAX_ATTEMPTS)
    {
        console.log("Max attempts reached. Clearing interval & exiting...");
        clearInterval(t);
    }
    else
    {
        console.log("No items of type: '" + ELEMENT_TYPE + "' containing '" + SEARCH_TEXT + "' found..." + attemptCounter);
    }
}


$(document).ready(function() {
    t = setInterval(findAndClickMatchingItem, TIMEOUT_INTERVAL);
});

