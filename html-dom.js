function removeClass(elementId, classNameToRemove) {
  const element = document.getElementById(elementId);
  element.classList.remove(classNameToRemove);
}

function toggleClass(elementId, classNameToToggle) {
  const element = document.getElementById(elementId);
  element.classList.toggle(classNameToToggle);
}
