import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Website Design",
      subtitle: "Responsive, conversion-focused websites built for performance.",
      bullets: ["Custom UI/UX", "CMS & headless options", "Performance & accessibility"],
      href: "/services#website",
    },
    {
      title: "Search Engine Optimization (SEO)",
      subtitle: "Technical SEO, content strategy, and local search optimization.",
      bullets: ["Technical audits", "Content & keyword strategy", "Local & enterprise SEO"],
      href: "/services#seo",
    },
    {
      title: "Paid Media & Ads",
      subtitle: "ROI-driven Google and social campaigns with ongoing optimization.",
      bullets: ["Campaign setup", "Conversion tracking", "Weekly optimization"],
      href: "/services#ads",
    },
    {
      title: "Social Media",
      subtitle: "Strategy, creative, and community management to build brand equity.",
      bullets: ["Content calendars", "Creative production", "Community engagement"],
      href: "/services#social",
    },
    {
      title: "Analytics & CRO",
      subtitle: "Data-driven testing and optimization to improve conversion rates.",
      bullets: ["A/B testing", "Funnel analysis", "Optimization roadmap"],
      href: "/services#analytics",
    },
  ];

  return (
    <section className="pt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600">We focus on measurable outcomes — leads, revenue, and retention. Pick the engagement model that suits you: project, retainer, or growth partnership.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} subtitle={s.subtitle} bullets={s.bullets} href={s.href} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/contact" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-md shadow hover:bg-teal-700">Get a proposal</a>
          <a href="/case-studies" className="inline-block ml-4 text-teal-600">See case studies</a>
        </div>
      </div>
    </section>
  );
}
