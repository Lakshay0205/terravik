import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { ProductDetails } from '../pages/ProductDetails';
import { Checkout } from '../pages/Checkout';
import { OrderSuccess } from '../pages/OrderSuccess';
import { PaymentFailed } from '../pages/PaymentFailed';
import { Research } from '../pages/Research';
import { Contact } from '../pages/Contact';
import { About } from '../pages/About';
import { Journey } from '../pages/Journey';
import { Blog } from '../pages/Blog';
import { FAQs } from '../pages/FAQs';
import { Guides } from '../pages/Guides';
import { Support } from '../pages/Support';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { TermsOfService } from '../pages/TermsOfService';
import { CookiePolicy } from '../pages/CookiePolicy';

const BrandLayout = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

export const AppRoutes = () => {
  return (
    <Routes>
      {/* TerraVik Routes */}
      <Route path="/terravik" element={<BrandLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-success" element={<OrderSuccess />} />
        <Route path="payment-failed" element={<PaymentFailed />} />
        <Route path="journey" element={<Journey />} />
        <Route path="research" element={<Research />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="guides" element={<Guides />} />
        <Route path="support" element={<Support />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
      </Route>

      {/* Hawai Agro Routes */}
      <Route path="/hawai-agro" element={<BrandLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-success" element={<OrderSuccess />} />
        <Route path="payment-failed" element={<PaymentFailed />} />
        <Route path="research" element={<Research />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="guides" element={<Guides />} />
        <Route path="support" element={<Support />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
      </Route>

      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/terravik" replace />} />
      <Route path="*" element={<Navigate to="/terravik" replace />} />
    </Routes>
  );
};
