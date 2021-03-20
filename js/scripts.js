/**
 * Clicking on a section name in nav will scroll to that section
 */
const sections = document.getElementsByClassName('fp-tooltip');

for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener('click', () => fullpage_api.moveTo(i + 1));
}

/**
 * Clicking on a project image will scroll to that slide
 */
const projects = document.getElementsByClassName('portfolio__item');

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener('click', () => fullpage_api.moveTo(3, i + 1));
}

/**
 * Add project titles to project slide navigation
 */
const projectSlides = document.querySelectorAll(
  '.fp-slidesNav ul li a span.fp-sr-only'
);

const titles = [
  'Index',
  'HelpMeHelpYou',
  'Jungle',
  'Scheduler',
  'Wiki Map',
  'Tweeter',
  'TinyApp',
];

projectSlides.forEach((slide, index) => (slide.textContent = titles[index]));

/**
 * Add class to active project ul element to active animation
 */
document
  .querySelector(`.fp-slidesNav ul li:nth-child(1) a`)
  .classList.add('project-slide');

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const className = mutation.target.classList[0].split('-');
      const slide = Number.parseInt(className[className.length - 1]) + 1;

      document
        .querySelectorAll(`.fp-slidesNav ul li a`)
        .forEach(element => element.classList.remove('project-slide'));

      document
        .querySelector(`.fp-slidesNav ul li:nth-child(${slide}) a`)
        .classList.add('project-slide');
    }
  });
});

observer.observe(document.querySelector('body'), {
  attributes: true,
});
