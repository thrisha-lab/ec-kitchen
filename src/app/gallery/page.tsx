'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const galleryItems = [
  {
    src: '/assets/products/ec-kitchen-machine-1.png',
    alt: 'EC Kitchen Appliances portable kitchen machine',
    category: 'Products',
    caption: 'EC Kitchen Machine — Model 1',
  },
  {
    src: '/assets/products/ec-kitchen-machine-2.png',
    alt: 'EC Kitchen Appliances industrial kitchen machine',
    category: 'Products',
    caption: 'EC Kitchen Machine — Model 2',
  },
  {
    src: '/assets/products/ec-kitchen-machine-3.png',
    alt: 'EC Kitchen Appliances magenta press machine',
    category: 'Products',
    caption: 'EC Kitchen Machine — Model 3',
  },
  {
    src: '/assets/products/ec-kitchen-machine-1.png',
    alt: 'EC Kitchen Appliances portable kitchen machine',
    category: 'Products',
    caption: 'EC Kitchen Machine — Featured',
  },
  {
    src: '/assets/products/ec-kitchen-machine-2.png',
    alt: 'EC Kitchen Appliances industrial kitchen machine',
    category: 'Kitchen',
    caption: 'Industrial Kitchen Machine',
  },
  {
    src: '/assets/products/ec-kitchen-machine-3.png',
    alt: 'EC Kitchen Appliances magenta press machine',
    category: 'Lifestyle',
    caption: 'Magenta Press Machine',
  },
  {
    src: '/assets/products/ec-kitchen-machine-1.png',
    alt: 'EC Kitchen Appliances portable kitchen machine',
    category: 'Lifestyle',
    caption: 'Portable Kitchen Machine',
  },
  {
    src: '/assets/products/ec-kitchen-machine-2.png',
    alt: 'EC Kitchen Appliances industrial kitchen machine',
    category: 'Details',
    caption: 'Appliance Details',
  },
  {
    src: '/assets/products/ec-kitchen-machine-3.png',
    alt: 'EC Kitchen Appliances magenta press machine',
    category: 'Lifestyle',
    caption: 'Modern Kitchen',
  },
  {
    src: '/assets/products/ec-kitchen-machine-1.png',
    alt: 'EC Kitchen Appliances portable kitchen machine',
    category: 'Kitchen',
    caption: 'Kitchen Essentials',
  },
  {
    src: '/assets/products/ec-kitchen-machine-2.png',
    alt: 'EC Kitchen Appliances industrial kitchen machine',
    category: 'Lifestyle',
    caption: 'Cooking at Home',
  },
  {
    src: '/assets/products/ec-kitchen-machine-3.png',
    alt: 'EC Kitchen Appliances magenta press machine',
    category: 'Lifestyle',
    caption: 'Magenta Edition',
  },
];

const categories = ['All', 'Products', 'Kitchen', 'Details', 'Lifestyle'] as const;
type Category = (typeof categories)[number];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
    );
  }, [filteredItems.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : null
    );
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  return (
    <main>
      {/* PAGE HERO */}
      <section className="bg-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <nav className="text-sm text-warm-gray mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-near-black transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-near-black font-medium">Gallery</li>
              </ol>
            </nav>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="section-label">GALLERY</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-near-black">
              EC Kitchen Appliances Gallery
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-warm-gray text-lg sm:text-xl mt-4">
              Explore our products and kitchen-focused visual collection.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="bg-white pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={250}>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-gold text-white'
                      : 'bg-white text-warm-gray hover:bg-gray-50 border border-warm-gray-pale'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="bg-white pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 space-y-4">
            {filteredItems.map((item, index) => (
              <ScrollReveal key={`${item.src}-${index}`} delay={index * 50} className="break-inside-avoid mb-4">
                <div
                  className="cursor-pointer group"
                  onClick={() => openLightbox(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(index);
                    }
                  }}
                  aria-label={`View ${item.caption}`}
                >
                  <div className="rounded-lg overflow-hidden bg-white border border-warm-gray-pale">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={600}
                      className="w-full h-auto aspect-square object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-sm text-warm-gray mt-2">{item.caption}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 text-white z-10 hover:text-white/70 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 text-white z-10 hover:text-white/70 transition-colors p-2"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white z-10 hover:text-white/70 transition-colors p-2"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center">
            <Image
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt}
              width={1200}
              height={800}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            />
            <p className="text-white/80 text-sm mt-4">
              {filteredItems[lightboxIndex].caption}
            </p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-near-black">
              Interested in Our Products?
            </h2>
            <div className="mt-8">
              <Link
                href="/our-products"
                className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-dark transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 inline-block"
              >
                Explore Our Products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
