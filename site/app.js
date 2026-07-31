const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const themeLabel = document.querySelector('[data-theme-label]');
const themeColor = document.querySelector('meta[name="theme-color"]');

const setTheme = (theme) => {
  const isPrint = theme === 'print';
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(isPrint));
  themeButton.setAttribute('aria-label', isPrint ? 'Switch to night mode' : 'Switch to print mode');
  themeLabel.textContent = isPrint ? 'night mode' : 'print mode';
  themeColor.setAttribute('content', isPrint ? '#e9e2cf' : '#12140f');
};

const storedTheme = localStorage.getItem('codercor-theme');
setTheme(storedTheme === 'print' ? 'print' : 'night');

themeButton.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'print' ? 'night' : 'print';
  setTheme(nextTheme);
  localStorage.setItem('codercor-theme', nextTheme);
});

const clock = document.querySelector('[data-clock]');
const clockFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Istanbul',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});

const updateClock = () => {
  const now = new Date();
  clock.dateTime = now.toISOString();
  clock.textContent = `IST ${clockFormatter.format(now)}`;
};

updateClock();
setInterval(updateClock, 1000);

const observedElements = document.querySelectorAll('.reveal-on-scroll');
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  }
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

observedElements.forEach((element) => observer.observe(element));

const repoCount = document.querySelector('[data-github="repos"]');
const latestRepoLink = document.querySelector('[data-github="latest"]');

Promise.all([
  fetch('https://api.github.com/users/codercor', {
    headers: { Accept: 'application/vnd.github+json' }
  }),
  fetch('https://api.github.com/users/codercor/repos?sort=pushed&per_page=12', {
    headers: { Accept: 'application/vnd.github+json' }
  })
])
  .then(async ([profileResponse, reposResponse]) => {
    if (!profileResponse.ok || !reposResponse.ok) throw new Error('GitHub profile unavailable');
    return Promise.all([profileResponse.json(), reposResponse.json()]);
  })
  .then(([profile, repos]) => {
    repoCount.textContent = String(profile.public_repos);

    const latestRepo = repos.find((repo) => !repo.fork && !repo.archived);
    if (!latestRepo) return;

    latestRepoLink.textContent = `${latestRepo.name} ↗`;
    latestRepoLink.href = latestRepo.html_url;
  })
  .catch(() => {
    latestRepoLink.textContent = 'github profile ↗';
  });
