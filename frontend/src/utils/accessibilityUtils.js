/**
 * Accessibility Optimization Utilities
 */

// Check color contrast
export const checkColorContrast = (foreground, background) => {
  const getLuminance = (color) => {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? luminance : luminance;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  const contrast = (lighter + 0.05) / (darker + 0.05);
  return {
    ratio: contrast.toFixed(2),
    wcagAA: contrast >= 4.5,
    wcagAAA: contrast >= 7,
  };
};

// Ensure proper heading hierarchy
export const validateHeadingHierarchy = () => {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const headingLevels = Array.from(headings).map((h) => parseInt(h.tagName[1]));

  let isValid = true;
  for (let i = 1; i < headingLevels.length; i++) {
    if (headingLevels[i] - headingLevels[i - 1] > 1) {
      console.warn(`Heading hierarchy issue: ${headingLevels[i - 1]} -> ${headingLevels[i]}`);
      isValid = false;
    }
  }

  return isValid;
};

// Check for missing alt text
export const checkAltText = () => {
  const images = document.querySelectorAll('img');
  const missingAlt = [];

  images.forEach((img) => {
    if (!img.alt || img.alt.trim() === '') {
      missingAlt.push(img);
    }
  });

  if (missingAlt.length > 0) {
    console.warn(`${missingAlt.length} images missing alt text`);
  }

  return missingAlt;
};

// Check for form labels
export const checkFormLabels = () => {
  const inputs = document.querySelectorAll('input, textarea, select');
  const missingLabels = [];

  inputs.forEach((input) => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (!label && !input.getAttribute('aria-label')) {
      missingLabels.push(input);
    }
  });

  if (missingLabels.length > 0) {
    console.warn(`${missingLabels.length} form inputs missing labels`);
  }

  return missingLabels;
};

// Ensure keyboard navigation
export const ensureKeyboardNavigation = () => {
  const interactiveElements = document.querySelectorAll(
    'button, a, input, textarea, select, [role="button"]'
  );

  interactiveElements.forEach((element) => {
    if (element.tagName !== 'BUTTON' && element.tagName !== 'A') {
      if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
      }
    }
  });
};

// Add skip to main content link
export const addSkipLink = () => {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px;
    z-index: 100;
  `;

  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
  });

  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });

  document.body.insertBefore(skipLink, document.body.firstChild);
};

// Check ARIA attributes
export const checkARIAAttributes = () => {
  const ariaElements = document.querySelectorAll('[role]');
  const issues = [];

  ariaElements.forEach((element) => {
    const role = element.getAttribute('role');

    // Check if role is valid
    const validRoles = [
      'alert',
      'alertdialog',
      'application',
      'article',
      'banner',
      'button',
      'checkbox',
      'columnheader',
      'combobox',
      'complementary',
      'contentinfo',
      'definition',
      'dialog',
      'directory',
      'document',
      'feed',
      'figure',
      'form',
      'grid',
      'gridcell',
      'group',
      'heading',
      'img',
      'link',
      'list',
      'listbox',
      'listitem',
      'log',
      'main',
      'marquee',
      'math',
      'menu',
      'menubar',
      'menuitem',
      'menuitemcheckbox',
      'menuitemradio',
      'navigation',
      'none',
      'note',
      'option',
      'presentation',
      'progressbar',
      'radio',
      'radiogroup',
      'region',
      'row',
      'rowgroup',
      'rowheader',
      'scrollbar',
      'search',
      'searchbox',
      'separator',
      'slider',
      'spinbutton',
      'status',
      'switch',
      'tab',
      'tablist',
      'tabpanel',
      'term',
      'textbox',
      'timer',
      'toolbar',
      'tooltip',
      'tree',
      'treegrid',
      'treeitem',
    ];

    if (!validRoles.includes(role)) {
      issues.push({ element, issue: `Invalid role: ${role}` });
    }
  });

  if (issues.length > 0) {
    console.warn('ARIA issues found:', issues);
  }

  return issues;
};

// Ensure sufficient touch target size
export const checkTouchTargetSize = () => {
  const interactiveElements = document.querySelectorAll(
    'button, a, input[type="button"], input[type="checkbox"], input[type="radio"]'
  );

  const smallTargets = [];

  interactiveElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) {
      smallTargets.push(element);
    }
  });

  if (smallTargets.length > 0) {
    console.warn(`${smallTargets.length} touch targets smaller than 44x44px`);
  }

  return smallTargets;
};

// Check for sufficient color contrast
export const checkAllContrasts = () => {
  const elements = document.querySelectorAll('*');
  const contrastIssues = [];

  elements.forEach((element) => {
    const style = window.getComputedStyle(element);
    const color = style.color;
    const backgroundColor = style.backgroundColor;

    if (color && backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
      const contrast = checkColorContrast(color, backgroundColor);
      if (!contrast.wcagAA) {
        contrastIssues.push({
          element,
          contrast: contrast.ratio,
          issue: 'Insufficient color contrast',
        });
      }
    }
  });

  if (contrastIssues.length > 0) {
    console.warn('Color contrast issues found:', contrastIssues);
  }

  return contrastIssues;
};

// Enable focus visible styles
export const enableFocusVisible = () => {
  const style = document.createElement('style');
  style.textContent = `
    :focus-visible {
      outline: 3px solid #4F46E5;
      outline-offset: 2px;
    }
    
    button:focus-visible,
    a:focus-visible,
    input:focus-visible,
    textarea:focus-visible,
    select:focus-visible {
      outline: 3px solid #4F46E5;
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);
};

// Initialize all accessibility checks
export const initializeAccessibilityChecks = () => {
  // Add skip link
  addSkipLink();

  // Ensure keyboard navigation
  ensureKeyboardNavigation();

  // Enable focus visible
  enableFocusVisible();

  // Validate heading hierarchy
  validateHeadingHierarchy();

  // Check alt text
  checkAltText();

  // Check form labels
  checkFormLabels();

  // Check ARIA attributes
  checkARIAAttributes();

  // Check touch target size
  checkTouchTargetSize();

  // Check color contrast
  checkAllContrasts();
};

// Announce dynamic content to screen readers
export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    announcement.remove();
  }, 1000);
};
