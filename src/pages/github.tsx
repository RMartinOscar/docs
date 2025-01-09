export default function RedirectToGithub() {
  if (typeof window !== 'undefined') {
    window.location.href = 'https://github.com/pelican-dev';
  }
  return null; // Return null since no UI is needed.
}
