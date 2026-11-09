/* Progressive enhancement: all academic content remains available without JS. */
const filters = document.querySelector('.filters');
const publications = [...document.querySelectorAll('.publication')];
if (filters && publications.length) {
  filters.hidden = false;
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const category = button.dataset.filter;
    let count = 0;
    publications.forEach((publication) => {
      publication.hidden = category !== 'all' && publication.dataset.category !== category;
      if (!publication.hidden) count++;
    });
    filters.querySelectorAll('button').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'entry' : 'entries'} shown.`;
  });
}
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
}
