import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact EC Kitchen Appliances | Kitchen Appliances Tamil Nadu',
  description:
    'Get in touch with EC Kitchen Appliances. Enquire about portable chapati, sevai and idiyappam machines for your kitchen in Tamil Nadu.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
