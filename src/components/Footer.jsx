export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-200" role="contentinfo">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-4">
          <img src="/sitelogo.png" alt="Aditya Digitals logo" className="w-12 h-12 md:w-14 md:h-14 rounded-md" />
          <div>
            <p className="font-semibold">Aditya Digitals</p>
            <p className="text-sm text-gray-400 max-w-xs">We build responsive websites and digital products to help businesses grow.</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">Sitemap</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">Contact</h4>
          <address className="not-italic text-sm text-gray-400 space-y-1">
            <div>Email: <a href="mailto:hello@adityadigitals.example" className="hover:text-white">hello@adityadigitals.example</a></div>
            <div>Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></div>
            <div className="mt-2 flex gap-3">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white" rel="noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.12 9.12 0 0 1-2.88 1.1A4.52 4.52 0 0 0 12 4.5c0 .36.04.71.12 1.05A12.84 12.84 0 0 1 1.67 2.15a4.5 4.5 0 0 0 1.4 6.02A4.38 4.38 0 0 1 .8 7v.06a4.5 4.5 0 0 0 3.62 4.42 4.5 4.5 0 0 1-2.04.08 4.5 4.5 0 0 0 4.2 3.13A9.06 9.06 0 0 1 1 19.54 12.8 12.8 0 0 0 7 21c8.3 0 12.85-6.88 12.85-12.84v-.58A9.22 9.22 0 0 0 23 3z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white" rel="noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.84v2.16h.05c.54-1 1.86-2.16 3.83-2.16 4.1 0 4.86 2.7 4.86 6.21V24h-4v-7.03c0-1.67-.03-3.83-2.33-3.83-2.33 0-2.68 1.81-2.68 3.68V24h-4z"/></svg>
              </a>
            </div>
          </address>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-4">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-500">© {year} Aditya Digitals. All rights reserved.</div>
      </div>
    </footer>
  );
}
