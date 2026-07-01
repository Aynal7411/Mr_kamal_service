import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">404</p>
      <h1 className="mt-3 text-4xl font-black text-slate-900">Page not found</h1>
      <p className="mt-4 max-w-xl text-lg text-slate-600">The page you are looking for does not exist or may have been moved.</p>
      <Link to="/" className="mt-8 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg">Back to home</Link>
    </div>
  );
}

export default NotFound;
