'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Phone,
  MessageCircle,
  Mail,
  Youtube,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  product: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  product?: string;
  message?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Full name is required.';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[6-9]\d{9}$/.test(data.phone.trim())) {
    errors.phone = 'Please enter a valid 10-digit Indian phone number.';
  }

  if (!data.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.product) {
    errors.product = 'Please select a product.';
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  }

  return errors;
}

const productOptions = [
  'Portable Chapati Machine',
  'Portable Sevai Machine',
  'Portable Idiyappam Machine',
  'Portable Sevai & Idiyappam Machine (2 in 1)',
];

const faqs = [
  {
    question: 'How can I contact EC Kitchen Appliances?',
    answer:
      'You can reach us by phone at +91 9791699990, send us a WhatsApp message on the same number, or email us at easykitchen@gmail.com. You can also use the enquiry form on this page.',
  },
  {
    question: 'Which areas in Tamil Nadu do you serve?',
    answer:
      'We serve customers across Tamil Nadu, including Chennai, Coimbatore, Madurai, Salem, Trichy, Erode, Tirunelveli, and other districts. Contact us with your location and we will do our best to assist you.',
  },
  {
    question: 'How do I know which product is right for me?',
    answer:
      'If you primarily make chapatis, the Portable Chapati Machine is ideal. For sevai preparations, choose the Portable Sevai Machine. For idiyappam, the Portable Idiyappam Machine is the best fit. If you enjoy both sevai and idiyappam, our 2-in-1 Portable Sevai & Idiyappam Machine offers both functions in one appliance.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-warm-gray-pale last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-near-black font-medium pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-warm-gray transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-warm-gray text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleProductChange(value: string) {
    setFormData((prev) => ({ ...prev, product: value }));
    if (errors.product) {
      setErrors((prev) => ({ ...prev, product: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', email: '', product: '', message: '' });
      } else {
        setErrors({ message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setErrors({ message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen">
      {/* 1. PAGE HERO */}
      <section className="bg-white pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-warm-gray">
                <li>
                  <Link href="/" className="hover:text-near-black transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-near-black font-medium">Contact</li>
              </ol>
            </nav>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="section-label">CONTACT US</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-near-black">
              Get in Touch with EC Kitchen Appliances
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-warm-gray text-lg sm:text-xl mt-4 max-w-3xl">
              Have a question about our products? Send us an enquiry and our team will get back to
              you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* LEFT: ENQUIRY FORM */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-near-black">
                  Send an Enquiry
                </h2>
              </ScrollReveal>

              {isSuccess ? (
                <ScrollReveal delay={100}>
                  <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-8 text-center">
                    <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" />
                    <h3 className="mt-4 text-lg font-semibold text-near-black">
                      Enquiry Sent Successfully
                    </h3>
                    <p className="mt-2 text-warm-gray">
                      Thank you for your enquiry. We will get back to you soon.
                    </p>
                    <Button
                      onClick={() => setIsSuccess(false)}
                      variant="outline"
                      className="mt-6"
                    >
                      Send Another Enquiry
                    </Button>
                  </div>
                </ScrollReveal>
              ) : (
                <ScrollReveal delay={100}>
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-near-black">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-near-black">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        aria-invalid={!!errors.phone}
                        className={errors.phone ? 'border-destructive' : ''}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-near-black">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm">{errors.email}</p>
                      )}
                    </div>

                    {/* Product Interested In */}
                    <div className="space-y-2">
                      <Label htmlFor="product" className="text-near-black">Product Interested In</Label>
                      <Select value={formData.product} onValueChange={handleProductChange}>
                        <SelectTrigger
                          id="product"
                          className={`w-full ${errors.product ? 'border-destructive' : ''}`}
                          aria-invalid={!!errors.product}
                        >
                          <SelectValue placeholder="Select a product" />
                        </SelectTrigger>
                        <SelectContent>
                          {productOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.product && (
                        <p className="text-destructive text-sm">{errors.product}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-near-black">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements or questions..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        aria-invalid={!!errors.message}
                        className={errors.message ? 'border-destructive' : ''}
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm">{errors.message}</p>
                      )}
                    </div>

                    {/* General error */}
                    {errors.message && !formData.message && (
                      <div className="rounded-md bg-red-50 p-3 text-destructive text-sm">
                        {errors.message}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gold text-white font-semibold px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-gold-dark transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </button>
                  </form>
                </ScrollReveal>
              )}
            </div>

            {/* RIGHT: CONTACT INFORMATION */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-near-black">
                  Contact EC Kitchen Appliances in Tamil Nadu
                </h2>
                <div className="mt-8 space-y-0">
                  {/* Phone */}
                  <div className="flex items-start gap-3 border-b border-warm-gray-pale pb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-50">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-warm-gray">Phone</p>
                      <a
                        href="tel:+919791699990"
                        className="text-near-black font-medium hover:text-gold transition-colors"
                      >
                        +91 9791699990
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3 border-b border-warm-gray-pale py-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-50">
                      <MessageCircle className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-warm-gray">WhatsApp</p>
                      <a
                        href="https://wa.me/919791699990"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-near-black font-medium hover:text-gold transition-colors"
                      >
                        +91 9791699990
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 border-b border-warm-gray-pale py-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-50">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-warm-gray">Email</p>
                      <a
                        href="mailto:easykitchen@gmail.com"
                        className="text-near-black font-medium hover:text-gold transition-colors"
                      >
                        easykitchen@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* YouTube */}
                  <div className="flex items-start gap-3 py-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-50">
                      <Youtube className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-warm-gray">YouTube</p>
                      <a
                        href="https://www.youtube.com/channel/UC770Z5GvbxbUmWmgJR1yt2Q"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-near-black font-medium hover:text-gold transition-colors"
                      >
                        EC Kitchen Appliances
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-near-black">
                Frequently Asked Questions
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="mt-8">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
