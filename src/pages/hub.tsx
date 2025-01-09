export default function RedirectToHub() {
  if (typeof window !== 'undefined') {
    window.location.href = 'https://hub.pelican.dev';
  }
  return null; // Return null since no UI is needed.
}
