'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/our-products', label: 'Our Products' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-header shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : 'bg-white border-b border-gray-100'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={closeMobileMenu} className="shrink-0">
            <Image
              src="/assets/brand/ec-kitchen-logo.png"
              alt="EC Kitchen Appliances"
              width={44}
              height={44}
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 xl:px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200',
                    isActive
                      ? 'text-gold bg-gold-50'
                      : 'text-gray-500 hover:text-near-black hover:bg-gray-50'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-[13px] font-semibold rounded-lg bg-gold text-white hover:bg-gold-dark transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 top-16 sm:top-20 bg-white z-40 transition-all duration-300',
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col p-6 gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={cn(
                  'px-4 py-3.5 text-base font-medium rounded-lg transition-colors',
                  isActive
                    ? 'text-gold bg-gold-50'
                    : 'text-gray-500 hover:text-near-black hover:bg-gray-50'
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block w-full text-center px-5 py-3.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
