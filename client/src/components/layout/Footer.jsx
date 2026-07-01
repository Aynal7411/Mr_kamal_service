import { Link } from 'react-router-dom';

function Footer({ lang }) {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-4 py-10 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Md. Kamal Hossen</p>
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            {lang === 'en'
              ? 'Committed to quality animal healthcare solutions, farmer support, and professional service in Bangladesh.'
              : 'বাংলাদেশে গুণগত পশু স্বাস্থ্যসেবা সমাধান, কৃষক সমর্থন এবং পেশাদার সেবা প্রদানে অঙ্গীকারবদ্ধ।'}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link to="/about" className="transition hover:text-white">About</Link>
          <Link to="/products" className="transition hover:text-white">Products</Link>
          <Link to="/contact" className="transition hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
