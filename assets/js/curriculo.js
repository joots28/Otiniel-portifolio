(() => {
  "use strict";
  const printButton = document.getElementById("printResume");
  const year = document.getElementById("resumeYear");
  if (year) year.textContent = String(new Date().getFullYear());
  if (printButton) printButton.addEventListener("click", () => window.print());
})();