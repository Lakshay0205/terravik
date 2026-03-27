import { BrowserRouter } from 'react-router-dom';
import { BrandProvider } from './context/BrandContext';
import { AppRoutes } from './routes/AppRoutes';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BrandProvider>
        <div className="min-h-screen bg-gray-50">
          <AppRoutes />
        </div>
      </BrandProvider>
    </BrowserRouter>
  );
}

export default App;
