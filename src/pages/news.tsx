export default function RedirectToNews() {
  if (typeof window !== 'undefined') {
    window.location.href = 'https://news.pelican.dev';
  }
  return null; // Return null since no UI is needed.
}
