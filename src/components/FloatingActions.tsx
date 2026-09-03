'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Youtube } from 'lucide-react';

const WHATSAPP_NUMBER = '919791699990';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello EC Kitchen Appliances, I would like to know more about your products.'
);
const PHONE_NUMBER = '+919791699990';
const YOUTUBE_URL =
  'https://www.youtube.com/channel/UC770Z5GvbxbUmWmgJR1yt2Q';

const actions = [
  {
    icon: Phone,
    label: 'Call Us',
    href: `tel:${PHONE_NUMBER}`,
    target: undefined as string | undefined,
    bg: 'bg-[#2C2C2C] hover:bg-[#3D3D3D]',
    shadowColor: 'shadow-[0_4px_14px_rgba(44,44,44,0.3)]',
    hoverGlow: 'hover:shadow-[0_6px_20px_rgba(44,44,44,0.4)]',
    ariaLabel: 'Call EC Kitchen Appliances at +91 9791699990',
  },
  {
    icon: MessageCircle,
    label: 'Chat on WhatsApp',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
    target: '_blank',
    bg: 'bg-[#25D366] hover:bg-[#20BD5A]',
    shadowColor: 'shadow-[0_4px_14px_rgba(37,211,102,0.3)]',
    hoverGlow: 'hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)]',
    ariaLabel: 'Chat with EC Kitchen Appliances on WhatsApp',
  },
  {
    icon: Youtube,
    label: 'Watch on YouTube',
    href: YOUTUBE_URL,
    target: '_blank',
    bg: 'bg-[#FF0000] hover:bg-[#E60000]',
    shadowColor: 'shadow-[0_4px_14px_rgba(255,0,0,0.25)]',
    hoverGlow: 'hover:shadow-[0_6px_20px_rgba(255,0,0,0.35)]',
    ariaLabel: 'Watch EC Kitchen Appliances on YouTube',
  },
];

export function FloatingActions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="fixed right-[14px] sm:right-[24px] bottom-[18px] sm:bottom-[28px] z-[9999] flex flex-col gap-3 sm:gap-4"
      role="complementary"
      aria-label="Quick contact actions"
    >
      {actions.map((action, index) => (
        <div key={action.label} className="relative flex items-center">
          {/* Tooltip — desktop only, hidden on mobile */}
          <span
            className={`
              hidden sm:block absolute right-[calc(100%+12px)] whitespace-nowrap
              px-3.5 py-2 rounded-lg
              bg-charcoal text-cream text-sm font-medium
              shadow-lg shadow-black/20
              pointer-events-none
              transition-all duration-200 ease-out
              origin-[100%_50%]
              ${
                hoveredIndex === index
                  ? 'opacity-100 translate-x-0 scale-100'
                  : 'opacity-0 -translate-x-2 scale-95'
              }
            `}
            aria-hidden="true"
          >
            {action.label}
            {/* Tooltip arrow */}
            <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-charcoal rotate-45 rounded-sm" />
          </span>

          {/* Button */}
          <a
            href={action.href}
            target={action.target}
            rel={action.target === '_blank' ? 'noopener noreferrer' : undefined}
            aria-label={action.ariaLabel}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
            className={`
              flex items-center justify-center
              w-[50px] h-[50px] sm:w-[56px] sm:h-[56px]
              rounded-full
              ${action.bg}
              ${action.shadowColor}
              ${action.hoverGlow}
              transition-all duration-250 ease-out
              hover:scale-[1.1]
              active:scale-[1.03]
              focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold
              backdrop-blur-sm
              border border-white/10
            `}
            style={{ transitionDuration: '250ms' }}
          >
            <action.icon
              className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] text-white drop-shadow-sm"
              aria-hidden="true"
              strokeWidth={1.8}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
