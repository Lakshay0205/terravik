const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const initiateRazorpayPayment = async ({
  amount,
  orderId,
  keyId,
  productName,
  customerName,
  customerContact,
  onSuccess,
  onFailure,
}) => {
  const res = await loadRazorpayScript();

  if (!res) {
    alert('Razorpay SDK failed to load. Please check your internet connection.');
    return;
  }

  const options = {
    key: keyId,
    amount: amount * 100, // Convert to paise
    currency: 'INR',
    name: 'TerraVik',
    description: productName,
    order_id: orderId,
    prefill: {
      name: customerName,
      contact: customerContact,
    },
    theme: {
      color: '#5a9a3c',
    },
    handler: function (response) {
      onSuccess(response);
    },
    modal: {
      ondismiss: function () {
        onFailure('Payment cancelled by user');
      },
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.on('payment.failed', function (response) {
    onFailure(response.error.description);
  });
  paymentObject.open();
};

export const createRazorpayOrder = async (amount, productDetails) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_PAYMENT_API_URL}/api/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency: 'INR',
        receipt: `receipt_${Date.now()}`,
        notes: productDetails,
      }),
    });

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || 'Failed to create order');
    }

    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const verifyRazorpayPayment = async (paymentData) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_PAYMENT_API_URL}/api/verify-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || 'Payment verification failed');
    }

    return data;
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
};
