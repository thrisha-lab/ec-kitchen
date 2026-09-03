'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Wrench, Sparkles, ChefHat, Truck } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function HomePage() {
  return (
    <>
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="bg-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <ScrollReveal direction="up">
              <span className="section-label">Portable Kitchen Appliances</span>
              <h1 className="text-near-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mt-4">
                Portable Kitchen Appliances for Modern Indian Cooking
              </h1>
              <p className="text-gold text-lg sm:text-xl font-medium mt-4">
                Traditional Cooking. Modern Convenience.
              </p>
              <p className="text-warm-gray text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
                Discover thoughtfully designed portable kitchen appliances created
                to make everyday preparation of chapati, sevai and idiyappam more
                convenient.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
                <Link
                  href="/our-products"
                  className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-dark transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  Explore Our Products
                </Link>
                <Link
                  href="/contact"
                  className="border border-warm-gray-pale text-near-black font-semibold px-6 py-3 rounded-lg hover:bg-cream transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </ScrollReveal>

            {/* Right: Hero Image */}
            <ScrollReveal direction="right" delay={200}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-premium">
                <Image
                  src="/assets/hero/hero-kitchen.png"
                  alt="Modern kitchen setup with EC Kitchen Appliances"
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== 2. TAMIL NADU SEO SECTION ==================== */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-near-black text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Portable Kitchen Appliances for Homes Across Tamil Nadu
            </h2>
            <div className="mt-8 space-y-6 text-warm-gray leading-relaxed">
              <p>
                EC Kitchen Appliances is a Tamil Nadu-based brand focused on
                providing practical portable kitchen appliances for Indian
                kitchens. From Chennai to Coimbatore, Madurai to Salem, and
                Tiruchirappalli to smaller towns across the state, homes rely on
                traditional recipes that deserve smarter, more convenient
                preparation methods.
              </p>
              <p>
                Our range of portable kitchen appliances in Tamil Nadu is
                designed to simplify the daily routine of making chapati, sevai,
                and idiyappam — staples in South Indian households. Whether you
                run a busy family kitchen or are looking for kitchen appliance
                solutions in Tamil Nadu that save time without compromising on
                the authenticity of traditional cooking, our products are built
                with everyday use in mind.
              </p>
              <p>
                As more households look for kitchen appliances for modern homes,
                the demand for compact, portable kitchen appliances for Indian
                kitchens continues to grow. EC Kitchen Appliances addresses this
                need with products that are easy to set up, simple to operate,
                and designed to fit into any kitchen space.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== 3. BRAND INTRODUCTION ==================== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-near-black text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Designed Around the Way You Cook
            </h2>
            <div className="mt-8 space-y-6 text-warm-gray leading-relaxed">
              <p>
                At EC Kitchen Appliances, every product starts with a simple
                question: how can we make this part of cooking a little easier?
                Our appliances are built around the reality of everyday Indian
                kitchens — where time is limited, recipes are cherished, and
                convenience matters.
              </p>
              <p>
                Each portable appliance in our range is designed to be
                straightforward and practical. We focus on doing a few things
                well, ensuring that our products deliver reliable performance for
                the dishes that matter most to you and your family.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== 4. PRODUCT SHOWCASE ==================== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Our Collection</span>
              <h2 className="text-near-black text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-3">
                Our Kitchen Appliances
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 100}>
                <div className="bg-white border border-warm-gray-pale rounded-lg shadow-premium overflow-hidden hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-square relative">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <span className="text-gold text-sm font-semibold">
                      {product.number}
                    </span>
                    <h3 className="text-near-black text-lg font-semibold mt-1">
                      {product.name}
                    </h3>
                    <p className="text-warm-gray text-sm mt-2 flex-1 leading-relaxed">
                      {product.description}
                    </p>
                    <Link
                      href={product.link}
                      className="text-gold text-sm font-semibold hover:text-gold-dark flex items-center gap-1.5 mt-4 transition-colors"
                    >
                      Explore Product
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. WHY EC KITCHEN ==================== */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Why EC Kitchen</span>
              <h2 className="text-near-black text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-3">
                Made for Everyday Kitchen Convenience
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {valueProps.map((prop, index) => {
              const IconComponent = prop.icon;
              return (
                <ScrollReveal key={prop.title} delay={index * 100}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mx-auto">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-near-black font-semibold mt-4">
                      {prop.title}
                    </h3>
                    <p className="text-warm-gray text-sm mt-2 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== 6. VISUAL PRODUCT SECTION ==================== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-premium">
                <Image
                  src="/assets/products/portable-sevai-idiyappam-machine.png"
                  alt="EC Kitchen Appliances portable sevai and idiyappam machine"
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div>
                <h2 className="text-near-black text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  Traditional Favourites. A More Convenient Approach.
                </h2>
                <div className="mt-6 space-y-4 text-warm-gray leading-relaxed">
                  <p>
                    Chapati, sevai, and idiyappam are more than just everyday
                    dishes — they are part of the rhythm of home cooking in South
                    India. But preparing them from scratch can be time-consuming,
                    especially for busy households.
                  </p>
                  <p>
                    Our portable appliances are designed to streamline each step
                    of the process, helping you prepare these traditional
                    favourites with less effort. The 2-in-1 sevai and idiyappam
                    machine combines two essential functions in one compact unit,
                    making it a practical choice for kitchens where space and
                    versatility matter.
                  </p>
                  <p>
                    Whether it is soft chapatis for breakfast, fresh sevai for
                    lunch, or steaming idiyappam for dinner, our appliances are
                    built to support the meals your family loves.
                  </p>
                </div>
                <Link
                  href="/our-products"
                  className="inline-flex items-center gap-2 text-gold font-semibold mt-8 hover:text-gold-dark transition-colors"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== 7. GALLERY PREVIEW ==================== */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Gallery</span>
              <h2 className="text-near-black text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-3">
                See EC Kitchen Appliances
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-14">
            {galleryImages.map((image, index) => (
              <ScrollReveal key={image.src} delay={index * 80}>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <ScrollReveal delay={200}>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-dark transition-colors"
              >
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== 8. FINAL CTA ==================== */}
      <section className="bg-white py-24 lg:py-28 border-t border-b border-warm-gray-pale">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-near-black text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Bring More Convenience to Your Kitchen
            </h2>
            <p className="text-warm-gray mt-4 text-base sm:text-lg leading-relaxed">
              Explore the EC Kitchen Appliances range or speak with our team to
              find the right solution for your kitchen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="/our-products"
                className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-dark transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="border border-warm-gray-pale text-near-black font-semibold px-6 py-3 rounded-lg hover:bg-cream transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== 9. FAQ SECTION ==================== */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">FAQ</span>
              <h2 className="text-near-black text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-3">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-14">
            <ScrollReveal delay={100}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-near-black font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-warm-gray leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

/* ==================== DATA ==================== */

const products = [
  {
    id: 1,
    number: '01',
    name: 'Portable Chapati Machine',
    image: '/assets/products/portable-chapati-machine.png',
    alt: 'EC Kitchen Appliances portable chapati machine',
    description:
      'A portable appliance designed to simplify chapati preparation at home, making it easier to prepare fresh chapatis daily.',
    link: '/our-products#chapati',
  },
  {
    id: 2,
    number: '02',
    name: 'Portable Sevai Machine',
    image: '/assets/products/portable-sevai-machine.png',
    alt: 'EC Kitchen Appliances portable sevai machine',
    description:
      'Prepare fresh sevai at home with this portable machine, designed for convenient and consistent sevai preparation.',
    link: '/our-products#sevai',
  },
  {
    id: 3,
    number: '03',
    name: 'Portable Idiyappam Machine',
    image: '/assets/products/portable-idiyappam-machine.png',
    alt: 'EC Kitchen Appliances portable idiyappam machine',
    description:
      'A compact machine for making fresh idiyappam at home, streamlining the preparation of this traditional favourite.',
    link: '/our-products#idiyappam',
  },
  {
    id: 4,
    number: '04',
    name: 'Portable Sevai & Idiyappam Machine — 2 in 1',
    image: '/assets/products/portable-sevai-idiyappam-machine.png',
    alt:
      'EC Kitchen Appliances portable 2-in-1 sevai and idiyappam machine',
    description:
      'A versatile 2-in-1 appliance that prepares both sevai and idiyappam, offering convenience and value in one compact unit.',
    link: '/our-products#sevai-idiyappam',
  },
];

const valueProps = [
  {
    icon: Wrench,
    title: 'Practical Design',
    description:
      'Solutions designed around everyday kitchen use, with a focus on reliability and simplicity.',
  },
  {
    icon: Sparkles,
    title: 'Everyday Convenience',
    description:
      'Helping simplify traditional food preparation so you can spend more time enjoying meals.',
  },
  {
    icon: ChefHat,
    title: 'Traditional Cooking Made Simpler',
    description:
      'Focused on familiar Indian favourites, our appliances are built to support the dishes your family loves.',
  },
  {
    icon: Truck,
    title: 'Portable Kitchen Solutions',
    description:
      'Compact appliances designed for portability, easy to use in any kitchen setup.',
  },
];

const galleryImages = [
  {
    src: '/assets/gallery/gallery-chapati-prep.png',
    alt: 'Chapati preparation with EC Kitchen Appliances',
  },
  {
    src: '/assets/gallery/gallery-sevai-food.png',
    alt: 'Fresh sevai prepared with EC Kitchen Appliances',
  },
  {
    src: '/assets/gallery/gallery-idiyappam-food.png',
    alt: 'Idiyappam dish prepared with EC Kitchen Appliances',
  },
  {
    src: '/assets/gallery/gallery-detail-parts.png',
    alt: 'Detailed view of EC Kitchen Appliances parts and components',
  },
  {
    src: '/assets/gallery/gallery-kitchen-lifestyle.png',
    alt: 'EC Kitchen Appliances in a modern kitchen setting',
  },
  {
    src: '/assets/gallery/gallery-chapati-stack.png',
    alt: 'Stack of freshly made chapatis',
  },
];

const faqs = [
  {
    question: 'What products does EC Kitchen Appliances offer?',
    answer:
      'EC Kitchen Appliances offers a range of portable machines for preparing traditional Indian dishes, including a portable chapati machine, portable sevai machine, portable idiyappam machine, and a 2-in-1 sevai and idiyappam machine.',
  },
  {
    question: 'What is a portable chapati machine?',
    answer:
      'A portable chapati machine is a compact kitchen appliance designed to assist with the preparation of chapatis at home. It helps streamline the chapati-making process, making it more convenient for everyday cooking.',
  },
  {
    question: 'What is a portable sevai machine?',
    answer:
      'A portable sevai machine is a kitchen appliance used to prepare fresh sevai (string hoppers) at home. It is designed to be compact and easy to use, allowing you to make sevai conveniently.',
  },
  {
    question: 'What is a portable idiyappam machine?',
    answer:
      'A portable idiyappam machine is a compact appliance used to prepare idiyappam (steamed rice noodles) at home. It simplifies the process of extruding and shaping idiyappam for steaming.',
  },
  {
    question: 'What is the 2-in-1 sevai and idiyappam machine?',
    answer:
      'The 2-in-1 sevai and idiyappam machine is a versatile portable appliance that can prepare both sevai and idiyappam. It combines the functionality of two separate machines into one compact unit.',
  },
  {
    question: 'How can I enquire about EC Kitchen Appliances products?',
    answer:
      'You can reach out to the EC Kitchen Appliances team through the contact page on this website. Our team will be happy to assist you with product information and any enquiries you may have.',
  },
  {
    question: 'Does EC Kitchen Appliances serve customers across Tamil Nadu?',
    answer:
      'Yes, EC Kitchen Appliances serves customers across Tamil Nadu. Our portable kitchen appliances are available to homes throughout the state, including major cities and districts.',
  },
];
