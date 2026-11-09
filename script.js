const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  menuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
  siteNav.classList.toggle('is-open', !isExpanded);
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    siteNav.classList.remove('is-open');
  });
});

const visitCarousel = document.querySelector('.site-visit-carousel');

if (visitCarousel) {
  const slides = [...visitCarousel.querySelectorAll('.site-visit-slide')];
  const previousButton = visitCarousel.querySelector('[data-carousel-previous]');
  const nextButton = visitCarousel.querySelector('[data-carousel-next]');
  const slideStatus = visitCarousel.querySelector('[data-carousel-status]');
  let activeSlide = 0;

  const showSlide = (index) => {
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeSlide;
      slide.classList.toggle('is-current', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });
    slideStatus.textContent = `${activeSlide + 1} of ${slides.length}`;
  };

  visitCarousel.classList.add('is-ready');
  previousButton.hidden = false;
  nextButton.hidden = false;
  showSlide(0);
  previousButton.addEventListener('click', () => showSlide(activeSlide - 1));
  nextButton.addEventListener('click', () => showSlide(activeSlide + 1));
}
