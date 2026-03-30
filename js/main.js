// ═══════════════════════════════════════
//   HATFIELD'S GOODE GRUB — Main JS
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── STICKY HEADER ──
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── MOBILE MENU TOGGLE ──
  const toggle = document.getElementById('menu-toggle');
  const nav    = document.getElementById('main-nav');

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    // Animate hamburger → X
    const spans = toggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.cssText = 'transform:translateY(7px) rotate(45deg)';
      spans[1].style.cssText = 'opacity:0';
      spans[2].style.cssText = 'transform:translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => s.style.cssText = '');
    }
  });

  // ── MOBILE DROPDOWN TOGGLE ──
  document.querySelectorAll('.nav-item.has-dropdown .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = link.closest('.nav-item');
        parent.classList.toggle('active');
      }
    });
  });

  // ── CLOSE MOBILE MENU ON LINK CLICK ──
  document.querySelectorAll('.dropdown a, .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove('open');
        document.body.style.overflow = '';
        toggle.querySelectorAll('span').forEach(s => s.style.cssText = '');
      }
    });
  });

  // ── CLOSE MENU ON OUTSIDE CLICK ──
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && nav.classList.contains('open')) {
      nav.classList.remove('open');
      document.body.style.overflow = '';
      toggle.querySelectorAll('span').forEach(s => s.style.cssText = '');
    }
  });

  // ── SMOOTH SCROLL ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 90;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── NEWSLETTER FORM ──
  window.handleNewsletter = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const inputs = e.target.querySelectorAll('input');
    const name = inputs[0].value;
    btn.textContent = '✓ You\'re on the list!';
    btn.style.background = '#4a7c4e';
    btn.style.borderColor = '#4a7c4e';
    btn.disabled = true;
    e.target.querySelectorAll('input').forEach(i => i.disabled = true);
    setTimeout(() => {
      btn.textContent = `Thanks, ${name}! We'll be in touch.`;
    }, 500);
  };

  // ── SCROLL-REVEAL ANIMATIONS ──
  const reveals = document.querySelectorAll(
    '.menu-card, .press-item, .blog-card, .gallery-item, .auth-stat, .catering-feat'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, (entry.target.dataset.delay || 0));
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.dataset.delay = (i % 4) * 80;
    revealObserver.observe(el);
  });

  // ── ACTIVE NAV HIGHLIGHT ON SCROLL ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--gold)';
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

});
