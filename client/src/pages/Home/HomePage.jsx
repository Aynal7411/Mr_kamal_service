import { motion } from 'framer-motion';
import { FiActivity, FiAward, FiBookOpen, FiChevronRight, FiHeart, FiMapPin, FiPhone } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';

const stats = [
  { label: 'Years of Service', value: '10+' },
  { label: 'Farmer Support', value: '5000+' },
  { label: 'Successful Visits', value: '1200+' }
];

const services = [
  { title: 'Farm Visit', description: 'Hands-on technical support and field guidance for livestock health and productivity.' },
  { title: 'Dealer Support', description: 'Building strong dealer relationships and product availability across regions.' },
  { title: 'Vaccination Awareness', description: 'Educating farmers on preventive care and vaccination schedules.' }
];

const products = [
  { name: 'Cattle Health Kit', category: 'Cattle', description: 'A complete support package for cattle wellness and disease prevention.' },
  { name: 'Poultry Booster', category: 'Poultry', description: 'Improves flock resilience and supports healthy growth.' },
  { name: 'Aqua Care Solution', category: 'Aqua', description: 'Water quality and fish health support for aquaculture growth.' }
];

function HomePage({ lang }) {
  return (
    <>
      <Helmet>
        <title>Md. Kamal Hossen | Animal Health Portfolio</title>
        <meta name="description" content="Professional portfolio website for Md. Kamal Hossen, a medical representative specializing in animal health and livestock support." />
      </Helmet>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-sm">
              <FiHeart className="mr-2" />
              {lang === 'en' ? 'Helping farmers improve livestock health' : 'কৃষকদের গবাদি পশুর স্বাস্থ্য উন্নয়নে সহায়তা'}
            </div>
            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {lang === 'en' ? 'Md. Kamal Hossen' : 'মো. কামাল হোসেন'}
            </h1>
            <p className="mt-4 text-xl font-semibold text-primary">
              {lang === 'en' ? 'Medical Representative (Animal Health)' : 'মেডিকেল রেপ্রেজেন্টেটিভ (অ্যানিমাল হেলথ)'}
            </p>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              {lang === 'en'
                ? 'Committed to premium animal healthcare solutions, field support, and trusted service for livestock farmers and dealers.'
                : 'গুণগত পশু স্বাস্থ্যসেবা সমাধান, মাঠপর্যায়ের সহায়তা ও নির্ভরযোগ্য সেবা প্রদানে অঙ্গীকারবদ্ধ।'}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/services" className="rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105">{lang === 'en' ? 'Explore Services' : 'সেবা দেখুন'}</a>
              <a href="/contact" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition hover:scale-105">{lang === 'en' ? 'Contact Now' : 'এখনই যোগাযোগ করুন'}</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2"><FiMapPin /> Chandpur, Bangladesh</span>
              <span className="flex items-center gap-2"><FiPhone /> +880 1712-345678</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-primary to-secondary p-8 text-white">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl font-bold">KH</div>
              <h2 className="text-2xl font-bold">Healthcare Formulations Ltd.</h2>
              <p className="mt-2 text-teal-50">Animal Health Division</p>
              <p className="mt-6 text-sm leading-7 text-teal-50">
                “Helping farmers improve livestock health through quality animal healthcare solutions, technical support, and professional service.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-black text-primary">{stat.value}</p>
              <p className="mt-2 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Featured Services</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Professional support for every stage</h2>
          </div>
          <a href="/services" className="hidden items-center gap-2 text-sm font-semibold text-primary sm:flex">View all <FiChevronRight /></a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-primary"><FiActivity /></div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Featured Products</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Trusted solutions for livestock health</h2>
          </div>
          <a href="/products" className="hidden items-center gap-2 text-sm font-semibold text-primary sm:flex">Browse products <FiChevronRight /></a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">{item.category}</p>
              <h3 className="mt-3 text-xl font-semibold">{item.name}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">Contact</p>
              <h2 className="mt-2 text-3xl font-bold">Ready to collaborate or discuss solutions?</h2>
              <p className="mt-3 max-w-2xl text-slate-300">I am happy to support dealers, veterinarians, and farmers with tailored animal health guidance.</p>
            </div>
            <a href="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105">Get in touch</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
