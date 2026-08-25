 // ---------- LIGHTBOX PHOTOS DE PROJET ----------
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.photo-slot').forEach(slot => {
    slot.addEventListener('click', () => {
      const img = slot.querySelector('img');
      if (img) {
        lightboxImg.src = img.src;
        lightbox.classList.add('open');
      }
    });
  });

  lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });

  // ---------- NAVIGATION ----------
  const navBtns = document.querySelectorAll('.nav-btn');
  const views = document.querySelectorAll('.view');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      views.forEach(v => v.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.target).classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // ---------- MODE SOMBRE / CLAIR ----------
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const htmlEl = document.documentElement;

  themeToggle.addEventListener('click', () => {
    const isDark = htmlEl.getAttribute('data-theme') === 'dark';
    htmlEl.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeIcon.className = isDark ? 'fi fi-rr-moon' : 'fi fi-rr-sun';
  });

  // ---------- GALERIES PHOTO (une par carte projet) ----------
  document.querySelectorAll('.mini-gallery').forEach(gallery => {
    const track = gallery.querySelector('.mini-track');
    const prev = gallery.querySelector('.mg-prev');
    const next = gallery.querySelector('.mg-next');

    prev.addEventListener('click', () => {
      track.scrollBy({ left: -132, behavior: 'smooth' });
    });
    next.addEventListener('click', () => {
      track.scrollBy({ left: 132, behavior: 'smooth' });
    });
  });