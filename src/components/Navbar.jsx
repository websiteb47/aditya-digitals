import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./ui/navigation-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];
  const services = [
    { to: "/services#website", title: "Website Design", desc: "Responsive, conversion-focused sites" },
    { to: "/services#seo", title: "SEO", desc: "Technical & content strategy" },
    { to: "/services#ads", title: "Paid Media", desc: "Google & social campaigns" },
  ];
  


  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 rounded shadow">
        Skip to content
      </a>

      <nav className="w-full bg-white shadow fixed z-50" aria-label="Main navigation">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" aria-label="Aditya Digitals home" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Aditya Digitals logo" className="w-10 h-10 rounded" />
            <h1 className="text-lg font-semibold">Aditya Digitals</h1>
          </Link>

          <div className="hidden md:flex md:items-center gap-6">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent className="md:min-w-[220px] md:max-w-md z-50">
                    <div className="flex flex-col gap-3 p-4">
                      {services.map((s) => (
                        <NavigationMenuLink key={s.to} asChild>
                          <Link to={s.to} className="block rounded-md p-3 hover:bg-gray-50 min-w-[200px]">
                            <div className="text-sm font-medium text-gray-900">{s.title}</div>
                            <div className="text-xs text-gray-500">{s.desc}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {items.map((item) => (
                  <NavigationMenuItem key={item.to}>
                    <NavigationMenuLink asChild>
                      <Link to={item.to} className="px-2 py-2 rounded hover:bg-gray-50">{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/contact" className="inline-flex items-center bg-teal-500 text-white px-4 py-2 rounded-md font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300">Contact</Link>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
              aria-controls="mobile-navigation"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" stroke="#0ea5a4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="#0ea5a4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-navigation" className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-2">
              {items.map((item) => (
                <Link key={item.to} to={item.to} className="block px-2 py-2 rounded hover:bg-gray-50">{item.label}</Link>
              ))}

              <details className="group">
                <summary className="flex items-center justify-between px-2 py-2 rounded cursor-pointer hover:bg-gray-50">Services
                  <svg className="ml-2" width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 8l4 4 4-4" stroke="#0ea5a4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </summary>
                <div className="mt-2 pl-4">
                  {services.map((s) => (
                    <Link key={s.to} to={s.to} className="block px-2 py-2 rounded hover:bg-gray-50">{s.title}</Link>
                  ))}
                </div>
              </details>

              <Link to="/contact" className="block mt-2 bg-teal-500 text-white px-4 py-2 rounded-md text-center">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
