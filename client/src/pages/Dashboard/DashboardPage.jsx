import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import api from '../../services/api';

function DashboardPage() {
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [messages, setMessages] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsRes, blogsRes, galleryRes, messagesRes, profileRes] = await Promise.all([
          api.get('/products'),
          api.get('/blogs'),
          api.get('/gallery'),
          api.get('/messages'),
          api.get('/profile')
        ]);
        setProducts(productsRes.data);
        setBlogs(blogsRes.data);
        setGallery(galleryRes.data);
        setMessages(messagesRes.data);
        setProfile(profileRes.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="mx-auto max-w-7xl px-4 py-20 text-center">Loading dashboard…</div>;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | Md. Kamal Hossen</title>
      </Helmet>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Admin Dashboard</p>
            <h1 className="mt-2 text-4xl font-black text-slate-900">Management overview</h1>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm">
            <p className="font-semibold text-slate-900">Profile status</p>
            <p className="text-slate-600">{profile ? 'Configured' : 'Not configured yet'}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Products</p>
            <p className="mt-2 text-3xl font-black text-primary">{products.length}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Blogs</p>
            <p className="mt-2 text-3xl font-black text-primary">{blogs.length}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Gallery</p>
            <p className="mt-2 text-3xl font-black text-primary">{gallery.length}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Messages</p>
            <p className="mt-2 text-3xl font-black text-primary">{messages.length}</p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Quick actions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a href="/dashboard/products" className="rounded-2xl bg-slate-100 p-5 font-semibold text-slate-800">Manage Products</a>
            <a href="/dashboard/blogs" className="rounded-2xl bg-slate-100 p-5 font-semibold text-slate-800">Manage Blogs</a>
            <a href="/dashboard/gallery" className="rounded-2xl bg-slate-100 p-5 font-semibold text-slate-800">Manage Gallery</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashboardPage;
