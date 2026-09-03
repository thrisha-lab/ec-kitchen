import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portable Chapati, Sevai & Idiyappam Machines | EC Kitchen',
  description:
    'Explore the EC Kitchen Appliances collection — portable chapati machines, sevai machines, idiyappam machines, and 2-in-1 sevai idiyappam machines for modern Indian cooking.',
};

export default function OurProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
