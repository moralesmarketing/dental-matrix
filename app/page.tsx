const PHONE_DISPLAY = "(909) 525-2525";
const PHONE_HREF = "tel:+19095252525";
const EMAIL = "dentalmatrixchinohills@gmail.com";
const ADDRESS_LINE1 = "13850 City Center Drive, Suite 5000";
const ADDRESS_LINE2 = "Chino Hills, CA 91709";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Meet Dr. Yu", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "New Patients", href: "#new-patients" },
  { label: "Contact", href: "#contact" },
];

const FEATURE_CARDS = [
  {
    title: "Meet Dr. Quinn Yu",
    body: "DDS from USC, 20+ years in practice. Dr. Yu explains every option before you decide on care.",
    href: "#about",
    linkLabel: "Read her story",
  },
  {
    title: "Whole-Health Approach",
    body: "Beyond the teeth — airway, gum, face, and chin health, backed by 3D CBCT imaging for precise planning.",
    href: "#services",
    linkLabel: "See our services",
  },
  {
    title: "Financing & Insurance",
    body: "Financing available through DentalPlans.com, plus AETNA PPO accepted. Ask us what fits your plan.",
    href: "#new-patients",
    linkLabel: "New patient info",
  },
];

const SERVICE_GROUPS = [
  {
    title: "Family & General Dentistry",
    services: [
      {
        name: "Exams & Cleanings",
        body: "Routine preventive care to catch concerns early and keep your whole family's smiles healthy.",
      },
      {
        name: "Dental Fillings",
        body: "Comfortable, tooth-colored restorations for cavities.",
      },
      {
        name: "Dental Crowns",
        body: "Durable crown restorations to protect and rebuild damaged teeth.",
      },
      {
        name: "General & Family Dentistry",
        body: "Everyday dental care for patients of every age, all under one roof.",
      },
    ],
  },
  {
    title: "Cosmetic & Orthodontics",
    services: [
      {
        name: "Cosmetic Dentistry",
        body: "Aesthetic procedures designed to help your smile look and feel its best.",
      },
      {
        name: "Teeth Whitening",
        body: "Professional whitening treatments for a brighter smile.",
      },
      {
        name: "Orthodontics",
        body: "Teeth-straightening options tailored to your bite and goals.",
      },
      {
        name: "ClearCorrect Aligners",
        body: "Clear aligner therapy for a discreet, comfortable path to a straighter smile.",
      },
    ],
  },
  {
    title: "Restorative Care",
    services: [
      {
        name: "Dental Implants",
        body: "Long-term tooth replacement, planned with 3D imaging for precision.",
      },
      {
        name: "Root Canals",
        body: "Endodontic treatment to save infected or damaged teeth.",
      },
    ],
  },
  {
    title: "Whole-Body Wellness",
    services: [
      {
        name: "Sleep Apnea Treatment (Vivos)",
        body: "Vivos sleep appliances to help improve airway health and obstructive sleep apnea.",
      },
      {
        name: "Evoke Facial Remodeling",
        body: "A hands-free, pain-free radiofrequency treatment for facial and chin contouring — no surgery required.",
      },
      {
        name: "Craniofacial Development",
        body: "Development-focused treatment supporting healthy airway and jaw growth.",
      },
      {
        name: "Tongue-Tie Release",
        body: "Treatment to release restrictive tongue-tie for improved function.",
      },
    ],
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "3D CBCT Imaging",
    body: "Advanced 3D CBCT imaging gives Dr. Yu a precise, complete picture for treatment planning — from implants to airway health.",
  },
  {
    number: "02",
    title: "Health, Beauty & Wellness in Balance",
    body: "We treat more than teeth. Our holistic approach spans airway, teeth, gums, face, and chin — because oral health affects your whole body.",
  },
  {
    number: "03",
    title: "A Comfortable, Welcoming Office",
    body: "A calm, plant-filled space in The Shoppes at Chino Hills, designed to ease dental anxiety from the moment you walk in.",
  },
  {
    number: "04",
    title: "Hours That Work for You",
    body: "Open Monday through Saturday, with weekday hours until 6:00 PM, so quality care fits your schedule.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />
      <main className="flex flex-col flex-1">
        <Hero />
        <Welcome />
        <Services />
        <About />
        <WhyUs />
        <NewPatients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-xl font-semibold text-navy">
          Dental Matrix
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-navy/80 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-navy">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-deep"
        >
          Book Appointment
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-navy to-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
            Chino Hills, CA
          </p>
          <h1 className="font-serif text-4xl leading-tight font-semibold sm:text-5xl">
            Where advanced dentistry <em className="italic">meets</em> genuine
            care.
          </h1>
          <p className="mt-6 max-w-md text-white/80">
            Led by Dr. Quinn Yu, DDS — 20+ years serving Chino Hills families
            with family, cosmetic, and whole-health dentistry, open six days a
            week.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-deep"
            >
              Book Appointment
            </a>
            <a
              href={PHONE_HREF}
              className="text-sm font-semibold text-white underline underline-offset-4"
            >
              Call Us — {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm font-semibold text-white/60">
                Established 2018
              </p>
              <p className="mt-1 text-lg font-semibold">
                20+ years of experience
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm font-semibold text-white/60">
                Trusted locally
              </p>
              <p className="mt-1 text-lg font-semibold">
                73+ reviews on Yelp
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <PlaceholderTile label="Reception" className="col-span-2 h-40" />
          <PlaceholderTile label="Waiting area" className="h-48" />
          <PlaceholderTile label="Treatment room" className="h-48" />
          <PlaceholderTile label="Dr. Quinn Yu" className="col-span-2 h-40" />
        </div>
      </div>
    </section>
  );
}

function PlaceholderTile({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-center text-xs font-medium text-white/50 ${className}`}
    >
      Photo: {label}
    </div>
  );
}

function Welcome() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-deep">
          Welcome to Dental Matrix
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-navy sm:text-4xl">
          Your trusted dentist in Chino Hills, CA.
        </h2>
        <p className="mt-6 max-w-2xl text-foreground/70">
          If you&apos;re searching for a dentist in Chino Hills families can
          rely on, you&apos;ve found a practice built around comfort and
          long-term health. Dr. Quinn Yu, DDS and her team offer family,
          cosmetic, and whole-health dentistry — including facial remodeling
          and sleep apnea treatment — six days a week at The Shoppes at Chino
          Hills.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {FEATURE_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-cloud p-6 ring-1 ring-black/5"
            >
              <h3 className="font-serif text-lg font-semibold text-navy">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">{card.body}</p>
              <a
                href={card.href}
                className="mt-4 inline-block text-sm font-semibold text-green-deep hover:underline"
              >
                {card.linkLabel} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-mist">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-deep">
          Our Services
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-navy sm:text-4xl">
          Comprehensive care, one practice.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {SERVICE_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-serif text-xl font-semibold text-navy">
                {group.title}
              </h3>
              <div className="mt-4 space-y-4">
                {group.services.map((service) => (
                  <div
                    key={service.name}
                    className="rounded-xl bg-white p-5 ring-1 ring-black/5"
                  >
                    <p className="font-semibold text-navy">{service.name}</p>
                    <p className="mt-1 text-sm text-foreground/70">
                      {service.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[280px_1fr] md:items-start">
        <PlaceholderTile label="Dr. Quinn Yu headshot" className="h-72" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-green-deep">
            Meet the Doctor
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Dr. Quinn Yu, DDS
          </h2>
          <p className="mt-6 text-foreground/70">
            Dr. Yu earned her undergraduate degree in Biochemistry from UCLA
            and her Doctor of Dental Surgery from USC in 2001, with special
            training in Lumineers, Invisalign, laser dentistry, teeth
            whitening, and dental implant restorations. She&apos;s a member of
            the American Dental Association, California Dental Association,
            and the Tri-County Dental Society.
          </p>
          <blockquote className="mt-6 border-l-4 border-green pl-4 font-serif text-lg italic text-navy">
            &ldquo;I decided to become a dentist to make a positive difference
            in people&apos;s lives.&rdquo;
          </blockquote>
          <p className="mt-6 text-foreground/70">
            That mission is personal — after losing an adult tooth to a
            mistaken extraction at age nine and facing her own orthodontic
            challenges as a teenager, Dr. Yu built her practice around
            prevention and long-term restoration. She volunteers with the USC
            Mobile Clinic and AMEN Dental Clinic, and outside the office she
            enjoys hiking with her dog, scuba diving, traveling, and time with
            family.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="bg-cloud">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-deep">
          What Sets Us Apart
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-navy sm:text-4xl">
          Experience the difference.
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {DIFFERENTIATORS.map((item) => (
            <div key={item.number} className="flex gap-4">
              <span className="font-serif text-3xl font-semibold text-green">
                {item.number}
              </span>
              <div>
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-foreground/70">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewPatients() {
  return (
    <section id="new-patients" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-deep">
          Welcoming New Patients
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-navy sm:text-4xl">
          Getting started is straightforward.
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl bg-cloud p-6 ring-1 ring-black/5">
            <h3 className="font-semibold text-navy">Hours</h3>
            <ul className="mt-3 space-y-1 text-sm text-foreground/70">
              <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 9:00 AM – 3:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-cloud p-6 ring-1 ring-black/5">
            <h3 className="font-semibold text-navy">
              Insurance &amp; Financing
            </h3>
            <p className="mt-3 text-sm text-foreground/70">
              We recommend the AETNA PPO plan and offer financing options
              through DentalPlans.com, along with CareCredit, to help make
              treatment fit your budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Visit us in Chino Hills.
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              We&apos;re located in The Shoppes at Chino Hills, on City Center
              Drive off Grand Ave.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-deep"
            >
              Book Appointment
            </a>
          </div>
          <div className="space-y-3 text-sm text-white/80">
            <p>{ADDRESS_LINE1}</p>
            <p>{ADDRESS_LINE2}</p>
            <p>
              <a href={PHONE_HREF} className="font-semibold text-white">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a href={`mailto:${EMAIL}`} className="text-white">
                {EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep py-8 text-center text-xs text-white/50">
      <p>
        &copy; {new Date().getFullYear()} Dental Matrix — Dr. Quinn Yu, DDS.
        All rights reserved.
      </p>
    </footer>
  );
}
