// ═══════════════════════════════════════
//   HATFIELD'S GOODE GRUB - Main JS
// ═══════════════════════════════════════

// ── EVENTS DATA ──
// Images sourced from hatfieldsgoodegrub.com Wix media
const WIX = 'https://static.wixstatic.com/media/';
const img = id => `${WIX}${id}~mv2.png/v1/fill/w_400,h_400,fp_0.50_0.50,q_85,enc_auto/${id}~mv2.png`;

const EVENTS = [
  // ── RECURRING / SPECIALS ──
  { title: 'Saturday Rib Special',            date: 'Sat, Mar 07',  location: 'Cleveland',   badge: 'Multiple Dates', img: img('fc8283_ce9bc058a5f34c92b35b0529170dabcc'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Saturday Rib Special',            date: 'Sat, Feb 28',  location: 'Cleveland',   badge: 'Multiple Dates', img: img('fc8283_ce9bc058a5f34c92b35b0529170dabcc'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Solo Social: Valentines Edition', date: 'Sat, Feb 14',  location: 'Cleveland',   badge: 'Special Event',  img: img('fc8283_a2781065a7354b25b14d9c0bedc1abd5'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Saturday Rib Special',            date: 'Sat, Feb 21',  location: 'Cleveland',   badge: 'Multiple Dates', img: img('fc8283_ce9bc058a5f34c92b35b0529170dabcc'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Saturday Rib Special',            date: 'Sat, Feb 07',  location: 'Cleveland',   badge: 'Multiple Dates', img: img('fc8283_ce9bc058a5f34c92b35b0529170dabcc'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Talk to Stranger',                date: 'Sat, Jan 17',  location: 'Cleveland',   badge: 'Special Event',  img: img('fc8283_d37599921a2043d19c4f1e969f478aa3'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Saturday Rib Special',            date: 'Sat, Jan 31',  location: 'Cleveland',   badge: 'Multiple Dates', img: img('fc8283_ce9bc058a5f34c92b35b0529170dabcc'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Saturday Rib Special',            date: 'Sat, Jan 24',  location: 'Cleveland',   badge: 'Multiple Dates', img: img('fc8283_ce9bc058a5f34c92b35b0529170dabcc'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Prosperity Buffet',               date: 'Sat, Jan 03',  location: "Hatfield's",  badge: 'Special Event',  img: img('fc8283_d0610b9894b744cabe8597be8dffb4d7'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },

  // ── BATCH 2 ──
  { title: 'Saturday Rib Special',            date: 'Sat, Jan 10',  location: 'Cleveland',   badge: 'Multiple Dates', img: img('fc8283_ce9bc058a5f34c92b35b0529170dabcc'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Wing & Burger Special',           date: 'Wed, Jun 18',  location: 'Cleveland',   badge: 'Weekly Special', img: img('fc8283_86768deee7364fc7a2c03c0522380496'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Rib Night Special',               date: 'Fri, Jun 13',  location: 'Cleveland',   badge: 'Weekly Special', img: img('fc8283_f7d46f591bfe40249ba142a7d38bf9fe'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Bloody Mary Brunch',              date: 'Sun, Jun 08',  location: 'Cleveland',   badge: 'Brunch Event',   img: img('fc8283_08f70b3e0b2648d9856b1d264c849ada'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: '2nd Sunday Brunch Buffet',        date: 'Sun, Jun 08',  location: 'Cleveland',   badge: 'Buffet',         img: img('fc8283_8609885111f94e1fb586558ee97d55e3'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Guest Appreciation Party',        date: 'Sat, Jun 07',  location: "Hatfield's",  badge: 'Special Event',  img: img('fc8283_5998edef19b64876bffe5b7489b4b92d'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Early Bird Special',              date: 'Wed, Jun 04',  location: 'Cleveland',   badge: 'Weekly Special', img: img('fc8283_1b274167c4ce41d7af6c5882ffc601d9'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Food Truck: Brews & BBQ Bash',    date: 'Sat, Jul 05',  location: 'Solon',       badge: 'Food Truck',     img: img('fc8283_f511f4e2e34848aa8afeb35207d9e65b'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Food Truck: Lunch on Lakeside',   date: 'Fri, Jul 04',  location: 'Cleveland',   badge: 'Food Truck',     img: img('fc8283_86768deee7364fc7a2c03c0522380496'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },

  // ── BATCH 3 ──
  { title: 'Burger Week: Tremont Food Truck Festival', date: 'Sun, Jun 29', location: 'Cleveland',    badge: 'Food Truck',     img: img('fc8283_86768deee7364fc7a2c03c0522380496'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Burger Week: Tremont Food Truck Festival', date: 'Sat, Jun 28', location: 'Cleveland',    badge: 'Food Truck',     img: img('fc8283_86768deee7364fc7a2c03c0522380496'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Burger Week: Social Cinema',      date: 'Thu, Jun 26',  location: 'Cleveland',   badge: 'Food Truck',     img: img('fc8283_86768deee7364fc7a2c03c0522380496'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Burger Week: Bike Night Independence', date: 'Wed, Jun 25', location: 'Independence', badge: 'Food Truck',   img: img('fc8283_86768deee7364fc7a2c03c0522380496'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Burger Week: Memorial Monday',    date: 'Mon, Jun 23',  location: 'Cleveland',   badge: 'Food Truck',     img: img('fc8283_86768deee7364fc7a2c03c0522380496'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Food Truck: Private Party',       date: 'Sat, Jun 21',  location: 'Norton',      badge: 'Food Truck',     img: img('fc8283_f511f4e2e34848aa8afeb35207d9e65b'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Food Truck: Private Party',       date: 'Fri, Jun 20',  location: 'Peninsula',   badge: 'Food Truck',     img: img('fc8283_f511f4e2e34848aa8afeb35207d9e65b'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Food Truck: Lakewood Truck Park', date: 'Thu, Jun 19',  location: 'Lakewood',    badge: 'Food Truck',     img: img('fc8283_f511f4e2e34848aa8afeb35207d9e65b'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
  { title: 'Wing & Burger Special',           date: 'Wed, Jun 11',  location: 'Cleveland',   badge: 'Weekly Special', img: img('fc8283_86768deee7364fc7a2c03c0522380496'), link: 'https://www.hatfieldsgoodegrub.com/events-1' },
];

let eventsShown = 0;
const EVENTS_PER_PAGE = 9;

function buildEventCard(ev) {
  return `
    <div class="event-card">
      <div class="event-img-wrap">
        <img src="${ev.img}" alt="${ev.title}" loading="lazy">
        ${ev.badge ? `<span class="event-badge">${ev.badge}</span>` : ''}
      </div>
      <div class="event-body">
        <p class="event-date">${ev.date}</p>
        <h3 class="event-title">${ev.title}</h3>
        <p class="event-location">${ev.location}</p>
        <div class="event-actions">
          <a href="${ev.link}" target="_blank" class="event-btn">More Info</a>
          <a href="${ev.link}" target="_blank" class="event-btn primary">Learn More</a>
        </div>
      </div>
    </div>`;
}

function loadMoreEvents() {
  const grid = document.getElementById('events-grid');
  const btn  = document.getElementById('load-more-btn');
  const next = EVENTS.slice(eventsShown, eventsShown + EVENTS_PER_PAGE);
  next.forEach(ev => grid.insertAdjacentHTML('beforeend', buildEventCard(ev)));
  eventsShown += next.length;
  if (eventsShown >= EVENTS.length) btn.classList.add('hidden');
}

// Init first 9 on load
document.addEventListener('DOMContentLoaded', () => { loadMoreEvents(); });

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
