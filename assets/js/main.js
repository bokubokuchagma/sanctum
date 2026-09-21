document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const root = document.documentElement;
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('webfiction_theme', next);
    });
  }

  // Reading progress bar logic
  const progressBar = document.querySelector('.reading-progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }
    }, { passive: true });
  }
});

