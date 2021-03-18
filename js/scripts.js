// Clicking on a section name in nav will scroll to that section
const sections = document.getElementsByClassName('fp-tooltip');

for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener('click', () => fullpage_api.moveTo(i + 1));
}
