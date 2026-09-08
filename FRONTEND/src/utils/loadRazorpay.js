let razorpayLoadingPromise = null;

/**
 * Dynamically loads the Razorpay checkout script on-demand.
 * Ensures the script is only downloaded when a user initiates payment,
 * preventing unnecessary 150KB+ third-party payload on initial page load.
 * 
 * @returns {Promise<boolean>} Resolves true when loaded, false on failure.
 */
export function loadRazorpay() {
  if (typeof window !== 'undefined' && window.Razorpay) {
    return Promise.resolve(true);
  }

  if (razorpayLoadingPromise) {
    return razorpayLoadingPromise;
  }

  razorpayLoadingPromise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      razorpayLoadingPromise = null;
      resolve(false);
    };
    document.head.appendChild(script);
  });

  return razorpayLoadingPromise;
}
