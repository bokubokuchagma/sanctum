/**
 * The First Elden Lord - Main Client Script
 * Zero-dependency, lightweight, mobile-first.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Theme Management
  const themeToggle = document.querySelector('.theme-toggle-btn');
  const root = document.documentElement;

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', nextTheme);
      localStorage.setItem('webfiction_theme', nextTheme);
    });
  }

  // Reading Progress Bar
  const progressBar = document.querySelector('.reading-progress-bar');
  if (progressBar) {
    const updateProgress = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable > 0) {
        const percentage = Math.min(100, Math.max(0, (scrollY / totalScrollable) * 100));
        progressBar.style.width = `${percentage}%`;
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();
  }
});
