'use strict'

function copyText() {
    let copyText = document.getElementById("textToCopy");
    navigator.clipboard.writeText(copyText.innerText);
  }