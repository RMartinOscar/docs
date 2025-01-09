export default function RedirectToEggsNest() {
  if (typeof window !== 'undefined') {
    window.location.href = 'https://pelican-eggs.github.io/pelican';
  }
  return null; // Return null since no UI is needed.
}
