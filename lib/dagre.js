/* global window */

var dagre;

if (typeof require === "function") {
  try {
    dagre = require("@futpib/dagre");
  } catch (e) {
    // continue regardless of error
  }
}

if (!dagre) {
  dagre = window.dagre;
}

module.exports = dagre;
