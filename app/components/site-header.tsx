import Link from "next/link";
import { GROUPS, servicesByGroup } from "../services/data";

const NAV_LINKS = [
  { label: "Meet Dr. Yu", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "New Patients", href: "/#new-patients" },
  { label: "Contact", href: "/#contact" },
];

const BOOKING_URL =
  "https://www.patientviewer.com/WebSched/25_3_44/GWT/WebSched/WebSched.html?V=32355F335F3434&I=31302E31302E31312E313638&P=3530303039&R=3130303030&S=3130303030&T=3930303030&N=3439343938&K=3135333739&C=6538&UP=1&CID=30&RSC=406";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl font-semibold text-navy">
          Dental Matrix
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-navy/80 md:flex">
          <div className="group relative">
            <Link
              href="/services"
              className="flex items-center gap-1 py-2 hover:text-navy"
            >
              Services
              <svg
                viewBox="0 0 12 8"
                className="h-2.5 w-2.5 fill-none stroke-current stroke-2"
              >
                <path d="M1 1l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[36rem] -translate-x-1/2 pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5">
                {GROUPS.map((group) => (
                  <div key={group}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-green-deep">
                      {group}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {servicesByGroup(group).map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="text-sm text-navy/80 hover:text-navy"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-navy">
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-deep"
        >
          Book Appointment
        </a>
      </div>
    </header>
  );
}
