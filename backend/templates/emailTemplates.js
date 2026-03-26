/**
 * Email Templates
 * Professional HTML email templates with green + gold theme
 */

const generateOrderId = () => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ORD-${timestamp}-${random}`;
};

const emailStyles = `
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f4;
  }
  .email-container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
  }
  .header {
    background: linear-gradient(135deg, #5a9a3c 0%, #7cb342 100%);
    padding: 40px 20px;
    text-align: center;
  }
  .header-icon {
    font-size: 64px;
    margin-bottom: 15px;
  }
  .header h1 {
    color: #ffffff;
    margin: 0;
    font-size: 32px;
    font-weight: 700;
  }
  .header p {
    color: #ffffff;
    margin: 10px 0 0 0;
    font-size: 16px;
    opacity: 0.95;
  }
  .content {
    padding: 40px 30px;
  }
  .greeting {
    font-size: 18px;
    color: #333333;
    margin-bottom: 20px;
  }
  .card {
    background: #f9fafb;
    border-left: 4px solid #5a9a3c;
    padding: 20px;
    margin: 25px 0;
    border-radius: 8px;
  }
  .card h2 {
    color: #5a9a3c;
    margin: 0 0 15px 0;
    font-size: 20px;
    font-weight: 600;
  }
  .detail-row {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #e5e7eb;
  }
  .detail-row:last-child {
    border-bottom: none;
  }
  .detail-label {
    color: #6b7280;
    font-weight: 600;
    font-size: 14px;
  }
  .detail-value {
    color: #1f2937;
    font-weight: 500;
    text-align: right;
  }
  .total-section {
    background: linear-gradient(135deg, #f0f7ed 0%, #e8f5e9 100%);
    padding: 20px;
    margin: 25px 0;
    border-radius: 8px;
    border: 2px solid #5a9a3c;
  }
  .total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .total-label {
    font-size: 20px;
    font-weight: 700;
    color: #1f2937;
  }
  .total-value {
    font-size: 28px;
    font-weight: 700;
    color: #5a9a3c;
  }
  .info-box {
    background: #fef3c7;
    border-left: 4px solid #fbbf24;
    padding: 15px;
    margin: 20px 0;
    border-radius: 4px;
  }
  .info-box p {
    margin: 0;
    color: #92400e;
    font-size: 14px;
    line-height: 1.6;
  }
  .success-box {
    background: #d1fae5;
    border-left: 4px solid #10b981;
    padding: 15px;
    margin: 20px 0;
    border-radius: 4px;
  }
  .success-box p {
    margin: 0;
    color: #065f46;
    font-size: 14px;
    line-height: 1.6;
  }
  .alert-box {
    background: #fee2e2;
    border-left: 4px solid #ef4444;
    padding: 15px;
    margin: 20px 0;
    border-radius: 4px;
  }
  .alert-box p {
    margin: 0;
    color: #991b1b;
    font-size: 14px;
    line-height: 1.6;
  }
  .footer {
    background: #1f2937;
    padding: 30px 20px;
    text-align: center;
  }
  .footer p {
    color: #9ca3af;
    margin: 5px 0;
    font-size: 14px;
  }
  .footer .brand {
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
  }
  .divider {
    height: 1px;
    background: #e5e7eb;
    margin: 25px 0;
  }
  @media only screen and (max-width: 600px) {
    .content {
      padding: 30px 20px;
    }
    .header h1 {
      font-size: 24px;
    }
    .total-value {
      font-size: 24px;
    }
  }
`;

const orderSuccessUserTemplate = (data) => {
  const { orderId, customer, product, total, paymentId, shippingMethod, brandName } = data;
  const companyName = brandName || process.env.COMPANY_NAME || 'TerraVik';
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation</title>
      <style>${emailStyles}</style>
    </head>
    <body>
      <div class="email-container">
        <!-- Header -->
        <div class="header">
          <div class="header-icon">✅</div>
          <h1>Order Confirmed!</h1>
          <p>Thank you for your purchase</p>
        </div>
        
        <!-- Content -->
        <div class="content">
          <p class="greeting">Dear <strong>${customer.name}</strong>,</p>
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 25px;">
            Your order has been successfully placed and confirmed. We're excited to get your products to you!
          </p>
          
          <!-- Order Details Card -->
          <div class="card">
            <h2>📦 Order Details</h2>
            <div class="detail-row">
              <span class="detail-label">Order ID</span>
              <span class="detail-value"><strong>${orderId}</strong></span>
            </div>
            ${paymentId ? `
            <div class="detail-row">
              <span class="detail-label">Payment ID</span>
              <span class="detail-value">${paymentId}</span>
            </div>
            ` : ''}
            <div class="detail-row">
              <span class="detail-label">Product</span>
              <span class="detail-value">${product.name}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Quantity</span>
              <span class="detail-value">${product.quantity}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Payment Method</span>
              <span class="detail-value">${shippingMethod === 'prepaid' ? 'Online Payment' : 'Cash on Delivery'}</span>
            </div>
          </div>
          
          <!-- Delivery Address Card -->
          <div class="card">
            <h2>📍 Delivery Address</h2>
            <p style="margin: 0; line-height: 1.8; color: #1f2937;">
              <strong>${customer.name}</strong><br>
              ${customer.address.line1}${customer.address.line2 ? '<br>' + customer.address.line2 : ''}<br>
              ${customer.address.city}, ${customer.address.state} - ${customer.address.pincode}<br>
              <strong>Phone:</strong> ${customer.phone}
            </p>
          </div>
          
          <!-- Total Section -->
          <div class="total-section">
            <div class="total-row">
              <span class="total-label">Total Amount</span>
              <span class="total-value">₹${total}</span>
            </div>
          </div>
          
          <!-- Delivery Info -->
          <div class="success-box">
            <p><strong>📅 Estimated Delivery:</strong> 5-7 business days</p>
            <p style="margin-top: 8px;">You'll receive tracking information via SMS and email once your order is shipped.</p>
          </div>
          
          <div class="divider"></div>
          
          <p style="color: #4b5563; line-height: 1.6; margin: 20px 0;">
            If you have any questions about your order, please don't hesitate to contact us.
          </p>
          
          <p style="color: #4b5563; margin-top: 30px;">
            Best regards,<br>
            <strong style="color: #5a9a3c;">The ${companyName} Team</strong>
          </p>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <p class="brand">${companyName}</p>
          <p>Thank you for choosing us!</p>
          <p>© 2024 ${companyName}. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const orderSuccessAdminTemplate = (data) => {
  const { orderId, customer, product, total, paymentId, shippingMethod, brandName } = data;
  const companyName = brandName || process.env.COMPANY_NAME || 'TerraVik';
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Order Notification</title>
      <style>${emailStyles.replace(/#5a9a3c/g, '#2c5f2d').replace(/#7cb342/g, '#1b5e20')}</style>
    </head>
    <body>
      <div class="email-container">
        <!-- Header -->
        <div class="header">
          <div class="header-icon">🔔</div>
          <h1>New Order Received</h1>
          <p>Action Required - ${companyName}</p>
        </div>
        
        <!-- Content -->
        <div class="content">
          <!-- Alert Box -->
          <div class="info-box">
            <p><strong>⚠️ Action Required:</strong> Process this order and arrange delivery within 24 hours.</p>
          </div>
          
          <!-- Customer Details Card -->
          <div class="card">
            <h2>👤 Customer Information</h2>
            <div class="detail-row">
              <span class="detail-label">Name</span>
              <span class="detail-value">${customer.name}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Email</span>
              <span class="detail-value"><a href="mailto:${customer.email}" style="color: #2c5f2d;">${customer.email}</a></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone</span>
              <span class="detail-value"><a href="tel:${customer.phone}" style="color: #2c5f2d;">${customer.phone}</a></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Address</span>
              <span class="detail-value" style="text-align: right; max-width: 60%;">
                ${customer.address.line1}${customer.address.line2 ? ', ' + customer.address.line2 : ''}, 
                ${customer.address.city}, ${customer.address.state} - ${customer.address.pincode}
              </span>
            </div>
          </div>
          
          <!-- Order Details Card -->
          <div class="card">
            <h2>📦 Order Information</h2>
            <div class="detail-row">
              <span class="detail-label">Brand</span>
              <span class="detail-value"><strong>${companyName}</strong></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Order ID</span>
              <span class="detail-value"><strong>${orderId}</strong></span>
            </div>
            ${paymentId ? `
            <div class="detail-row">
              <span class="detail-label">Payment ID</span>
              <span class="detail-value">${paymentId}</span>
            </div>
            ` : ''}
            <div class="detail-row">
              <span class="detail-label">Product</span>
              <span class="detail-value">${product.name}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Quantity</span>
              <span class="detail-value">${product.quantity}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Payment Method</span>
              <span class="detail-value">${shippingMethod === 'prepaid' ? 'Prepaid (Online)' : 'Cash on Delivery'}</span>
            </div>
          </div>
          
          <!-- Total Section -->
          <div class="total-section">
            <div class="total-row">
              <span class="total-label">Total Amount</span>
              <span class="total-value">₹${total}</span>
            </div>
          </div>
          
          <div class="divider"></div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            <strong>Next Steps:</strong><br>
            1. Verify payment status<br>
            2. Prepare the order for shipment<br>
            3. Contact customer if needed<br>
            4. Arrange delivery within 5-7 business days
          </p>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <p class="brand">Order Management System - ${companyName}</p>
          <p>© 2024 ${companyName}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const paymentFailedTemplate = (data) => {
  const { customer, product, total } = data;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Failed</title>
      <style>${emailStyles.replace(/#5a9a3c/g, '#dc2626').replace(/#7cb342/g, '#b91c1c')}</style>
    </head>
    <body>
      <div class="email-container">
        <!-- Header -->
        <div class="header">
          <div class="header-icon">❌</div>
          <h1>Payment Failed</h1>
          <p>Transaction could not be completed</p>
        </div>
        
        <!-- Content -->
        <div class="content">
          <p class="greeting">Dear <strong>${customer.name}</strong>,</p>
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 25px;">
            Unfortunately, your payment for <strong>${product.name}</strong> could not be processed.
          </p>
          
          <!-- Transaction Details Card -->
          <div class="card">
            <h2>💳 Transaction Details</h2>
            <div class="detail-row">
              <span class="detail-label">Product</span>
              <span class="detail-value">${product.name}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Amount</span>
              <span class="detail-value">₹${total}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Status</span>
              <span class="detail-value" style="color: #dc2626; font-weight: 700;">Failed</span>
            </div>
          </div>
          
          <!-- What to do next -->
          <div class="alert-box">
            <p><strong>What to do next?</strong></p>
            <ul style="margin: 10px 0 0 0; padding-left: 20px; line-height: 1.8;">
              <li>Check your payment details and try again</li>
              <li>Ensure sufficient balance in your account</li>
              <li>Contact your bank if the issue persists</li>
              <li>Try a different payment method</li>
            </ul>
          </div>
          
          <div class="divider"></div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            If you continue to face issues, please contact our support team:<br>
            <strong>Email:</strong> ${process.env.ADMIN_EMAIL}<br>
            <strong>Phone:</strong> ${process.env.COMPANY_PHONE || '9008383900'}
          </p>
          
          <p style="color: #4b5563; margin-top: 30px;">
            We're here to help!<br>
            <strong style="color: #dc2626;">The ${process.env.COMPANY_NAME || 'TerraVik'} Team</strong>
          </p>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <p class="brand">${process.env.COMPANY_NAME || 'TerraVik'}</p>
          <p>We're here to help!</p>
          <p>© 2024 ${process.env.COMPANY_NAME || 'TerraVik'}. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const inquiryUserTemplate = (data) => {
  const { name, productInterest, brandName } = data;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Inquiry Received</title>
      <style>${emailStyles}</style>
    </head>
    <body>
      <div class="email-container">
        <!-- Header -->
        <div class="header">
          <div class="header-icon">✅</div>
          <h1>Inquiry Received</h1>
          <p>We'll get back to you soon</p>
        </div>
        
        <!-- Content -->
        <div class="content">
          <p class="greeting">Dear <strong>${name}</strong>,</p>
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 25px;">
            Thank you for your interest in <strong>${productInterest}</strong>!
          </p>
          
          <!-- Confirmation Card -->
          <div class="card">
            <h2>📩 Your Inquiry</h2>
            <p style="margin: 0; color: #1f2937; line-height: 1.8;">
              We have received your inquiry and our team will contact you within <strong>24 hours</strong>.
            </p>
          </div>
          
          <!-- Contact Info -->
          <div class="success-box">
            <p><strong>📞 Need immediate assistance?</strong></p>
            <p style="margin-top: 8px;">
              <strong>Call us:</strong> ${process.env.COMPANY_PHONE || '9008383900'}<br>
              <strong>Email:</strong> ${process.env.ADMIN_EMAIL}
            </p>
          </div>
          
          <div class="divider"></div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            We look forward to serving you!
          </p>
          
          <p style="color: #4b5563; margin-top: 30px;">
            Best regards,<br>
            <strong style="color: #5a9a3c;">The ${brandName || process.env.COMPANY_NAME || 'TerraVik'} Team</strong>
          </p>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <p class="brand">${brandName || process.env.COMPANY_NAME || 'TerraVik'}</p>
          <p>Thank you for choosing us!</p>
          <p>© 2024 ${process.env.COMPANY_NAME || 'TerraVik'}. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const inquiryAdminTemplate = (data) => {
  const { name, email, phone, productInterest, message, address } = data;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Inquiry</title>
      <style>${emailStyles.replace(/#5a9a3c/g, '#2c5f2d').replace(/#7cb342/g, '#1b5e20')}</style>
    </head>
    <body>
      <div class="email-container">
        <!-- Header -->
        <div class="header">
          <div class="header-icon">📩</div>
          <h1>New Inquiry Received</h1>
          <p>Follow up required</p>
        </div>
        
        <!-- Content -->
        <div class="content">
          <!-- Alert Box -->
          <div class="info-box">
            <p><strong>⚠️ Action Required:</strong> Follow up with this inquiry within 24 hours.</p>
          </div>
          
          <!-- Contact Details Card -->
          <div class="card">
            <h2>👤 Contact Information</h2>
            <div class="detail-row">
              <span class="detail-label">Name</span>
              <span class="detail-value">${name}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Email</span>
              <span class="detail-value"><a href="mailto:${email}" style="color: #2c5f2d;">${email}</a></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone</span>
              <span class="detail-value"><a href="tel:${phone}" style="color: #2c5f2d;">${phone}</a></span>
            </div>
            ${address ? `
            <div class="detail-row">
              <span class="detail-label">Address</span>
              <span class="detail-value">${address}</span>
            </div>
            ` : ''}
          </div>
          
          <!-- Inquiry Details Card -->
          <div class="card">
            <h2>📝 Inquiry Details</h2>
            <div class="detail-row">
              <span class="detail-label">Product Interest</span>
              <span class="detail-value"><strong>${productInterest}</strong></span>
            </div>
            <div style="margin-top: 15px; padding: 15px; background: #ffffff; border-radius: 4px; border: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px 0; color: #6b7280; font-weight: 600; font-size: 14px;">Message:</p>
              <p style="margin: 0; color: #1f2937; line-height: 1.6;">${message}</p>
            </div>
          </div>
          
          <div class="divider"></div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            <strong>Next Steps:</strong><br>
            1. Review the inquiry details<br>
            2. Contact the customer within 24 hours<br>
            3. Provide product information and pricing<br>
            4. Follow up until inquiry is resolved
          </p>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <p class="brand">Inquiry Management System</p>
          <p>© 2024 ${process.env.COMPANY_NAME || 'TerraVik'}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = {
  generateOrderId,
  orderSuccessUserTemplate,
  orderSuccessAdminTemplate,
  paymentFailedTemplate,
  inquiryUserTemplate,
  inquiryAdminTemplate,
};
