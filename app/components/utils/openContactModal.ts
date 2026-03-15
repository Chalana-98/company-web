/**
 * Fires the global custom event that Navbar listens to,
 * opening the Contact Us modal from anywhere on the page.
 */
export function openContactModal() {
  globalThis.dispatchEvent(new Event("open-contact-modal"));
}
