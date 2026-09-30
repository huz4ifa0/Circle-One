/**
 * CIRCLE ONE - KARACHI B2B CORPORATE WEBSITE ENGINE
 * Ultra-Luxury, Mobile-Optimized Single Page Application with Smooth Animations
 */

import confetti from 'canvas-confetti';

// ==========================================
// 1. DATA REPOSITORY
// ==========================================
export const caseStudies = [
  {
    id: 'kpmg-merch',
    title: 'KPMG Pakistan Annual Leadership Merchandise',
    client: 'KPMG Advisory & Audit',
    category: 'corporate',
    categoryLabel: 'Corporate Gifting',
    volume: '10,000 Custom Items Delivered',
    image: 'assets/images/executive-gift-box.jpg',
    challenge: 'KPMG required 10,000 executive welcome boxes delivered simultaneously across Karachi, Lahore, and Islamabad within a tight 14-day deadline.',
    solution: 'Our Nazimabad team operated double production shifts with in-house laser engraving, gold foil debossing, and dedicated air freight routing.',
    results: '100% on-time delivery across all branches with zero defective units and glowing partner feedback.',
    items: ['Gold-Foiled Italian Leather Journal', 'Matte Black Thermal Flask', 'Executive Metal Rollerball Pen', 'Presentation Hamper Box']
  },
  {
    id: 'hbl-summit',
    title: 'HBL Regional Leaders Summit Gifting',
    client: 'Habib Bank Limited (HBL)',
    category: 'events',
    categoryLabel: 'Event Merchandise',
    volume: '3,500 Luxury Drinkware Sets',
    image: 'assets/images/corporate-mug-tumbler.jpg',
    challenge: 'Needed premium executive drinkware with permanent laser engraving that would not peel or fade through commercial dishwashers.',
    solution: 'Engineered double-wall food-grade 304 stainless steel tumblers paired with organic cork base ceramic mugs with fiber laser etching.',
    results: 'Recognized as the most popular conference merchandise in HBL summit history.',
    items: ['Laser Engraved Thermal Tumbler', 'Cork Base Ceramic Mug', 'Custom Printed Gift Box']
  },
  {
    id: 'unilever-apparel',
    title: 'Unilever Pakistan Onboarding Apparel',
    client: 'Unilever Pakistan',
    category: 'promotional',
    categoryLabel: 'Promotional Items',
    volume: '5,000 Organic Pique Polo Shirts',
    image: 'assets/images/corporate-apparel.jpg',
    challenge: 'Required strict color matching to Unilever brand guidelines with breathable 240 GSM fabric for Karachi summer climate.',
    solution: 'Custom dyed combed honeycomb cotton pique fabric with high-density 3D embroidery and reinforced collar stitching.',
    results: 'Contract renewed for consecutive years covering all national plant facilities.',
    items: ['240 GSM Combed Cotton Polo', 'Brushed Fleece Zipper Hoodie', 'Structured Corporate Cap']
  },
  {
    id: 'engro-tech',
    title: 'Engro Corp Executive Tech Swag Box',
    client: 'Engro Corporation',
    category: 'corporate',
    categoryLabel: 'Corporate Gifting',
    volume: '2,000 Executive Tech Kits',
    image: 'assets/images/corporate-tech-gadgets.jpg',
    challenge: 'Wanted high-end, reliable tech accessories that executive board members and senior management would actually use daily.',
    solution: 'Sourced aviation-grade space gray aluminum 10,000mAh powerbanks and Qi wireless charging pads with laser-etched insignia.',
    results: 'Distributed at Engro Annual Shareholder & Leadership Meet with 99.4% satisfaction score.',
    items: ['PD Fast Charging Powerbank', 'Ambient LED Qi Wireless Pad', 'Noise-Cancelling Earbuds']
  },
  {
    id: 'standard-chartered-badges',
    title: 'Standard Chartered 24k Gold Honor Badges',
    client: 'Standard Chartered Bank',
    category: 'events',
    categoryLabel: 'Event Merchandise',
    volume: '2,500 Enamel Lapel Badges',
    image: 'assets/images/metal-lapel-badges.jpg',
    challenge: 'Required jewelry-grade metallic lapel badges that would not damage expensive executive suits or blazers.',
    solution: 'Manufactured die-struck jewelry brass badges with 24k gold electroplating and dual neodymium magnetic clasps.',
    results: 'Zero clothing damage reported; deployed nationwide across all priority banking branches.',
    items: ['Die-Struck Brass Lapel Pins', 'Dual Neodymium Magnetic Backing', 'Woven Silk Neck Lanyard']
  },
  {
    id: 'nestle-stationery',
    title: 'Nestlé Corporate Executive Stationery',
    client: 'Nestlé Pakistan',
    category: 'promotional',
    categoryLabel: 'Promotional Items',
    volume: '4,000 Embossed Journal Sets',
    image: 'assets/images/leather-journal-pen.jpg',
    challenge: 'Sourcing 4,000 premium textured journals with gilded gold edges and brass weighted pens within 10 days.',
    solution: 'Stock reserved at our Karachi warehouse with rapid in-house foil stamping lines running 24/7.',
    results: 'Delivered 2 days ahead of schedule for annual corporate planning conferences.',
    items: ['Thermo-PU Textured Journal', 'Gilded Gold Foil Page Edges', 'Brass Heavyweight Pen']
  }
];

// Inquiries Database (Mock storage)
export const initialInquiries = [
  {
    id: 'INQ-1042',
    name: 'Ahmad Raza',
    company: 'Engro Fertilizers',
    email: 'ahmad.raza@engro.com',
    phone: '+92 300 8241920',
    projectType: 'corporate_gifting',
    projectLabel: 'Corporate Gifting',
    budget: 'Rs 1,000,000 - 2,500,000',
    message: 'Need 1,500 custom gift hampers for our upcoming annual partner meet in Karachi.',
    date: 'Sept 27, 2026',
    status: 'new'
  }
];

// ==========================================
// 2. APPLICATION INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  renderPortfolioGrid('all');
  setupPortfolioFilters();
  setupContactForm();
  setupConsultationForm();
  setupCaseStudyModal();
  setupScrollReveal();
  setupServiceSelection();
  setupWhatsAppWidget();
});

// Toast Notification
export function showToast(message, type = 'success') {
  const existing = document.querySelector('.site-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'site-toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #090e17;
    border: 1px solid ${type === 'success' ? '#ff5500' : '#0051ba'};
    color: #ffffff;
    padding: 16px 24px;
    border-radius: 14px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.45);
    z-index: 9999;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 14px;
    animation: toastIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    max-width: 90vw;
  `;
  toast.innerHTML = `
    <span style="color: ${type === 'success' ? '#ff5500' : '#1a73e8'}; font-size: 1.3rem; font-weight: bold;">${type === 'success' ? '✓' : 'ℹ'}</span>
    <div style="line-height: 1.5;">${message}</div>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// ==========================================
// 3. NAVIGATION, MOBILE DRAWER & SCROLLSPY
// ==========================================
function setupNavigation() {
  const navBar = document.querySelector('.site-nav');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-menu-links .mobile-nav-link');
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-drawer-backdrop');

  // Helper to open mobile menu
  function openMobileDrawer() {
    mobileToggle?.classList.add('active');
    mobileToggle?.setAttribute('aria-expanded', 'true');
    mobileDrawer?.classList.add('open');
    mobileBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Helper to close mobile menu
  function closeMobileDrawer() {
    mobileToggle?.classList.remove('active');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    mobileDrawer?.classList.remove('open');
    mobileBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Toggle mobile drawer
  mobileToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileDrawer?.classList.contains('open');
    if (isOpen) {
      closeMobileDrawer();
    } else {
      openMobileDrawer();
    }
  });

  // Close drawer when clicking backdrop
  mobileBackdrop?.addEventListener('click', closeMobileDrawer);

  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileDrawer?.classList.contains('open') && !mobileDrawer.contains(e.target) && e.target !== mobileToggle) {
      closeMobileDrawer();
    }
  });

  // Smooth scroll links with hash
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          closeMobileDrawer();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Navbar Scroll Shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navBar?.classList.add('scrolled');
    } else {
      navBar?.classList.remove('scrolled');
    }
  }, { passive: true });

  // ScrollSpy using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');

          desktopNavLinks.forEach(link => {
            const isMatch = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isMatch);
          });

          mobileNavLinks.forEach(link => {
            const isMatch = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isMatch);
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }
}

// Service Selection buttons linking to contact form
function setupServiceSelection() {
  document.querySelectorAll('.select-service-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const service = btn.dataset.service;
      const selectBox = document.getElementById('cf-project-type');
      if (selectBox && service) {
        selectBox.value = service;
      }
    });
  });
}

// Scroll Reveal Animations with smooth stagger
function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && reveals.length > 0) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.04,
      rootMargin: '0px 0px -20px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-revealed'));
  }
}

// ==========================================
// 4. PORTFOLIO & CASE STUDIES GRID
// ==========================================
function renderPortfolioGrid(filter = 'all') {
  const grid = document.getElementById('portfolio-grid-container');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.category === filter);

  grid.innerHTML = filtered.map(item => `
    <div class="project-item" data-id="${item.id}" tabindex="0" role="button" aria-label="View case study for ${item.title}">
      <div class="project-media">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="project-cat-badge">${item.categoryLabel}</span>
      </div>
      <div class="project-info">
        <div class="project-client-name">${item.client}</div>
        <h3 class="project-title">${item.title}</h3>
        <p class="project-vol">${item.volume}</p>
        <div style="margin-top: 14px; font-size: 0.88rem; color: var(--co-orange); font-weight: 700; display: flex; align-items: center; gap: 6px;">
          View Full Case Study →
        </div>
      </div>
    </div>
  `).join('');

  // Wire Click to Open Modal
  grid.querySelectorAll('.project-item').forEach(el => {
    const openHandler = () => {
      const id = el.dataset.id;
      openCaseStudyModal(id);
    };
    el.addEventListener('click', openHandler);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openHandler();
      }
    });
  });
}

function setupPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      renderPortfolioGrid(cat);
    });
  });
}

function setupCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('case-study-close-btn');

  function closeModal() {
    modal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      closeModal();
    }
  });
}

function openCaseStudyModal(caseId) {
  const item = caseStudies.find(c => c.id === caseId);
  if (!item) return;

  const modal = document.getElementById('case-study-modal');
  const content = document.getElementById('case-study-modal-content');

  if (content) {
    content.innerHTML = `
      <div style="position: relative; aspect-ratio: 16/9; overflow: hidden; border-radius: 14px; margin-bottom: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
        <span class="project-cat-badge" style="top: 16px; left: 16px;">${item.categoryLabel}</span>
      </div>

      <div style="font-size: 0.85rem; color: var(--co-blue); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
        CLIENT: ${item.client}
      </div>
      <h2 style="font-size: clamp(1.4rem, 3vw, 1.8rem); margin-bottom: 8px;">${item.title}</h2>
      <p style="color: var(--co-orange); font-weight: 700; font-size: 0.95rem; margin-bottom: 24px;">${item.volume}</p>

      <div style="display: grid; grid-template-columns: 1fr; gap: 18px; margin-bottom: 24px;">
        <div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid var(--border-card);">
          <h4 style="color: var(--text-dark); font-size: 1rem; margin-bottom: 6px;">🎯 The Client Challenge</h4>
          <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6;">${item.challenge}</p>
        </div>

        <div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid var(--border-card);">
          <h4 style="color: var(--co-blue); font-size: 1rem; margin-bottom: 6px;">⚙️ Circle One Solution</h4>
          <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6;">${item.solution}</p>
        </div>

        <div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid var(--border-card);">
          <h4 style="color: #16a34a; font-size: 1rem; margin-bottom: 6px;">📈 Results & Impact</h4>
          <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6;">${item.results}</p>
        </div>
      </div>

      <div style="margin-bottom: 28px;">
        <h4 style="font-size: 0.95rem; margin-bottom: 12px; color: var(--text-dark);">Deliverables Fabricated:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${item.items.map(it => `
            <span style="font-size: 0.82rem; background: var(--co-blue-subtle); border: 1px solid rgba(0,81,186,0.2); color: var(--co-blue); padding: 6px 14px; border-radius: 20px; font-weight: 600;">
              ${it}
            </span>
          `).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 14px; justify-content: flex-end; border-top: 1px solid var(--border-card); padding-top: 20px; flex-wrap: wrap;">
        <button class="btn btn-outline btn-sm" id="modal-cancel-btn">Close</button>
        <button class="btn btn-orange btn-sm btn-shimmer" id="modal-inquire-btn">
          <span>Inquire About Similar Project →</span>
        </button>
      </div>
    `;

    document.getElementById('modal-cancel-btn')?.addEventListener('click', () => {
      modal?.classList.remove('open');
      document.body.style.overflow = '';
    });

    document.getElementById('modal-inquire-btn')?.addEventListener('click', () => {
      modal?.classList.remove('open');
      document.body.style.overflow = '';
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const selectBox = document.getElementById('cf-project-type');
        if (selectBox) selectBox.value = item.category === 'events' ? 'event_merchandise' : (item.category === 'corporate' ? 'corporate_gifting' : 'promotional_items');
      }
    });

    modal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

// ==========================================
// 5. CONTACT & RFQ FORM SUBMISSION WITH CELEBRATION
// ==========================================
function setupContactForm() {
  const form = document.getElementById('main-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('cf-name')?.value.trim();
    const company = document.getElementById('cf-company')?.value.trim();
    const email = document.getElementById('cf-email')?.value.trim();
    const phone = document.getElementById('cf-phone')?.value.trim();
    const projectType = document.getElementById('cf-project-type')?.value;
    const budget = document.getElementById('cf-budget')?.value;
    const message = document.getElementById('cf-message')?.value.trim();

    if (!name || !email || !company) {
      showToast('Please fill in your name, company, and work email.', 'error');
      return;
    }

    const newInquiry = {
      id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
      name,
      company,
      email,
      phone: phone || 'N/A',
      projectType,
      budget: budget || 'Undisclosed',
      message: message || 'General Inquiry',
      date: 'Today, Just now',
      status: 'new'
    };

    initialInquiries.unshift(newInquiry);

    // Luxury Celebration Confetti Effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0051ba', '#ff5500', '#1a73e8', '#ffd700']
      });
    } catch {
      // Graceful fallback if confetti unavailable
    }

    // Reset Form
    form.reset();

    showToast(`Thank you, ${name}! Your inquiry #${newInquiry.id} has been submitted. Our Karachi sales team will contact you within 24 hours.`, 'success');
  });
}

function setupConsultationForm() {
  const form = document.getElementById('consultation-schedule-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const schedName = document.getElementById('sched-name')?.value || 'Client';

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0051ba', '#ff5500']
      });
    } catch {
      // Graceful fallback
    }

    showToast(`Consultation appointment confirmed for ${schedName}! Our team will send the calendar invite to your email.`, 'success');
    form.reset();
  });
}

// ==========================================
// 6. INTERACTIVE WHATSAPP WIDGET (BOTTOM RIGHT)
// ==========================================
function setupWhatsAppWidget() {
  const triggerBtn = document.getElementById('wa-widget-btn');
  const popupBox = document.getElementById('wa-popup-box');
  const closeBtn = document.getElementById('wa-popup-close');
  const unreadBadge = document.getElementById('wa-badge-unread');
  const wrapper = document.getElementById('wa-widget-wrapper');

  function openPopup() {
    popupBox?.classList.add('open');
    popupBox?.setAttribute('aria-hidden', 'false');
    if (unreadBadge) {
      unreadBadge.style.display = 'none';
    }
  }

  function closePopup() {
    popupBox?.classList.remove('open');
    popupBox?.setAttribute('aria-hidden', 'true');
  }

  triggerBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = popupBox?.classList.contains('open');
    if (isOpen) {
      closePopup();
    } else {
      openPopup();
    }
  });

  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    closePopup();
  });

  const handleOutsideClose = (e) => {
    if (popupBox?.classList.contains('open') && !wrapper?.contains(e.target)) {
      closePopup();
    }
  };

  document.addEventListener('click', handleOutsideClose);
  document.addEventListener('touchend', handleOutsideClose, { passive: true });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popupBox?.classList.contains('open')) {
      closePopup();
    }
  });
}
