import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please complete all fields." });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus({ type: "error", msg: "Please enter a valid email address." });
      return;
    }

    // Simulate submit (replace with API call when available)
    setStatus({ type: "loading", msg: "Sending..." });
    setTimeout(() => {
      setStatus({ type: "success", msg: "Thanks — we'll get back to you shortly." });
      setForm({ name: "", email: "", message: "" });
    }, 900);
  }

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Aditya Digitals</h1>
          <p className="text-gray-700 mb-6">Have a project or question? Tell us about your goals and we’ll recommend the best path forward.</p>

          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <strong>Email:</strong> <a href="mailto:hello@adityadigitals.example" className="text-teal-600 hover:underline">hello@adityadigitals.example</a>
            </div>
            <div>
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-teal-600 hover:underline">+1 (234) 567-890</a>
            </div>
            <div>
              <strong>Address:</strong>
              <div className="text-gray-600">123 Digital Way, Suite 400, Cityville</div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500">Office hours: Mon–Fri 9:00–18:00</p>
          </div>
        </div>

        <form className="bg-white rounded-lg shadow p-6" onSubmit={handleSubmit} aria-label="Contact form">
          {status && (
            <div role="status" className={`mb-4 text-sm ${status.type === "error" ? "text-red-600" : status.type === "success" ? "text-teal-700" : "text-gray-700"}`}>
              {status.msg}
            </div>
          )}

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Name</span>
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300" required />
          </label>

          <label className="block mt-3">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300" required />
          </label>

          <label className="block mt-3">
            <span className="text-sm font-medium text-gray-700">Message</span>
            <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300" required />
          </label>

          <div className="mt-4 flex items-center gap-3">
            <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 disabled:opacity-60" disabled={status?.type === "loading"}>
              Send message
            </button>
            <a href="/services" className="text-sm text-teal-600">See services</a>
          </div>
        </form>
      </div>
    </section>
  );
}
