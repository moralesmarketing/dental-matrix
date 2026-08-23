import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import { GROUPS, servicesByGroup } from "./data";

export const metadata: Metadata = {
  title: "Services | Dental Matrix | Chino Hills, CA",
  description:
    "Family, cosmetic, restorative, and whole-body wellness dentistry from Dr. Quinn Yu, DDS in Chino Hills, CA.",
};

const BOOKING_URL =
  "https://www.patientviewer.com/WebSched/25_3_44/GWT/WebSched/WebSched.html?V=32355F335F3434&I=31302E31302E31312E313638&P=3530303039&R=3130303030&S=3130303030&T=3930303030&N=3439343938&K=3135333739&C=6538&UP=1&CID=30&RSC=406";

const EXTRA_SERVICES = [
  {
    group: "Whole-Body Wellness",
    name: "Tongue-Tie Release",
    body: "Treatment to release restrictive tongue-tie for improved function.",
  },
];

export default function ServicesIndex() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-linear-to-br from-navy to-navy-deep text-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Our Services
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
              Comprehensive care, one practice.
            </h1>
            <p className="mt-4 max-w-2xl text-white/80">
              Family, cosmetic, restorative, and whole-body wellness
              dentistry — all led by Dr. Quinn Yu, DDS, in Chino Hills.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-2">
              {GROUPS.map((group) => (
                <div key={group}>
                  <h2 className="font-serif text-xl font-semibold text-navy">
                    {group}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {servicesByGroup(group).map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block rounded-xl bg-cloud p-5 ring-1 ring-black/5 transition-colors hover:ring-green"
                      >
                        <p className="font-semibold text-navy">
                          {service.name}
                        </p>
                        <p className="mt-1 text-sm text-foreground/70">
                          {service.shortBody}
                        </p>
                        <span className="mt-2 inline-block text-sm font-semibold text-green-deep">
                          Learn more →
                        </span>
                      </Link>
                    ))}
                    {EXTRA_SERVICES.filter((s) => s.group === group).map(
                      (service) => (
                        <div
                          key={service.name}
                          className="rounded-xl bg-cloud p-5 ring-1 ring-black/5"
                        >
                          <p className="font-semibold text-navy">
                            {service.name}
                          </p>
                          <p className="mt-1 text-sm text-foreground/70">
                            {service.body}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy text-white">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Not sure where to start?
            </h2>
            <p className="mt-3 text-white/70">
              Call our Chino Hills office and we&apos;ll help you find the
              right fit.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+19095252525"
                className="rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-deep"
              >
                Call (909) 525-2525
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white underline underline-offset-4"
              >
                Book online
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy-deep py-8 text-center text-xs text-white/50">
        <p>
          &copy; {new Date().getFullYear()} Dental Matrix — Dr. Quinn Yu, DDS.
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}
