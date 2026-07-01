import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import api from '../../services/api';

function ProfileManager() {
  const [profile, setProfile] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    const loadProfile = async () => {
      const res = await api.get('/profile');
      setProfile(res.data);
      if (res.data) {
        setValue('fullName', res.data.fullName);
        setValue('designation', res.data.designation);
        setValue('company', res.data.company);
        setValue('location', res.data.location);
        setValue('mission', res.data.mission);
        setValue('phone', res.data.phone);
        setValue('email', res.data.email);
        setValue('whatsapp', res.data.whatsapp);
        setValue('facebook', res.data.facebook);
        setValue('resumeUrl', res.data.resumeUrl);
      }
    };
    loadProfile();
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      await api.put('/profile', data);
      Swal.fire('Saved', 'Profile updated successfully', 'success');
    } catch (error) {
      Swal.fire('Error', error.response?.data?.message || 'Failed to save profile', 'error');
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Dashboard</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Manage Profile</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <input {...register('fullName')} placeholder="Full name" className="w-full rounded-2xl border px-4 py-3" />
          <input {...register('designation')} placeholder="Designation" className="w-full rounded-2xl border px-4 py-3" />
          <input {...register('company')} placeholder="Company" className="w-full rounded-2xl border px-4 py-3" />
          <input {...register('location')} placeholder="Location" className="w-full rounded-2xl border px-4 py-3" />
          <input {...register('phone')} placeholder="Phone" className="w-full rounded-2xl border px-4 py-3" />
          <input {...register('email')} placeholder="Email" className="w-full rounded-2xl border px-4 py-3" />
          <input {...register('whatsapp')} placeholder="WhatsApp" className="w-full rounded-2xl border px-4 py-3" />
          <input {...register('facebook')} placeholder="Facebook" className="w-full rounded-2xl border px-4 py-3" />
          <input {...register('resumeUrl')} placeholder="Resume URL" className="w-full rounded-2xl border px-4 py-3 md:col-span-2" />
          <textarea {...register('mission')} placeholder="Mission" rows="4" className="w-full rounded-2xl border px-4 py-3 md:col-span-2" />
        </div>
        <button type="submit" className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-white">Save profile</button>
      </form>
    </div>
  );
}

export default ProfileManager;
