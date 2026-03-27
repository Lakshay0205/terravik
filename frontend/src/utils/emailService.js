/**
 * Email Service - Backend API Integration
 * All emails are sent through backend using Nodemailer
 */

const API_URL = import.meta.env.VITE_PAYMENT_API_URL || 'http://localhost:5000';

/**
 * Send order success emails (User + Admin)
 * Called after payment verification success
 */
export const sendOrderSuccessEmails = async (orderData) => {
  // Emails are sent automatically by backend after payment verification
  // This function is kept for compatibility but does nothing
  console.log('Order success emails will be sent by backend');
  return { success: true };
};

/**
 * Send payment failed email (User only)
 * Called when Razorpay payment fails
 */
export const sendPaymentFailedEmail = async (orderData) => {
  try {
    const response = await fetch(`${API_URL}/api/payment-failed`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderData }),
    });

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || 'Failed to send payment failure email');
    }

    return data;
  } catch (error) {
    console.error('Error sending payment failure email:', error);
    throw error;
  }
};

/**
 * Send COD order emails (User + Admin)
 * Called when user places COD order
 */
export const sendCODOrderEmails = async (orderData) => {
  try {
    const response = await fetch(`${API_URL}/api/cod-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderData }),
    });

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || 'Failed to send COD order emails');
    }

    return data;
  } catch (error) {
    console.error('Error sending COD order emails:', error);
    throw error;
  }
};

/**
 * Send inquiry emails (User + Admin)
 * Called when user submits inquiry form
 */
export const sendInquiryEmails = async (inquiryData) => {
  try {
    const response = await fetch(`${API_URL}/api/inquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiryData),
    });

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || 'Failed to send inquiry emails');
    }

    return { success: true, errors: [] };
  } catch (error) {
    console.error('Error sending inquiry emails:', error);
    throw error;
  }
};

/**
 * Utility: Check if email system is configured
 */
export const isEmailConfigured = () => {
  // Email system is always available through backend
  return true;
};

