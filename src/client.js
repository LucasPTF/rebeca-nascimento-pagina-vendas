const internalLinks = document.querySelectorAll('a[href^="#"]');

for (const link of internalLinks) {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  });
}

for (const details of document.querySelectorAll('.faq-list details')) {
  details.addEventListener('toggle', () => {
    if (!details.open) {
      return;
    }

    for (const sibling of details.parentElement.querySelectorAll('details')) {
      if (sibling !== details) {
        sibling.open = false;
      }
    }
  });
}
