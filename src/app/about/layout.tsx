import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About EC Kitchen Appliances | Kitchen Appliances Tamil Nadu',
  description:
    'Learn about EC Kitchen Appliances — thoughtfully designed portable kitchen solutions for modern everyday cooking across Tamil Nadu.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
