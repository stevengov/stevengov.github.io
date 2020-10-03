var content4 = document.getElementById("content4");
var content5 = document.getElementById("content5");
// var content6 = document.getElementById("content6");
var tab4 = document.getElementById("tab4");
var tab5 = document.getElementById("tab5");
// var tab6 = document.getElementById("tab6");

function openLeadershipTab() {
  content4.style.transform = "translateX(0)";
  content5.style.transform = "translateX(200%)";
//  content6.style.transform = "translateX(200%)";
  tab4.style.color = "#55d6aa";
  tab5.style.color = "#000";
//  tab6.style.color = "#000";
  content4.style.transitionDelay = "0.3s";
  content5.style.transitionDelay = "0s";
//  content6.style.transitionDelay = "0s";
}

function openTutoringTab() {
  content4.style.transform = "translateX(200%)";
  content5.style.transform = "translateX(0)";
//  content6.style.transform = "translateX(200%)";
  tab4.style.color = "#000";
  tab5.style.color = "#55d6aa";
//  tab6.style.color = "#000";
  content4.style.transitionDelay = "0s";
  content5.style.transitionDelay = "0.3s";
//  content6.style.transitionDelay = "0s";
}

/*
function openSomethingTab() {
  content4.style.transform = "translateX(200%)";
  content5.style.transform = "translateX(200%)";
  content6.style.transform = "translateX(0)";
  tab4.style.color = "#000";
  tab5.style.color = "#000";
  tab6.style.color = "#55d6aa";
  content4.style.transitionDelay = "0s";
  content5.style.transitionDelay = "0s";
  content6.style.transitionDelay = "0.3s";
}
*/