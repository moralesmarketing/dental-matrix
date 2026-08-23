import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/site-header";
import { SERVICES, getServiceBySlug } from "../data";

const PHONE_DISPLAY = "(909) 525-2525";
const PHONE_HREF = "tel:+19095252525";
const BOOKING_URL =
  "https://www.patientviewer.com/WebSched/25_3_44/GWT/WebSched/WebSched.html?V=32355F335F3434&I=31302E31302E31312E313638&P=3530303039&R=3130303030&S=3130303030&T=3930303030&N=3439343938&K=3135333739&C=6538&UP=1&CID=30&RSC=406";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} | Dental Matrix | Chino Hills, CA`,
    description: service.tagline,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-linear-to-br from-navy to-navy-deep text-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <Link
              href="/services"
              className="text-sm font-semibold text-white/60 hover:text-white"
            >
              ← All services
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-white/60">
              {service.group}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              {service.tagline}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-deep"
            >
              Book Appointment
            </a>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            {service.intro.map((paragraph, i) => (
              <p key={i} className="text-lg text-foreground/70">
                {paragraph}
              </p>
            ))}

            <div className="mt-10 space-y-10">
              {service.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-serif text-2xl font-semibold text-navy">
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((paragraph, i) => (
                    <p key={i} className="mt-3 text-foreground/70">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-3 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-foreground/70">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact-cta" className="bg-cloud">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
              Questions about {service.name.toLowerCase()}?
            </h2>
            <p className="mt-3 text-foreground/70">
              Call our Chino Hills office and we&apos;ll walk you through it.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={PHONE_HREF}
                className="rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-deep"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-navy underline underline-offset-4"
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
