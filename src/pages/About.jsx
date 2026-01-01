export default function About() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Aditya Digitals</h1>
        <p className="text-lg text-gray-700">
          We partner with ambitious businesses to design and build digital products that convert.
          Our work combines thoughtful strategy, modern design, and measurable marketing to deliver
          sustained growth.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-sm text-center">
          <h3 className="font-semibold">Strategy-first</h3>
          <p className="text-sm text-gray-600 mt-2">We start with goals, user research, and a clear roadmap.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm text-center">
          <h3 className="font-semibold">Transparent Reporting</h3>
          <p className="text-sm text-gray-600 mt-2">Weekly reports, clear KPIs, and data you can act on.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm text-center">
          <h3 className="font-semibold">ROI-driven</h3>
          <p className="text-sm text-gray-600 mt-2">We prioritize solutions that improve revenue, leads, or retention.</p>
        </div>
      </div>

      <div className="mt-12 bg-teal-50 rounded-lg p-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-teal-700 font-semibold">Trusted partner for growing brands</p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">120+</div>
              <div className="text-sm text-gray-600">Projects delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-gray-600">Client satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">3x</div>
              <div className="text-sm text-gray-600">Avg. traffic growth</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a href="/contact" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-md shadow hover:bg-teal-700">Work with us</a>
      </div>
    </section>
  );
}
