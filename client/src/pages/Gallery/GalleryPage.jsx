import { Helmet } from 'react-helmet-async';

const images = [
  { title: 'Farm Visit', src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80' },
  { title: 'Dealer Meeting', src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80' },
  { title: 'Training Program', src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80' },
  { title: 'Product Campaign', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80' }
];

function GalleryPage({ lang }) {
  return (
    <>
      <Helmet>
        <title>Gallery | Md. Kamal Hossen</title>
        <meta name="description" content="Gallery of farm visits, trainings, and professional events by Md. Kamal Hossen." />
      </Helmet>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Gallery</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">Moments from the field and beyond</h1>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {images.map((image) => (
            <div key={image.title} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
              <img src={image.src} alt={image.title} className="h-64 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default GalleryPage;
