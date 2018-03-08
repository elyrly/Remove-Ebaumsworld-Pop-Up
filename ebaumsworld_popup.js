// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      http://www.ebaumsworld.com/*
// @grant        window.focus
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    $(window).ready(function () {
        console.log("first");
    });
})();

setTimeout(function(){
    console.log("trojan_horse_ebaumsworld");
   	var x = document.getElementsByTagName("button");

for (var i = 0; i < x.length; i++) {
  if (x[i].textContent == "NO") {
	var class_name = x[i].className;
	var x = document.getElementsByClassName(class_name)[0].click();
}
}
}, 500);