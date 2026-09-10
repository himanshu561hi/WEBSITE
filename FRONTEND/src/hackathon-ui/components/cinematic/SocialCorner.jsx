import React, { memo } from "react";
import { Instagram, Linkedin } from "lucide-react";

/**
 * WhatsApp SVG icon
 */
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.777.82 2.795.82h.005c3.183 0 5.771-2.587 5.772-5.766 0-1.543-.601-2.993-1.693-4.086s-2.544-1.72-4.082-1.72zm6.915 1.155c1.42 1.42 2.203 3.308 2.203 5.313 0 4.143-3.372 7.516-7.517 7.516-1.258 0-2.493-.316-3.593-.914l-4.039 1.059 1.079-3.937c-.66-1.144-1.008-2.443-1.008-3.724 0-4.144 3.372-7.517 7.517-7.517 2.006 0 3.894.782 5.314 2.204zm-3.238 6.559c-.198-.099-1.171-.578-1.353-.644-.182-.065-.315-.099-.447.099s-.513.644-.629.776c-.116.133-.232.149-.43.05-.198-.099-.838-.309-1.597-.986-.591-.527-.99-1.178-1.106-1.376s-.012-.306.087-.404c.089-.089.198-.232.298-.348.099-.116.132-.198.198-.33.066-.133.033-.248-.017-.348s-.446-1.074-.612-1.47c-.161-.387-.325-.334-.447-.34l-.381-.007c-.132 0-.347.05-.529.248-.182.198-.694.678-.694 1.653s.71 1.917.81 2.05c.099.132 1.397 2.133 3.385 2.99.473.204.843.326 1.131.418.475.151.907.13 1.248.079.38-.057 1.171-.479 1.337-.942.165-.463.165-.86.116-.942-.049-.083-.182-.133-.38-.232z" />
    </svg>
  );
}

/**
 * SocialCorner
 * Fixed bottom-right social link bar for Instagram, LinkedIn, and WhatsApp.
 * Styled in dark glass with sleek ambient glowing hover states.
 */
const SocialCorner = memo(function SocialCorner() {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/codenova31/",
      icon: <Instagram className="w-4 h-4" />,
      hoverClass: "hover:text-[#E1306C] hover:border-[#E1306C]/60 hover:shadow-[0_0_18px_rgba(225,48,108,0.45)]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/code-a-nova/",
      icon: <Linkedin className="w-4 h-4" />,
      hoverClass: "hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:shadow-[0_0_18px_rgba(10,102,194,0.45)]",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/?text=Hi%20Code-A-Nova%20Team",
      icon: <WhatsAppIcon className="w-4 h-4" />,
      hoverClass: "hover:text-[#25D366] hover:border-[#25D366]/60 hover:shadow-[0_0_18px_rgba(37,211,102,0.45)]",
    },
  ];

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-2.5 pointer-events-auto select-none"
      aria-label="Social links"
    >
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
          aria-label={item.name}
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-stone-400 transition-all duration-250 shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:scale-110 active:scale-95 ${item.hoverClass}`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
});

export default SocialCorner;
