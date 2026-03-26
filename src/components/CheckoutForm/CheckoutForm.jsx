import { indianStates } from '../../utils/indianStates';
import './CheckoutForm.css';

export const CheckoutForm = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="checkout-form">
      <div className="form-section">
        <h3 className="section-title">Contact Information</h3>
        
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            maxLength="10"
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title">Delivery Address</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? 'error' : ''}
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address Line 1 *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="House number, street name"
            className={errors.address ? 'error' : ''}
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="apartment">Apartment / Suite (Optional)</label>
          <input
            type="text"
            id="apartment"
            name="apartment"
            value={formData.apartment}
            onChange={handleChange}
            placeholder="Apartment, suite, unit, etc."
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={errors.city ? 'error' : ''}
            />
            {errors.city && <span className="error-message">{errors.city}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="state">State *</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={errors.state ? 'error' : ''}
            >
              <option value="">Select State</option>
              {indianStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            {errors.state && <span className="error-message">{errors.state}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="pincode">Pincode *</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="6-digit pincode"
            maxLength="6"
            className={errors.pincode ? 'error' : ''}
          />
          {errors.pincode && <span className="error-message">{errors.pincode}</span>}
        </div>
      </div>
    </div>
  );
};
