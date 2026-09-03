'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function OurProductsPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="bg-white pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <nav className="text-sm text-warm-gray mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-near-black transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-near-black font-medium">Our Products</li>
              </ol>
            </nav>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="section-label">OUR PRODUCTS</p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-near-black mt-3">
              Portable Kitchen Appliances for Everyday Cooking
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-warm-gray text-lg sm:text-xl mt-4 max-w-3xl">
              Explore the EC Kitchen Appliances collection designed around some of India&apos;s
              favourite traditional foods.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PRODUCT 01: PORTABLE CHAPATI MACHINE */}
      <section id="chapati" className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <Image
                  src="/assets/products/ec-kitchen-machine-3.png"
                  alt="Portable chapati machine by EC Kitchen Appliances"
                  width={600}
                  height={600}
                  className="rounded-xl shadow-premium w-full aspect-square object-contain bg-white"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <div>
                <span className="section-label">01</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-near-black mt-3">
                  Portable Chapati Machine
                </h2>
                <p className="text-warm-gray mt-4 leading-relaxed">
                  The portable chapati machine from EC Kitchen Appliances is designed to make
                  daily roti preparation simpler and more efficient. Whether you&apos;re cooking for
                  your family or preparing meals in larger quantities, this chapati making machine
                  delivers consistent results every time.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                    <span className="text-warm-gray">Designed for convenient chapati preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                    <span className="text-warm-gray">Portable and easy to use in any kitchen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                    <span className="text-warm-gray">Helps simplify daily roti making</span>
                  </li>
                </ul>
                <p className="text-warm-gray mt-6 leading-relaxed">
                  Suitable for everyday home cooking across Tamil Nadu, from Chennai to Coimbatore
                  and beyond. Our portable chapati machine in Tamil Nadu is built to meet the needs
                  of households that value both tradition and convenience.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gold font-semibold mt-6 hover:text-gold-dark transition-colors"
                >
                  Enquire About This Product
                  <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PRODUCT 02: PORTABLE SEVAI MACHINE */}
      <section id="sevai" className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left" delay={150}>
              <div>
                <span className="section-label">02</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-near-black mt-3">
                  Portable Sevai Machine
                </h2>
                <p className="text-warm-gray mt-4 leading-relaxed">
                  The portable sevai machine from EC Kitchen Appliances brings the traditional art
                  of sevai making into the modern kitchen. This sevai making machine is engineered
                  for efficiency, making it easier than ever to prepare fresh sevai at home.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                    <span className="text-warm-gray">Makes sevai preparation more convenient</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                    <span className="text-warm-gray">Compact portable design for any kitchen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                    <span className="text-warm-gray">Ideal for traditional South Indian cooking</span>
                  </li>
                </ul>
                <p className="text-warm-gray mt-6 leading-relaxed">
                  Our portable sevai machine in Tamil Nadu has become a trusted choice for
                  families who want to enjoy fresh, homemade sevai without the labour-intensive
                  traditional process. Whether you&apos;re in Madurai, Salem, or Trichy, this sevai
                  machine fits perfectly into your kitchen.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gold font-semibold mt-6 hover:text-gold-dark transition-colors"
                >
                  Enquire About This Product
                  <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <Image
                  src="/assets/products/ec-kitchen-machine-3.png"
                  alt="Portable sevai machine by EC Kitchen Appliances"
                  width={600}
                  height={600}
                  className="rounded-xl shadow-premium w-full aspect-square object-contain bg-white"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PRODUCT 03: PORTABLE IDIYAPPAM MACHINE */}
      <section id="idiyappam" className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <Image
                  src="/assets/products/ec-kitchen-machine-3.png"
                  alt="Portable idiyappam machine by EC Kitchen Appliances"
                  width={600}
                  height={600}
                  className="rounded-xl shadow-premium w-full aspect-square object-contain bg-white"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <div>
                <span className="section-label">03</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-near-black mt-3">
                  Portable Idiyappam Machine
                </h2>
                <p className="text-warm-gray mt-4 leading-relaxed">
                  The portable idiyappam machine from EC Kitchen Appliances makes it easy to
                  prepare fresh, steamed idiyappam at home. This idiyappam making machine is
                  designed for the modern kitchen while honouring the traditional South Indian
                  cooking experience.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                    <span className="text-warm-gray">Convenient idiyappam preparation at home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                    <span className="text-warm-gray">Portable design for everyday use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                    <span className="text-warm-gray">Perfect for traditional South Indian kitchens</span>
                  </li>
                </ul>
                <p className="text-warm-gray mt-6 leading-relaxed">
                  Our portable idiyappam machine in Tamil Nadu is crafted for families who cherish
                  the taste of freshly made idiyappam. This idiyappam machine brings convenience to
                  your kitchen, whether you&apos;re in Chennai, Coimbatore, Erode, or anywhere else
                  across the state.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gold font-semibold mt-6 hover:text-gold-dark transition-colors"
                >
                  Enquire About This Product
                  <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PRODUCT 04: PORTABLE SEVAI & IDIYAPPAM MACHINE — 2 IN 1 */}
      <section id="sevai-idiyappam" className="bg-gold-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative">
                <Image
                  src="/assets/products/ec-kitchen-machine-2.png"
                  alt="Portable sevai and idiyappam 2 in 1 machine by EC Kitchen Appliances"
                  width={600}
                  height={600}
                  className="rounded-xl shadow-premium w-full aspect-square object-contain bg-white"
                />
              </div>
              <div>
                <span className="section-label">04 — FEATURED</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-near-black mt-3">
                  Portable Sevai &amp; Idiyappam Machine — 2 in 1
                </h2>
                <p className="text-gold text-xl sm:text-2xl font-medium mt-3">
                  Two Traditional Favourites. One Convenient Solution.
                </p>
                <p className="text-warm-gray mt-6 leading-relaxed">
                  The sevai and idiyappam machine from EC Kitchen Appliances combines two
                  essential kitchen tools into one compact unit. This 2 in 1 sevai idiyappam
                  machine is the perfect portable sevai and idiyappam machine for households that
                  love both traditional dishes.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                    <span className="text-warm-gray">Two appliances in one compact unit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                    <span className="text-warm-gray">
                      Prepare both sevai and idiyappam with a single machine
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                    <span className="text-warm-gray">
                      Space-saving portable design for modern kitchens
                    </span>
                  </li>
                </ul>
                <p className="text-warm-gray mt-6 leading-relaxed">
                  As a leading 2 in 1 kitchen appliance, this sevai idiyappam machine in Tamil Nadu
                  offers exceptional value for families across Chennai, Coimbatore, Madurai, and
                  beyond. It&apos;s the smartest way to enjoy two of South India&apos;s most beloved
                  dishes from the comfort of your home.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-dark transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  Enquire About This Product
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-near-black">
              Find the Right Kitchen Appliance for You
            </h2>
            <p className="text-warm-gray mt-4 text-lg">
              Have questions about our products? We&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-dark transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                Explore Products
              </button>
              <Link
                href="/contact"
                className="text-gold font-semibold hover:text-gold-dark transition-colors px-8 py-3"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
