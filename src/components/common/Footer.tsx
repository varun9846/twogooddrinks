import Link from "next/link";
import WaterDroplets from "./WaterDroplets";

const wellnessCategories = [
  { label: "Natural Drinking Water", href: "/shop" },
  { label: "Jeera Wellness Drinks", href: "/shop" },
  { label: "Herbal Infusions", href: "/shop" },
  { label: "Flavoured Wellness Drinks", href: "/shop" },
  { label: "Healthy Drinks", href: "/shop" },
  { label: "Wellness Bundles", href: "/shop" },
];

const ProductsAndServices = [
  { label: "Natural Drinking Water", href: "/contact-us" },
  { label: "Hydration Drinks", href: "/contact-us" },
  { label: "Bulk Orders", href: "/contact-us" },
  { label: "Home Delivery", href: "/contact-us" },
];

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

const accountLinks = [
  { label: "Sign In", href: "/login" },
  { label: "View Cart", href: "/cart" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="bb-footer-widget">
      <h4 className="mb-5 border-b border-[#0f766e]/10 pb-4 font-quicksand text-[18px] font-bold text-slate-700">
        {title}
      </h4>

      <ul>
        {links.map((item) => (
          <li key={item.label} className="mb-4">
            <Link
              href={item.href}
              className="font-Poppins text-[14px] leading-5 text-slate-500 transition hover:text-[#0f766e]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bb-footer relative mt-[80px] bg-[#f8f8fb] text-slate-700 max-[1199px]:mt-[60px]">
      {/* 1. Animated Rippling Wave Top Divider */}
      <div className="absolute left-0 right-0 top-0 -translate-y-[99%] overflow-hidden leading-[0]">
        <svg
          className="animate-wave-ripple h-[40px] w-[200%] sm:h-[60px] lg:h-[80px]"
          viewBox="0 0 2880 120"
          preserveAspectRatio="none"
          fill="#f8f8fb"
        >
          <path d="M0,64 C240,120 480,0 720,56 C960,112 1200,24 1440,72 C1680,120 1920,0 2160,56 C2400,112 2640,24 2880,72 L2880,120 L0,120 Z" />
        </svg>
      </div>

      {/* 2. Background Droplets */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
        <WaterDroplets />
      </div>

      {/* Main Content Area (z-10 ensures it sits above the droplets) */}
      <div className="relative z-10 border-t border-slate-200/50">
        <div className="py-[50px] max-[1199px]:py-[35px]">
          <div className="mx-auto flex max-w-[1320px] flex-wrap px-3">
            {/* About */}
            <div className="w-full px-3 lg:w-[25%]">
              <div className="mb-10 flex flex-col lg:mb-0">
                {/* 3. Existing water-ripple class applied to Logo */}
                <Link href="/" className="water-ripple mb-7 inline-flex items-center gap-3 rounded-full w-fit">
                  <img
                    src="/assets/img/logo/logo-icon2.png"
                    alt="2gooD logo icon"
                    className="h-16 w-16 shrink-0 object-contain relative z-10"
                  />
                </Link>

                <p className="mb-7 max-w-[400px] font-Poppins text-[14px] leading-[27px] text-slate-500">
                  2good plus is committed to delivering pure, safe, and refreshing
                  packaged drinking water. With advanced purification processes
                  and strict quality standards, we ensure every bottle provides
                  freshness and trust for homes, offices, events, and
                  businesses.
                </p>
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/2 lg:w-[16.66%]">
              <FooterColumn title="Products" links={ProductsAndServices} />
            </div>
            <div className="w-full px-3 sm:w-1/2 text-slate-700 lg:w-[16.66%]">
              <FooterColumn title="Account" links={accountLinks} />
            </div>
            <div className="w-full px-3 sm:w-1/2 lg:w-[16.66%]">
              <FooterColumn title="Company" links={companyLinks} />
            </div>

            {/* Contact */}
            <div className="w-full px-3 sm:w-1/2 lg:w-[25%]">
              <div className="bb-footer-widget">
                <h4 className="mb-5 border-b border-[#0f766e]/10 pb-4 font-quicksand text-[18px] font-bold text-slate-700">
                  Contact
                </h4>
                <ul>
                  <li className="mb-4 flex items-start">
                    <span className="mr-3 mt-1 text-[#0f766e]">📍</span>
                    <p className="font-Poppins text-[14px] leading-7 text-slate-500">
                      Plot No. 24, DIC Industrial Estate, Rania, Kanpur Dehat -
                      209304, Uttar Pradesh, India
                    </p>
                  </li>

                  <li className="mb-4 flex items-center">
                    <span className="mr-3 text-[#0f766e]">☎</span>
                    <Link
                      href="tel:+919967399880"
                      className="font-Poppins text-[14px] text-slate-500 transition hover:text-[#0f766e]"
                    >
                      +91 99673 99880
                    </Link>
                  </li>

                  <li className="mb-4 flex items-center">
                    <span className="mr-3 text-[#0f766e]">✉</span>
                    <Link
                      href="mailto:Corporate@gmhospitality.in"
                      className="font-Poppins text-[14px] text-slate-500 transition hover:text-[#0f766e]"
                    >
                      Corporate@gmhospitality.in
                    </Link>
                  </li>

                  <li className="mb-5 flex items-start">
                    <span className="mr-3 mt-1 text-[#0f766e]">🕒</span>
                    <p className="font-Poppins text-[14px] leading-7 text-slate-500">
                      Monday – Saturday
                      <br />
                      8:00 AM – 8:00 PM
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200/50 py-4">
          <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-6 max-[991px]:flex-col">
            <div className="font-Poppins text-[13px] leading-7 tracking-[1px] text-slate-500">
              Copyright © 2026{" "}
              <Link
                href="/"
                className="font-medium text-[#0f766e] transition hover:text-[#0c5a52]"
              >
                2gooD
              </Link>{" "}
              all rights reserved.
            </div>

            <div>
              <img
                src="/assets/img/payment/payment.png"
                alt="Payment methods"
                className="max-h-8 max-w-full relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}