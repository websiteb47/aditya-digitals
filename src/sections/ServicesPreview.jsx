export default function ServicesPreview() {
  const services = [
    "SEO Optimization",
    "Social Media Marketing",
    "Google Ads Management",
    "Website Design & UX"
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div key={i} className="p-6 border rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">{service}</h3>
            <p className="text-gray-600">Detailed explanation about service.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
