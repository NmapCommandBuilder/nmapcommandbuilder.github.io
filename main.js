var currentSection = 1;
var numSections = 2;

function changeSection() {
  var nextSection = currentSection + 1;
  if (nextSection > numSections) {
    nextSection = 1;
  }

  var currentSectionElem = document.getElementById("section" + currentSection);
  var nextSectionElem = document.getElementById("section" + nextSection);

  currentSectionElem.classList.remove("active");
  nextSectionElem.classList.add("active");

  currentSection = nextSection;
}
