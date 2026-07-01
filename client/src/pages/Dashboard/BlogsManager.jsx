import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import api from '../../services/api';

function BlogsManager() {
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  const loadBlogs = async () => {
    const res = await api.get('/blogs');
    setBlogs(res.data);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const onSubmit = async (data) => {
    try {
      if (editingId) {
        await api.put(`/blogs/${editingId}`, data);
        Swal.fire('Updated', 'Blog updated successfully', 'success');
      } else {
        await api.post('/blogs', data);
        Swal.fire('Created', 'Blog created successfully', 'success');
      }
      reset();
      setEditingId(null);
      loadBlogs();
    } catch (error) {
      Swal.fire('Error', error.response?.data?.message || 'Failed to save blog', 'error');
    }
  };

  const startEdit = (blog) => {
    setEditingId(blog._id);
    setValue('title', blog.title);
    setValue('slug', blog.slug);
    setValue('excerpt', blog.excerpt);
    setValue('content', blog.content);
    setValue('category', blog.category);
    setValue('tags', blog.tags?.join(', ') || '');
    setValue('image', blog.image || '');
  };

  const removeBlog = async (id) => {
    const result = await Swal.fire({ title: 'Delete blog?', text: 'This action cannot be undone.', icon: 'warning', showCancelButton: true });
    if (!result.isConfirmed) return;
    await api.delete(`/blogs/${id}`);
    Swal.fire('Deleted', 'Blog removed', 'success');
    loadBlogs();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Dashboard</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Manage Blogs</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">{editingId ? 'Edit blog' : 'Add blog'}</h2>
          <div className="mt-6 space-y-4">
            <input {...register('title', { required: true })} placeholder="Blog title" className="w-full rounded-2xl border px-4 py-3" />
            <input {...register('slug', { required: true })} placeholder="Slug" className="w-full rounded-2xl border px-4 py-3" />
            <textarea {...register('excerpt', { required: true })} placeholder="Excerpt" rows="2" className="w-full rounded-2xl border px-4 py-3" />
            <textarea {...register('content', { required: true })} placeholder="Content" rows="5" className="w-full rounded-2xl border px-4 py-3" />
            <input {...register('category')} placeholder="Category" className="w-full rounded-2xl border px-4 py-3" />
            <input {...register('tags')} placeholder="Tags (comma separated)" className="w-full rounded-2xl border px-4 py-3" />
            <input {...register('image')} placeholder="Image URL" className="w-full rounded-2xl border px-4 py-3" />
            <button type="submit" className="rounded-full bg-primary px-6 py-3 font-semibold text-white">Save</button>
          </div>
        </form>
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{blog.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{blog.excerpt}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => startEdit(blog)} className="rounded-full bg-slate-100 px-3 py-2 text-sm">Edit</button>
                  <button onClick={() => removeBlog(blog._id)} className="rounded-full bg-red-100 px-3 py-2 text-sm text-red-700">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogsManager;
