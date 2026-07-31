const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');

const storedTheme = localStorage.getItem('codercor-theme');
if (storedTheme === 'ink') {
  root.dataset.theme = 'ink';
  themeButton.setAttribute('aria-pressed', 'true');
  themeColor.setAttribute('content', '#211e1a');
}

themeButton.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'ink' ? 'paper' : 'ink';
  root.dataset.theme = nextTheme;
  themeButton.setAttribute('aria-pressed', String(nextTheme === 'ink'));
  themeColor.setAttribute('content', nextTheme === 'ink' ? '#211e1a' : '#f0ede4');
  localStorage.setItem('codercor-theme', nextTheme);
});

const observedElements = document.querySelectorAll('.reveal-on-scroll');
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  }
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

observedElements.forEach((element) => observer.observe(element));

const repoCount = document.querySelector('[data-github="repos"]');
const apiState = document.querySelector('[data-github="state"]');

fetch('https://api.github.com/users/codercor', {
  headers: { Accept: 'application/vnd.github+json' }
})
  .then((response) => {
    if (!response.ok) throw new Error('GitHub profile unavailable');
    return response.json();
  })
  .then((profile) => {
    repoCount.textContent = String(profile.public_repos);
    apiState.textContent = 'Live';
  })
  .catch(() => {
    apiState.textContent = 'Cached';
  });
