// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
    }
  });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.fade-in').forEach(el => revealObserver.observe(el));

// Auto-build TOC from content headings
function buildTOC() {
  const tocList = document.getElementById('toc-list');
  const content  = document.querySelector('.single-content .prose');
  if (!tocList || !content) return;

  const headings = content.querySelectorAll('h1, h2, h3');
  if (!headings.length) {
    const toc = document.querySelector('.toc');
    if (toc) toc.style.display = 'none';
    return;
  }

  headings.forEach((h, i) => {
    if (!h.id) h.id = 'heading-' + i;
    const li = document.createElement('li');
    const indent = h.tagName === 'H3' ? '1.25rem' : h.tagName === 'H2' ? '0.5rem' : '0';
    li.style.paddingLeft = indent;
    li.innerHTML = `<a href="#${h.id}">${h.textContent}</a>`;
    tocList.appendChild(li);
  });
}

buildTOC();

// Active TOC link on scroll
function activeTOC() {
  const links = document.querySelectorAll('.toc-list a');
  if (!links.length) return;

  const onScroll = () => {
    let current = '';
    document.querySelectorAll('.single-content .prose h1, .single-content .prose h2, .single-content .prose h3')
      .forEach(h => { if (window.scrollY >= h.offsetTop - 100) current = h.id; });
    links.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

activeTOC();
