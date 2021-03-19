// Clicking on a section name in nav will scroll to that section
const sections = document.getElementsByClassName('fp-tooltip');

for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener('click', () => fullpage_api.moveTo(i + 1));
}

// Clicking on a project image will scroll to that slide
const projects = document.getElementsByClassName('portfolio__item');

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener('click', () => fullpage_api.moveTo(3, i + 1));
}
