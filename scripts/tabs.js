var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");

function openProjectTeamsTab() {
  content1.style.transform = "translateX(0)";
  content2.style.transform = "translateX(200%)";
  content3.style.transform = "translateX(200%)";
  tab1.style.color = "#55d6aa";
  tab2.style.color = "#000";
  tab3.style.color = "#000";
  content1.style.transitionDelay = "0.3s";
  content2.style.transitionDelay = "0s";
  content3.style.transitionDelay = "0s";
}

function openHackathonsTab() {
  content1.style.transform = "translateX(200%)";
  content2.style.transform = "translateX(0)";
  content3.style.transform = "translateX(200%)";
  tab1.style.color = "#000";
  tab2.style.color = "#55d6aa";
  tab3.style.color = "#000";
  content1.style.transitionDelay = "0s";
  content2.style.transitionDelay = "0.3s";
  content3.style.transitionDelay = "0s";
}

function openIndividualProjectsTab() {
  content1.style.transform = "translateX(200%)";
  content2.style.transform = "translateX(200%)";
  content3.style.transform = "translateX(0)";
  tab1.style.color = "#000";
  tab2.style.color = "#000";
  tab3.style.color = "#55d6aa";
  content1.style.transitionDelay = "0s";
  content2.style.transitionDelay = "0s";
  content3.style.transitionDelay = "0.3s";
}