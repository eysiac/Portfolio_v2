// ================= YEAR =================
document.getElementById('year').textContent = new Date().getFullYear();

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ================= CELL REVEAL ANIMATION =================
const cells = document.querySelectorAll('.cell');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.05,
  rootMargin: '0px 0px -50px 0px'
});

cells.forEach((cell, index) => {
  cell.style.opacity = '0';
  cell.style.transform = 'translateY(20px)';
  cell.style.transition = `opacity 0.6s ease ${index * 0.04}s, transform 0.6s ease ${index * 0.04}s, border-color 0.3s ease`;
  observer.observe(cell);
});

// ================= SERVICE ROW CLICK =================
document.querySelectorAll('.service-row').forEach(row => {
  row.addEventListener('click', () => {
    const serviceName = row.querySelector('h3').textContent;
    console.log('Selected service:', serviceName);
  });
});

// ================= ROADMAP STAGE HOVER =================
document.querySelectorAll('.roadmap-stage').forEach(stage => {
  stage.addEventListener('mouseenter', () => {
    const stageName = stage.querySelector('h3').textContent;
    console.log('Hovering roadmap:', stageName);
  });
});