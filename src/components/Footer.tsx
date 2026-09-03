import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Youtube } from 'lucide-react';

const productLinks = [
  { href: '/our-products#chapati', label: 'Portable Chapati Machine' },
  { href: '/our-products#sevai', label: 'Portable Sevai Machine' },
  { href: '/our-products#idiyappam', label: 'Portable Idiyappam Machine' },
  { href: '/our-products#sevai-idiyappam', label: 'Portable Sevai & Idiyappam Machine' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/our-products', label: 'Our Products' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 text-near-black" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <Image
                src="/assets/brand/ec-kitchen-logo.png"
                alt="EC Kitchen Appliances Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
            </Link>
            <p className="text-warm-gray text-sm leading-relaxed max-w-xs">
              Thoughtfully designed portable kitchen appliances for convenient everyday traditional cooking across Tamil Nadu.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-near-black mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-gray hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-near-black mb-4">
              Products
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-gray hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-near-black mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919791699990"
                  className="inline-flex items-center gap-2.5 text-warm-gray hover:text-gold text-sm transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+91 9791699990</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:easykitchen@gmail.com"
                  className="inline-flex items-center gap-2.5 text-warm-gray hover:text-gold text-sm transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>easykitchen@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC770Z5GvbxbUmWmgJR1yt2Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-warm-gray hover:text-gold text-sm transition-colors duration-200"
                >
                  <Youtube className="w-4 h-4 shrink-0" />
                  <span>YouTube Channel</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-warm-gray-light text-xs">
            &copy; 2026 EC Kitchen Appliances. All Rights Reserved.
          </p>
          <p className="text-warm-gray-light/60 text-xs">
            Portable Kitchen Appliances for Modern Indian Cooking
          </p>
        </div>
      </div>
    </footer>
  );
}
