import Link from "next/link";
import { products } from "@/lib/products";

const categories = [
  {
    title: "Wellness Drinks",
    subtitle: "Pure water & wellness drinks",
    icon: "/assets/img/category/1.svg",
    color: "bg-[#fff1f1]",
  },
  {
    title: "Herbal Care",
    subtitle: "Natural blends & soothing sips",
    icon: "/assets/img/category/2.svg",
    color: "bg-[#e9fff8]",
  },
  {
    title: "Jeera Drinks",
    subtitle: "Refreshing everyday favorites",
    icon: "/assets/img/category/3.svg",
    color: "bg-[#f3f1ff]",
  },
  {
    title: "Healthy Snacks",
    subtitle: "Light bites for mindful tasting",
    icon: "/assets/img/category/4.svg",
    color: "bg-[#fff9e6]",
  },
];

const services = [
  {
    title: "Free Shipping",
    desc: "Free shipping on all orders above $200",
    icon: "/assets/img/services/1.png",
  },
  {
    title: "24x7 Support",
    desc: "Help whenever you need it",
    icon: "/assets/img/services/2.png",
  },
  {
    title: "30 Days Return",
    desc: "Easy returns within a month",
    icon: "/assets/img/services/3.png",
  },
  {
    title: "Secure Payment",
    desc: "Fast and safe checkout",
    icon: "/assets/img/services/4.png",
  },
];

const testimonials = [
  {
    name: "Aisha Rahman",
    role: "Wellness Customer",
    quote:
      "The blends feel fresh, natural, and easy to make part of my daily routine.",
    image: "/assets/img/testimonials/1.png",
  },
  {
    name: "Neha Kapoor",
    role: "Lifestyle Buyer",
    quote:
      "Beautiful storefront, speedy browsing, and products that really fit a healthy lifestyle.",
    image: "/assets/img/testimonials/2.png",
  },
  {
    name: "Omar Hassan",
    role: "Returning Customer",
    quote:
      "From herbal infusions to hydration packs, this feels like the perfect wellness shopping destination.",
    image: "/assets/img/testimonials/3.png",
  },
];

const blogs = [
  {
    date: "June 30, 2024",
    tag: "Organic",
    title: "Best Sellers - BlueBerry Mojito",
    image: "/assets/img/blog/7.jpg",
  },
  {
    date: "June 29, 2023",
    tag: "Organic",
    title: "Best Sellers - Mint Herbal infusion",
    image: "/assets/img/blog/8.jpg",
  },
  {
    date: "Jan 10, 2022",
    tag: "Organic",
    title: "Best Sellers - Ginger Jeera Drink",
    image: "/assets/img/blog/9.jpg",
  },
  {
    date: "Feb 12, 2022",
    tag: "Organic",
    title: "Best Sellers - Lemon Jeera Drink",
    image: "/assets/img/blog/10.jpg",
  },
];

const vendors = [
  {
    name: "Mira Fashion Pvt. Ltd.",
    sales: "Sales - 587",
    categories: "Fruits (5) | Drinks (30) | Drinks (09)",
    mainImage: "/assets/img/vendors/img-1.png",
    logo: "/assets/img/vendors/vendor-1.png",
  },
  {
    name: "Eelna Fashion Pvt. Ltd.",
    sales: "Sales - 428",
    categories: "Fruits (8) | Drinks (15) | Drinks (04)",
    mainImage: "/assets/img/vendors/img-2.png",
    logo: "/assets/img/vendors/vendor-2.jpg",
  },
  {
    name: "Mario Fashion Pvt. Ltd.",
    sales: "Sales - 1024",
    categories: "Fruits (16) | Drinks (42) | Drinks (18)",
    mainImage: "/assets/img/vendors/img-3.jpg",
    logo: "/assets/img/vendors/vendor-3.jpg",
  },
  {
    name: "Maria Fashion Pvt. Ltd.",
    sales: "Sales - 210",
    categories: "Fruits (2) | Drinks (10) | Drinks (03)",
    mainImage: "/assets/img/vendors/img-4.jpg",
    logo: "/assets/img/vendors/vendor-4.jpg",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6c7fd8]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="pb-16">
      <section className="overflow-hidden bg-[#f6f7ff]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#6c7fd8]">
              Hydrate • Heal • Feel Good
            </p>

            <h1 className="mb-[22px] text-[52px] font-bold leading-[1.15] text-[#3d4750] max-[768px]:text-[36px]">
              Discover <span className="text-[#6c7fd8]">2gooD Wellness</span>
              Products for Everyday Living
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Shop pure drinks, herbal infusions, seasonal wellness picks, and
              mindful essentials made for a brighter daily routine.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-full bg-[#6c7fd8] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5768b0] hover:shadow-lg"
              >
                Shop Now
              </Link>

              <Link
                href="/about-us"
                className="rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#6c7fd8] hover:text-[#6c7fd8] hover:shadow-lg"
              >
                Our Story
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { value: "100%", label: "Natural Choices" },
                { value: "Fresh", label: "Daily Wellness" },
                { value: "Pure", label: "Hydration" },
              ].map((item) => (
                <article
                  key={item.label}
                  className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#6c7fd8] hover:shadow-lg"
                >
                  <p className="text-2xl font-bold text-slate-900">
                    {item.value}
                  </p>
                  <p className="text-sm text-slate-500">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -right-8 top-8 h-[520px] w-[520px] rounded-full bg-[#eef1ff] opacity-60 blur-3xl" />
            <div className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
              <img
                src="/assets/img/hero/hero-1.png"
                alt="2gooD wellness products"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Shop by wellness"
          title="Browse healthy drinks, herbal care, jeera blends, and mindful essentials."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className={`${category.color} group rounded-[28px] p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <img
                src={category.icon}
                alt={category.title}
                className="mx-auto mb-4 h-14 w-14 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <h3 className="text-lg font-semibold text-slate-900">
                {category.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{category.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-[32px] bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Featured wellness picks"
            title="Customer favorites for taste, hydration, and everyday health."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden border-b border-slate-100">
                  {product.badge ? (
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-[#6c7fd8] px-3 py-1 text-xs font-semibold text-white">
                      {product.badge}
                    </span>
                  ) : null}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    {product.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-end justify-between gap-3">
                    <div>
                      <span className="text-lg font-semibold text-slate-900">
                        {product.price}
                      </span>
                      {product.oldPrice ? (
                        <span className="ml-2 text-sm text-slate-400 line-through">
                          {product.oldPrice}
                        </span>
                      ) : null}
                    </div>

                    <Link
                      href={`/shop/${product.id}`}
                      className="rounded-full bg-[#6c7fd8] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5768b0] hover:shadow-lg"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2 md:px-6">
        <article className="group relative overflow-hidden rounded-[30px] bg-[#edf1ff] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img
            src="/assets/img/banner-one/one.jpg"
            alt="Healthy drinks"
            className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="relative max-w-sm">
            <h3 className="text-2xl font-semibold text-slate-900">
              Healthy Drinks & Smart Bites
            </h3>
            <p className="mt-3 text-slate-600">
              Wholesome picks for busy days and mindful routines.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#6c7fd8] hover:text-white"
            >
              Shop Now
            </Link>
          </div>
        </article>

        <article className="group relative overflow-hidden rounded-[30px] bg-[#fff7ea] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <img
            src="/assets/img/banner-one/two.jpg"
            alt="Pure water and herbal drinks"
            className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="relative max-w-sm">
            <h3 className="text-2xl font-semibold text-slate-900">
              Pure Water & Herbal Drinks
            </h3>
            <p className="mt-3 text-slate-600">
              Daily hydration that feels fresh, clean, and uplifting.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#6c7fd8] hover:text-white"
            >
              Shop Now
            </Link>
          </div>
        </article>
      </section>

      <section className="section-banner-two group my-[50px] min-h-[600px] overflow-hidden bg-[url('/assets/img/banner-two/banner.png')] bg-cover bg-center bg-no-repeat transition-all duration-700 hover:bg-[length:105%] max-[1199px]:my-[35px] max-[991px]:min-h-[400px]">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between px-3">
          <div className="flex w-full flex-wrap">
            <div className="banner-justify-box-contact flex h-[600px] w-full items-end justify-end px-3 max-[991px]:h-[400px]">
              <div className="banner-two-box flex max-w-[400px] flex-col items-start rounded-t-[30px] bg-white px-[30px] pb-[30px] pt-[30px] shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl max-[991px]:max-w-[250px] max-[575px]:mx-auto">
                <span className="text-[20px] font-semibold leading-[26px] text-[#6c7fd8] max-[991px]:text-[16px]">
                  Wellness Offer
                </span>

                <h4 className="mb-[20px] font-quicksand text-[40px] font-bold leading-[1.2] tracking-[0.03rem] text-[#3d4750] max-[991px]:text-[22px]">
                  Natural Drinks for Better Days
                </h4>

                <Link
                  href="/shop"
                  className="bb-btn-1 rounded-[10px] border border-[#3d4750] bg-transparent px-[20px] py-[8px] font-Poppins text-[14px] font-normal leading-[28px] tracking-[0.03rem] text-[#3d4750] transition-all duration-300 hover:-translate-y-1 hover:border-[#6c7fd8] hover:bg-[#6c7fd8] hover:text-white hover:shadow-lg max-[1199px]:px-[15px] max-[1199px]:py-[3px]"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="New wellness arrivals"
          title="Freshly added drinks, herbs, and healthier essentials."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(8, 12).map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  {product.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">
                    {product.price}
                  </span>
                  <span>{product.tag}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-16 font-Poppins">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Centered Heading Container */}
          <div className="mb-12 max-w-2xl mx-auto text-center">
            <SectionHeading
              eyebrow="Our Services"
              title="Shop with confidence - our commitment to your wellness journey."
              text="From free shipping to secure payments, we’ve got you covered every step of the way."
            />
          </div>

          {/* Clean Services Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => (
              <article
                key={item.title}
                className="group rounded-[20px] border border-solid border-[#eee] bg-white p-7 text-center transition-all duration-[0.3s] ease-in-out hover:-translate-y-1 hover:border-[#6c7fd8] hover:shadow-[0_15px_30px_rgba(108,127,216,0.1)]"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f8f9fa] transition-colors duration-[0.3s] group-hover:bg-[#6c7fd8]/10">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-8 w-8 object-contain transition-transform duration-[0.3s] group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[17px] font-semibold tracking-[0.03rem] text-[#2b2b2d]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[22px] text-[#686e7d]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-vendors overflow-hidden px-4 pb-[100px] pt-[50px] max-[1199px]:pb-[70px] max-[1199px]:pt-[35px] md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Top Vendors"
            title="Discover our trusted partners"
            text="Excellence and reliability in every choice."
          />

          <div className="grid gap-6 lg:grid-cols-[41.66%_1fr]">
            <div className="relative">
              <div className="sticky top-24">
                <div className="group relative overflow-hidden rounded-[30px] border border-[#eee] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <Link
                    href="/shop"
                    className="absolute right-5 top-5 z-10 flex h-[35px] w-[35px] items-center justify-center rounded-[10px] bg-black/50 text-white transition-all duration-300 hover:scale-110 hover:bg-black/80"
                    aria-label="View vendor"
                  >
                    ↗
                  </Link>

                  <img
                    src={vendors[0].mainImage}
                    alt="Top vendor"
                    className="h-full w-full rounded-[30px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-0 right-0 h-[120px] w-[120px] rounded-tl-[30px] bg-white pl-5 pt-5">
                    <img
                      src={vendors[0].logo}
                      alt={vendors[0].name}
                      className="h-[100px] w-[100px] rounded-[30px] border border-[#eee] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-6">
              {vendors.map((vendor) => (
                <li key={vendor.name}>
                  <Link
                    href="/shop"
                    className="block rounded-[30px] border border-slate-400 bg-gray-100 p-[30px] transition-all duration-300 hover:-translate-y-1 hover:border-[#6c7fd8] hover:bg-white hover:shadow-lg"
                  >
                    <div className="mb-[5px] flex justify-between gap-4 max-[420px]:flex-col">
                      <h5 className="font-quicksand text-[18px] font-bold leading-[1.2] tracking-[0.03rem] text-slate-500">
                        {vendor.name}
                      </h5>

                      <span className="font-Poppins text-[14px] font-normal leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                        {vendor.sales}
                      </span>
                    </div>

                    <p className="font-Poppins text-[14px] font-light leading-[20px] tracking-[0.03rem] text-[#686e7d]">
                      {vendor.categories}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our wellness shoppers love about 2gooD."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="group rounded-[28px] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="mb-4 h-14 w-14 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-sm leading-7 text-slate-600">“{item.quote}”</p>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {item.name}
              </h3>
              <p className="text-sm text-slate-500">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 md:px-6 font-Poppins">
  <div className="group relative overflow-hidden rounded-[24px] bg-[#6c7fd8] p-8 md:p-14 shadow-[0_15px_35px_rgba(108,127,216,0.25)] transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(108,127,216,0.35)]">
    
    {/* Decorative Premium Background Accents */}
    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-xl transition-transform duration-700 ease-out group-hover:scale-150" aria-hidden="true" />
    <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-white/10 blur-2xl transition-transform duration-700 ease-out group-hover:scale-125" aria-hidden="true" />

    <div className="relative z-10 grid items-center gap-8 lg:grid-cols-5">
      
      {/* Left Column: Content */}
      <div className="text-center lg:col-span-3 lg:text-left">
        <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-white/80">
          Stay Connected
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-[0.02rem] text-white md:text-4xl">
          Subscribe to our Newsletter
        </h2>
        <p className="mt-3 max-w-xl text-[14px] leading-[24px] text-white/90">
          Subscribe for wellness updates, best sellers, and fresh, exclusive shopping offers right in your inbox.
        </p>
      </div>

      {/* Right Column: Premium Form Fields */}
      <div className="w-full lg:col-span-2">
        <form className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-2.5 rounded-none sm:rounded-[12px] sm:bg-white/10 sm:p-1.5 sm:backdrop-blur-sm sm:border sm:border-white/20">
          
          {/* Custom Input Wrapper */}
          <div className="relative flex-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-12 w-full rounded-[10px] sm:rounded-[8px] border border-solid border-white/20 sm:border-none bg-white px-5 text-[14px] text-[#2b2b2d] placeholder-[#686e7d] outline-none transition-all duration-300 focus:bg-white/100 focus:ring-2 focus:ring-[#2b2b2d]/20"
              required
            />
          </div>

          {/* Premium Form Submit Button */}
          <button
            type="submit"
            className="h-12 rounded-[10px] sm:rounded-[8px] bg-[#2b2b2d] px-7 text-[14px] font-semibold text-white tracking-[0.03rem] transition-all duration-300 ease-in-out hover:bg-white hover:text-[#6c7fd8] hover:shadow-md"
          >
            Subscribe
          </button>
          
        </form>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}
