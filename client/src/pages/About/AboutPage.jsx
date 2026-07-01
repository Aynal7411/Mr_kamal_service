import { Helmet } from 'react-helmet-async';
import { FiAward, FiBookOpen, FiBriefcase, FiTarget } from 'react-icons/fi';

const qualifications = ['Diploma in Veterinary Science', 'Professional training in animal health products', 'Field experience in livestock extension'];
const skills = ['Product knowledge', 'Dealer support', 'Technical guidance', 'Farmer communication', 'Vaccination awareness'];
const achievements = ['Supported thousands of livestock farmers', 'Built long-term dealer relationships', 'Delivered technical training programs'];

function AboutPage({ lang }) {
  return (
    <>
      <Helmet>
        <title>About | Md. Kamal Hossen</title>
        <meta name="description" content="Biography and professional background of Md. Kamal Hossen, Medical Representative (Animal Health)." />
      </Helmet>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">About</p>
            <h1 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">Professional background and mission</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I am a dedicated medical representative in animal health, serving farmers, dealers, and veterinary stakeholders with reliable product knowledge, technical insight, and hands-on field support.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              My work focuses on improving livestock health through ethically guided education, preventive care awareness, and professional communication.
            </p>
            <a href="/contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg">Download Resume</a>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-teal-100 p-3 text-primary"><FiBriefcase /></div>
              <div>
                <p className="text-sm font-semibold text-primary">Current Role</p>
                <p className="text-lg font-semibold text-slate-900">Healthcare Formulations Ltd.</p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="flex gap-3"><FiBookOpen className="mt-1 text-primary" /> <span>Educational background in animal health and field extension.</span></div>
              <div className="flex gap-3"><FiAward className="mt-1 text-primary" /> <span>Recognized for strong field performance and service excellence.</span></div>
              <div className="flex gap-3"><FiTarget className="mt-1 text-primary" /> <span>Committed to continuous learning and farmer-focused support.</span></div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Educational Qualification</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              {qualifications.map((item) => <li key={item} className="rounded-xl bg-slate-50 px-3 py-2">{item}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Professional Skills</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              {skills.map((item) => <li key={item} className="rounded-xl bg-slate-50 px-3 py-2">{item}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Achievements</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              {achievements.map((item) => <li key={item} className="rounded-xl bg-slate-50 px-3 py-2">{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
