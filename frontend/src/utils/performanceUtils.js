/**
 * Performance Optimization Utilities
 */

// Lazy load images
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

// Debounce function for scroll events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for frequent events
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload fonts
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

// Monitor Core Web Vitals
export const monitorWebVitals = () => {
  // Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.log('LCP observer not supported');
    }

    // First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingDuration);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.log('FID observer not supported');
    }

    // Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS:', clsValue);
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.log('CLS observer not supported');
    }
  }
};

// Optimize images
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    // Add loading="lazy" for native lazy loading
    if (!img.loading) {
      img.loading = 'lazy';
    }

    // Add decoding="async" for async decoding
    if (!img.decoding) {
      img.decoding = 'async';
    }

    // Ensure alt text exists
    if (!img.alt) {
      img.alt = 'Image';
    }
  });
};

// Cache API responses
export const cacheResponse = (key, data, ttl = 3600000) => {
  const cacheData = {
    data,
    timestamp: Date.now(),
    ttl,
  };
  localStorage.setItem(`cache_${key}`, JSON.stringify(cacheData));
};

export const getCachedResponse = (key) => {
  const cached = localStorage.getItem(`cache_${key}`);
  if (!cached) return null;

  const { data, timestamp, ttl } = JSON.parse(cached);
  if (Date.now() - timestamp > ttl) {
    localStorage.removeItem(`cache_${key}`);
    return null;
  }

  return data;
};

// Measure performance
export const measurePerformance = () => {
  if (window.performance && window.performance.timing) {
    const timing = window.performance.timing;
    const metrics = {
      dns: timing.domainLookupEnd - timing.domainLookupStart,
      tcp: timing.connectEnd - timing.connectStart,
      ttfb: timing.responseStart - timing.requestStart,
      download: timing.responseEnd - timing.responseStart,
      domInteractive: timing.domInteractive - timing.navigationStart,
      domComplete: timing.domComplete - timing.navigationStart,
      loadComplete: timing.loadEventEnd - timing.navigationStart,
    };
    console.log('Performance Metrics:', metrics);
    return metrics;
  }
};

// Enable service worker for offline support
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  }
};

// Optimize CSS delivery
export const optimizeCSSDelivery = () => {
  // Move non-critical CSS to async loading
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  links.forEach((link) => {
    if (!link.media || link.media === 'all') {
      link.media = 'print';
      link.onload = function () {
        this.media = 'all';
      };
    }
  });
};

// Defer non-critical JavaScript
export const deferNonCriticalJS = () => {
  const scripts = document.querySelectorAll('script');
  scripts.forEach((script) => {
    if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
      script.defer = true;
    }
  });
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  // Preload critical resources
  preloadCriticalResources();

  // Optimize images
  optimizeImages();

  // Lazy load images
  lazyLoadImages();

  // Monitor Web Vitals
  monitorWebVitals();

  // Measure performance
  measurePerformance();

  // Optimize CSS delivery
  optimizeCSSDelivery();

  // Defer non-critical JS
  deferNonCriticalJS();

  // Register service worker
  registerServiceWorker();
};
