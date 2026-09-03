'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  ChefHat,
  CircleDot,
  Wheat,
  Settings2,
  HandMetal,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* 1. PAGE HERO */}
      <section className="bg-white pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-warm-gray">
                <li>
                  <Link href="/" className="hover:text-near-black transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-near-black font-medium">About</li>
              </ol>
            </nav>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="section-label">ABOUT US</p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-near-black mt-3">
              About EC Kitchen Appliances
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-warm-gray text-lg sm:text-xl mt-4 max-w-3xl">
              Thoughtfully designed kitchen solutions for modern everyday cooking.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-near-black">
                Who We Are
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="mt-6 space-y-4 text-warm-gray leading-relaxed">
                <p>
                  EC Kitchen Appliances is a brand dedicated to making everyday Indian cooking
                  simpler, faster, and more enjoyable. We understand that traditional South Indian
                  cuisine — from soft chapatis to fresh sevai and perfectly steamed idiyappam —
                  requires skill, time, and the right tools. Our purpose is to provide those tools
                  without complicating the cooking experience.
                </p>
                <p>
                  We focus exclusively on portable kitchen appliances that serve real, everyday
                  cooking needs. Rather than offering an overwhelming range of products, we have
                  chosen to do a few things well — machines that help households prepare chapati,
                  sevai, and idiyappam with consistency and ease.
                </p>
                <p>
                  Every product we offer is designed with the home cook in mind. Whether you are
                  preparing breakfast for your family or cooking for a gathering, our appliances are
                  built to be reliable companions in your kitchen.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-near-black">
                Our Approach
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="mt-6 space-y-4 text-warm-gray leading-relaxed">
                <p>
                  We believe that the best kitchen appliances are the ones that disappear into your
                  routine — they do their job quietly, reliably, and without demanding attention. Our
                  approach begins with understanding how real people cook in real kitchens across
                  Tamil Nadu. We study the process, identify where time and effort are spent, and
                  design appliances that reduce friction without compromising the quality of the food.
                </p>
                <p>
                  Practicality guides every decision we make. From the materials we choose to the
                  size and weight of each machine, we prioritise what matters most to home cooks:
                  convenience, durability, and results you can count on every single day. Our
                  appliances are not built for occasional use — they are designed to become a
                  dependable part of your daily cooking routine.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. DESIGNED FOR INDIAN COOKING */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="section-label">WHAT WE MAKE</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-near-black mt-3">
              Designed for Indian Cooking
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="mt-4 text-warm-gray leading-relaxed max-w-3xl">
              Our product range is built around the foods that are central to South Indian
              households. Each machine is tailored to handle a specific preparation with care
              and consistency.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ScrollReveal delay={200} direction="up">
              <div className="bg-white border border-warm-gray-pale rounded-lg shadow-premium p-6 hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4 h-48 w-full relative rounded-lg overflow-hidden">
                  <Image
                    src="/assets/products/portable-chapati-machine.png"
                    alt="Portable Chapati Machine"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-50">
                    <Wheat className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-near-black">Chapati</h3>
                </div>
                <p className="text-warm-gray text-sm leading-relaxed">
                  Our portable chapati machine helps you prepare soft, even chapatis with minimal
                  effort. Designed for consistency, it takes the guesswork out of rolling and
                  pressing dough.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300} direction="up">
              <div className="bg-white border border-warm-gray-pale rounded-lg shadow-premium p-6 hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4 h-48 w-full relative rounded-lg overflow-hidden">
                  <Image
                    src="/assets/products/portable-sevai-machine.png"
                    alt="Portable Sevai Machine"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-50">
                    <CircleDot className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-near-black">Sevai</h3>
                </div>
                <p className="text-warm-gray text-sm leading-relaxed">
                  Make fresh, homemade sevai effortlessly. Our sevai machine extrudes smooth, even
                  noodles that hold their texture — perfect for traditional sevai preparations.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400} direction="up">
              <div className="bg-white border border-warm-gray-pale rounded-lg shadow-premium p-6 hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4 h-48 w-full relative rounded-lg overflow-hidden">
                  <Image
                    src="/assets/products/portable-idiyappam-machine.png"
                    alt="Portable Idiyappam Machine"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-50">
                    <ChefHat className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-near-black">Idiyappam</h3>
                </div>
                <p className="text-warm-gray text-sm leading-relaxed">
                  Prepare perfectly shaped idiyappam at home with our dedicated machine. Gentle
                  extrusion ensures the right texture every time, just like traditional
                  hand-pressed idiyappam.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. OUR PRODUCT PHILOSOPHY */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="section-label">OUR PHILOSOPHY</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-near-black mt-3">
              Our Product Philosophy
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <ScrollReveal delay={150} direction="left">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-50">
                  <Settings2 className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-near-black">Convenience</h3>
                  <p className="mt-1 text-warm-gray leading-relaxed">
                    Our appliances are designed to simplify your cooking process, saving you time
                    and effort on everyday meals.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={250} direction="right">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-50">
                  <HandMetal className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-near-black">Practicality</h3>
                  <p className="mt-1 text-warm-gray leading-relaxed">
                    Every feature serves a real purpose. We avoid unnecessary complexity and focus
                    on what truly helps in the kitchen.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={350} direction="left">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-50">
                  <Lightbulb className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-near-black">Usability</h3>
                  <p className="mt-1 text-warm-gray leading-relaxed">
                    Intuitive controls and straightforward operation mean anyone in the household
                    can use our appliances with confidence.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={450} direction="right">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-50">
                  <ChefHat className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-near-black">Thoughtful Design</h3>
                  <p className="mt-1 text-warm-gray leading-relaxed">
                    From compact size to easy cleaning, every detail is considered so our machines
                    fit naturally into your daily routine.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. SERVING TAMIL NADU */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-near-black">
                Serving Modern Kitchens Across Tamil Nadu
              </h2>
              <div className="mt-6 space-y-4 text-warm-gray leading-relaxed">
                <p>
                  EC Kitchen Appliances serves customers across Tamil Nadu, bringing portable and
                  reliable kitchen solutions directly to your doorstep. From the bustling kitchens
                  of Chennai and Coimbatore to homes in Madurai, Salem, Trichy, and Erode, our
                  appliances are helping families cook with greater ease every day.
                </p>
                <p>
                </p>
                <p>
                  We understand the diverse cooking traditions within Tamil Nadu and design our
                  products to fit seamlessly into any kitchen, whether you are in a metropolitan
                  apartment or a family home in a smaller town. Wherever you are in the state, our
                  team is here to help you find the right appliance for your cooking needs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative h-80 lg:h-96 w-full overflow-hidden rounded-xl shadow-premium hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/assets/gallery/gallery-kitchen-lifestyle.png"
                  alt="Kitchen lifestyle in Tamil Nadu"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-near-black">
              Discover Our Products
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-4 text-warm-gray max-w-xl mx-auto">
              Explore our range of portable kitchen appliances designed for everyday Indian
              cooking.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link
              href="/our-products"
              className="mt-8 inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-gold-dark transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              View Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
