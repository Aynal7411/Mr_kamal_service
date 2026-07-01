import { Helmet } from 'react-helmet-async';

const posts = [
  { title: 'How vaccination improves herd productivity', excerpt: 'A practical guide to prevention and livestock care.', category: 'Health' },
  { title: 'Product handling best practices for dealers', excerpt: 'Simple steps to improve service quality and trust.', category: 'Training' },
  { title: 'Field support strategies for modern livestock farms', excerpt: 'How regular visits improve outcomes and communication.', category: 'Field Support' }
];

function BlogPage({ lang }) {
  return (
    <>
      <Helmet>
        <title>Blog | Md. Kamal Hossen</title>
        <meta name="description" content="Insights and articles about animal health, farmer support, and professional field care." />
      </Helmet>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Blog</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">Insights for better animal health practices</h1>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">{post.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-4 text-slate-600">{post.excerpt}</p>
              <a href="/contact" className="mt-5 inline-flex text-sm font-semibold text-primary">Read more</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default BlogPage;
