import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import api from '../../services/api';

function ProductsManager() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  const loadProducts = async () => {
    const res = await api.get('/products');
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const onSubmit = async (data) => {
    try {
      if (editingId) {
        await api.put(`/products/${editingId}`, data);
        Swal.fire('Updated', 'Product updated successfully', 'success');
      } else {
        await api.post('/products', data);
        Swal.fire('Created', 'Product created successfully', 'success');
      }
      reset();
      setEditingId(null);
      loadProducts();
    } catch (error) {
      Swal.fire('Error', error.response?.data?.message || 'Failed to save product', 'error');
    }
  };

  const startEdit = (product) => {
    setEditingId(product._id);
    setValue('name', product.name);
    setValue('category', product.category);
    setValue('description', product.description);
    setValue('image', product.image || '');
    setValue('details', product.details || '');
    setValue('catalogueUrl', product.catalogueUrl || '');
  };

  const removeProduct = async (id) => {
    const result = await Swal.fire({ title: 'Delete product?', text: 'This action cannot be undone.', icon: 'warning', showCancelButton: true });
    if (!result.isConfirmed) return;
    await api.delete(`/products/${id}`);
    Swal.fire('Deleted', 'Product removed', 'success');
    loadProducts();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Dashboard</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Manage Products</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">{editingId ? 'Edit product' : 'Add product'}</h2>
          <div className="mt-6 space-y-4">
            <input {...register('name', { required: true })} placeholder="Product name" className="w-full rounded-2xl border px-4 py-3" />
            <input {...register('category', { required: true })} placeholder="Category" className="w-full rounded-2xl border px-4 py-3" />
            <textarea {...register('description', { required: true })} placeholder="Short description" rows="3" className="w-full rounded-2xl border px-4 py-3" />
            <input {...register('image')} placeholder="Image URL" className="w-full rounded-2xl border px-4 py-3" />
            <textarea {...register('details')} placeholder="Detailed description" rows="3" className="w-full rounded-2xl border px-4 py-3" />
            <input {...register('catalogueUrl')} placeholder="Catalogue PDF URL" className="w-full rounded-2xl border px-4 py-3" />
            <button type="submit" className="rounded-full bg-primary px-6 py-3 font-semibold text-white">Save</button>
          </div>
        </form>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product._id} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => startEdit(product)} className="rounded-full bg-slate-100 px-3 py-2 text-sm">Edit</button>
                  <button onClick={() => removeProduct(product._id)} className="rounded-full bg-red-100 px-3 py-2 text-sm text-red-700">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsManager;
