import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EC Kitchen Appliances Gallery | Portable Kitchen Appliances',
  description:
    'Browse the EC Kitchen Appliances gallery — explore our portable kitchen machines, product details, and kitchen lifestyle photography.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
