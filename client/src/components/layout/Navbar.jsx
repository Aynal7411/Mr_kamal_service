import { Link } from 'react-router-dom';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useState } from 'react';

const links = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'products', href: '/products' },
  { key: 'services', href: '/services' },
  { key: 'gallery', href: '/gallery' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' }
];

function Navbar({ theme, setTheme, lang, setLang, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-semibold text-white shadow-lg">
            KH
          </div>
          <div>
            <p className="text-sm font-semibold text-primary">Md. Kamal Hossen</p>
            <p className="text-xs text-grayText">Animal Health</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link key={link.key} to={link.href} className="text-sm font-medium text-slate-700 transition hover:text-primary dark:text-slate-200">
              {t[`nav${link.key.charAt(0).toUpperCase() + link.key.slice(1)}`] || link.key}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
            className="rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-600 dark:text-slate-200"
          >
            {lang === 'en' ? 'BN' : 'EN'}
          </button>
          <button
            type="button"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="rounded-full border border-slate-300 p-2 text-slate-700 dark:border-slate-600 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-300 p-2 text-slate-700 lg:hidden dark:border-slate-600 dark:text-slate-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden dark:border-slate-700 dark:bg-slate-900">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-primary dark:text-slate-200"
                onClick={() => setMobileOpen(false)}
              >
                {t[`nav${link.key.charAt(0).toUpperCase() + link.key.slice(1)}`] || link.key}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
