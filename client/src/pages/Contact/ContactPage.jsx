import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

function ContactPage({ lang }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      icon: 'success',
      title: lang === 'en' ? 'Message sent successfully' : 'বার্তা সফলভাবে পাঠানো হয়েছে',
      text: lang === 'en' ? 'Thank you for reaching out. I will get back to you soon.' : 'যোগাযোগের জন্য ধন্যবাদ। আমি শীঘ্রই আপনার সঙ্গে যোগাযোগ করব।'
    });
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact | Md. Kamal Hossen</title>
        <meta name="description" content="Contact Md. Kamal Hossen for animal health consultation, product inquiries, and support." />
      </Helmet>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-primary to-secondary p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-100">Contact</p>
            <h1 className="mt-3 text-4xl font-black sm:text-5xl">Let’s connect</h1>
            <p className="mt-4 text-lg text-teal-50">I am available for professional inquiries, product discussions, and field support coordination.</p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3"><FiPhone /> +880 1712-345678</div>
              <div className="flex items-center gap-3"><FiMail /> kamal@example.com</div>
              <div className="flex items-center gap-3"><FiMapPin /> Chandpur, Bangladesh</div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-slate-900">Send a message</h2>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <input {...register('name', { required: true })} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-primary" />
                {errors.name && <p className="mt-2 text-sm text-red-500">Name is required</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-primary" />
                {errors.email && <p className="mt-2 text-sm text-red-500">Valid email is required</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea {...register('message', { required: true })} rows="4" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 focus:border-primary" />
                {errors.message && <p className="mt-2 text-sm text-red-500">Message is required</p>}
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg">
                <FiSend /> Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
