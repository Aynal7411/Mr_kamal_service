import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import api from '../../services/api';

function GalleryManager() {
  const [gallery, setGallery] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const loadGallery = async () => {
    const res = await api.get('/gallery');
    setGallery(res.data);
  };

  useEffect(() => {
    loadGallery();
  }, []);

  const onSubmit = async (data) => {
    try {
      await api.post('/gallery', data);
      Swal.fire('Created', 'Gallery item created successfully', 'success');
      reset();
      loadGallery();
    } catch (error) {
      Swal.fire('Error', error.response?.data?.message || 'Failed to save gallery item', 'error');
    }
  };

  const removeItem = async (id) => {
    const result = await Swal.fire({ title: 'Delete gallery item?', icon: 'warning', showCancelButton: true });
    if (!result.isConfirmed) return;
    await api.delete(`/gallery/${id}`);
    Swal.fire('Deleted', 'Gallery item removed', 'success');
    loadGallery();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Dashboard</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Manage Gallery</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Add gallery item</h2>
          <div className="mt-6 space-y-4">
            <input {...register('title', { required: true })} placeholder="Title" className="w-full rounded-2xl border px-4 py-3" />
            <input {...register('image', { required: true })} placeholder="Image URL" className="w-full rounded-2xl border px-4 py-3" />
            <input {...register('category')} placeholder="Category" className="w-full rounded-2xl border px-4 py-3" />
            <button type="submit" className="rounded-full bg-primary px-6 py-3 font-semibold text-white">Save</button>
          </div>
        </form>
        <div className="space-y-4">
          {gallery.map((item) => (
            <div key={item._id} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.category}</p>
                </div>
                <button onClick={() => removeItem(item._id)} className="rounded-full bg-red-100 px-3 py-2 text-sm text-red-700">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryManager;
