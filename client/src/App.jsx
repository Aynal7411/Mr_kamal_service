import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ProductsPage from './pages/Products/ProductsPage';
import ServicesPage from './pages/Services/ServicesPage';
import GalleryPage from './pages/Gallery/GalleryPage';
import BlogPage from './pages/Blog/BlogPage';
import ContactPage from './pages/Contact/ContactPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ProductsManager from './pages/Dashboard/ProductsManager';
import BlogsManager from './pages/Dashboard/BlogsManager';
import GalleryManager from './pages/Dashboard/GalleryManager';
import MessagesManager from './pages/Dashboard/MessagesManager';
import ProfileManager from './pages/Dashboard/ProfileManager';
import LoginPage from './pages/Dashboard/LoginPage';
import NotFound from './pages/NotFound';
import WhatsAppButton from './components/common/WhatsAppButton';

const translations = {
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navProducts: 'Products',
    navServices: 'Services',
    navGallery: 'Gallery',
    navBlog: 'Blog',
    navContact: 'Contact',
    ctaPrimary: 'Explore Services',
    ctaSecondary: 'Contact Now'
  },
  bn: {
    navHome: 'নীড়',
    navAbout: 'পরিচিতি',
    navProducts: 'পণ্য',
    navServices: 'সেবা',
    navGallery: 'গ্যালারি',
    navBlog: 'ব্লগ',
    navContact: 'যোগাযোগ',
    ctaPrimary: 'সেবা দেখুন',
    ctaSecondary: 'এখনই যোগাযোগ করুন'
  }
};

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
}

function App() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background text-darkText transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
      <Navbar
        theme={theme}
        setTheme={setTheme}
        lang={lang}
        setLang={setLang}
        t={t}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/about" element={<AboutPage lang={lang} />} />
          <Route path="/products" element={<ProductsPage lang={lang} />} />
          <Route path="/services" element={<ServicesPage lang={lang} />} />
          <Route path="/gallery" element={<GalleryPage lang={lang} />} />
          <Route path="/blog" element={<BlogPage lang={lang} />} />
          <Route path="/contact" element={<ContactPage lang={lang} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/dashboard/products" element={<ProtectedRoute><ProductsManager /></ProtectedRoute>} />
          <Route path="/dashboard/blogs" element={<ProtectedRoute><BlogsManager /></ProtectedRoute>} />
          <Route path="/dashboard/gallery" element={<ProtectedRoute><GalleryManager /></ProtectedRoute>} />
          <Route path="/dashboard/messages" element={<ProtectedRoute><MessagesManager /></ProtectedRoute>} />
          <Route path="/dashboard/profile" element={<ProtectedRoute><ProfileManager /></ProtectedRoute>} />
          <Route path="*" element={<NotFound lang={lang} />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
