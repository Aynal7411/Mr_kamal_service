import { Helmet } from 'react-helmet-async';

const products = [
  { name: 'Cattle Health Kit', category: 'Cattle', description: 'Holistic support for cattle wellness and disease prevention.', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80' },
  { name: 'Poultry Booster', category: 'Poultry', description: 'Boosts immunity and supports healthy flock growth.', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80' },
  { name: 'Aqua Care Solution', category: 'Aqua', description: 'Improves water quality and fish disease resilience.', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80' },
  { name: 'Vaccine Support', category: 'Animal Vaccines', description: 'Professional guidance for vaccine handling and schedule planning.', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80' }
];

function ProductsPage({ lang }) {
  return (
    <>
      <Helmet>
        <title>Products | Md. Kamal Hossen</title>
        <meta name="description" content="Product portfolio for animal health solutions by Md. Kamal Hossen." />
      </Helmet>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Products</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">High-quality solutions for livestock and poultry</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">A curated portfolio of animal health products, technical support, and farmer-focused solutions.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
              <img src={product.image} alt={product.name} className="h-44 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">{product.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-3 text-slate-600">{product.description}</p>
                <a href="/contact" className="mt-5 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">Request details</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
