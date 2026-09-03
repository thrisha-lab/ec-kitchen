'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase mb-4">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-near-black tracking-tight">Page Not Found</h1>
        <p className="text-warm-gray mt-4 text-base max-w-md mx-auto leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 inline-block"
          >
            Back to Home
          </Link>
          <Link
            href="/our-products"
            className="text-gold font-semibold hover:text-gold-dark transition-colors inline-block"
          >
            Browse Our Products
          </Link>
        </div>
      </div>
    </main>
  );
}
