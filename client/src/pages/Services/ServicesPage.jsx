import { Helmet } from 'react-helmet-async';
import { FiActivity, FiBookOpen, FiLayers, FiShield, FiUsers } from 'react-icons/fi';

const services = [
  { title: 'Farm Visit', description: 'On-site visits for technical support and livestock health assessment.', benefits: ['Product advice', 'Disease prevention', 'Field observations'] },
  { title: 'Dealer Support', description: 'Strengthening dealer performance with product guidance and market support.', benefits: ['Territory support', 'Training', 'Relationship growth'] },
  { title: 'Technical Guidance', description: 'Professional technical consulting for safe and effective product use.', benefits: ['Expert handling', 'Usage guidance', 'Best practices'] },
  { title: 'Farmer Training', description: 'Capacity building programs for better animal care and productivity.', benefits: ['Workshops', 'Awareness', 'Improved management'] },
  { title: 'Vaccination Awareness', description: 'Educational support for vaccination timing and preventive care.', benefits: ['Timely schedules', 'Preventive care', 'Awareness campaigns'] }
];

function ServicesPage({ lang }) {
  return (
    <>
      <Helmet>
        <title>Services | Md. Kamal Hossen</title>
        <meta name="description" content="Professional services offered by Md. Kamal Hossen in animal health and livestock support." />
      </Helmet>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Services</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">Reliable services for farmers, dealers, and partners</h1>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-primary"><FiActivity /></div>
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-4 text-slate-600">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {service.benefits.map((benefit) => <li key={benefit} className="flex items-center gap-2"><FiShield /> {benefit}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
