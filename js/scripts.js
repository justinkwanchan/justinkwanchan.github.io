// Clicking on section name in nav scrolls to that section
const sections = document.getElementsByClassName('fp-tooltip');

for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener('click', () => fullpage_api.moveTo(i + 1));
}
