/**
 * Smooth scroll to an element with fallback for older browsers
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top in pixels (default: 0)
 */
export const smoothScrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;
  }

  const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;

  // Check if browser supports smooth scrolling
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  } else {
    // Fallback for older browsers - animate scroll manually
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }
};

/**
 * Scroll to contact form on the current page
 */
export const scrollToContactForm = () => {
  smoothScrollToElement('contact-form', 80); // 80px offset for fixed header
};
