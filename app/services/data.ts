export type ServiceSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Service = {
  slug: string;
  name: string;
  group: string;
  shortBody: string;
  tagline: string;
  intro: string[];
  sections: ServiceSection[];
};

export const GROUPS = [
  "Family & General Dentistry",
  "Cosmetic & Orthodontics",
  "Restorative Care",
  "Whole-Body Wellness",
] as const;

export const SERVICES: Service[] = [
  {
    slug: "exams-and-cleanings",
    name: "Exams & Cleanings",
    group: "Family & General Dentistry",
    shortBody:
      "Routine preventive care to catch concerns early and keep your whole family's smiles healthy.",
    tagline: "The foundation of a healthy smile — and the easiest problems to prevent.",
    intro: [
      "A cleaning and exam twice a year is the single most effective thing you can do for your oral health. Catching a small problem early is faster, cheaper, and far less stressful than treating it after it's had time to grow.",
    ],
    sections: [
      {
        heading: "What to expect",
        paragraphs: [
          "Most visits take about 45 minutes to an hour. The exam is quick and simple — a bite check, a look around, and X-rays when they're needed. The cleaning itself uses a high-powered tool to clear away plaque and tartar your toothbrush can't reach, finished off with a professional flossing and a fluoride treatment.",
        ],
      },
      {
        heading: "Why we keep coming back to this",
        paragraphs: [
          "It's easy to skip a routine cleaning when nothing hurts. But oral issues can develop and progress quickly, often before you'd ever notice on your own. Staying on schedule is what keeps small things small.",
        ],
      },
    ],
  },
  {
    slug: "dental-fillings",
    name: "Dental Fillings",
    group: "Family & General Dentistry",
    shortBody: "Comfortable, tooth-colored restorations for cavities.",
    tagline: "Stopping decay before it spreads — and restoring damaged teeth.",
    intro: [
      "A filling treats a cavity before decay can reach the tooth's pulp and turn into a bigger problem. It's also how we repair a tooth that's cracked, chipped, or worn down.",
    ],
    sections: [
      {
        heading: "Filling options",
        bullets: [
          "Tooth-colored composite — resin shaded to match your natural teeth, so the filling blends in",
          "Dental amalgam (\"silver\") — highly durable, and for many patients it lasts a lifetime",
        ],
      },
      {
        heading: "What happens at your visit",
        paragraphs: [
          "Most fillings take under an hour. After a local anesthetic, we remove the decay, clean out the cavity, and — if needed — place a protective liner before shaping and polishing the filling. Composite fillings are built up in thin layers, each one hardened with a curing light, so the color and shape come out just right.",
        ],
      },
    ],
  },
  {
    slug: "dental-crowns",
    name: "Dental Crowns",
    group: "Family & General Dentistry",
    shortBody: "Durable crown restorations to protect and rebuild damaged teeth.",
    tagline: "Restoring a damaged tooth to its full strength and appearance.",
    intro: [
      "A crown rebuilds a tooth that's lost too much structure to fix with a filling alone — often after a root canal, an implant, or severe decay. Dr. Yu's approach is always to save as much of your natural tooth as possible before considering anything more drastic.",
    ],
    sections: [
      {
        heading: "Crown materials",
        bullets: [
          "All-ceramic / all-porcelain — the closest color match to natural teeth, metal-free, usually the choice for front teeth",
          "Porcelain-fused-to-metal — very durable with a close shade match, though a thin dark line can sometimes show, so it's often used on back teeth",
          "All-metal — the most durable option, at the cost of a natural look",
        ],
      },
    ],
  },
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    group: "Family & General Dentistry",
    shortBody: "Everyday dental care for patients of every age, all under one roof.",
    tagline: "Your oral health partner for whatever comes up.",
    intro: [
      "General dentistry covers the full range of care your smile needs day to day — from routine checkups to the restorative work that keeps small issues from becoming big ones.",
    ],
    sections: [
      {
        heading: "What's included",
        bullets: [
          "Cosmetic dentistry",
          "Implant dentistry",
          "Porcelain veneers",
          "Crowns & bridges",
          "Restorative dentistry",
          "Dental cleanings",
          "Digital X-rays & exams",
        ],
      },
      {
        heading: "Why regular care matters",
        paragraphs: [
          "Oral issues can progress quickly, often without any obvious symptoms. Regular visits are what let us catch problems early and help you build habits that keep your mouth healthy between appointments.",
        ],
      },
    ],
  },
  {
    slug: "family-dentistry",
    name: "Family Dentistry",
    group: "Family & General Dentistry",
    shortBody: "Comprehensive dental care for every member of the family, from first tooth to golden years.",
    tagline: "Dental care that grows with your family, from first tooth to golden years.",
    intro: [
      "Every stage of life brings different dental needs. We partner with your family to build a prevention and treatment plan that fits wherever you are right now.",
    ],
    sections: [
      {
        heading: "Care at every age",
        bullets: [
          "Babies — a first visit around 6 months, shortly after the first tooth comes in, to get ahead of cavities and decay",
          "Early childhood — building healthy habits through the transition to permanent teeth",
          "Teens & young adults — orthodontic guidance and cavity prevention",
          "Adults — extra attention after 35, when the risk of tooth loss and gum disease rises",
          "Seniors (65+) — managing dry mouth, oral cancer screening, and gum health",
        ],
      },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    group: "Cosmetic & Orthodontics",
    shortBody: "Aesthetic procedures designed to help your smile look and feel its best.",
    tagline: "From small touch-ups to complete smile makeovers.",
    intro: [
      "Whether you're after one small fix or a full transformation, cosmetic dentistry covers the range of treatments that can get you there.",
    ],
    sections: [
      {
        heading: "Services included",
        bullets: [
          "Dental implants",
          "Dental crowns",
          "Porcelain veneers",
          "Teeth whitening",
          "Bridges",
          "Dental bonding",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "A smile you feel good about affects more than how you look in photos — it shapes confidence, and for teens especially, it can affect academic and social life too.",
        ],
      },
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    group: "Cosmetic & Orthodontics",
    shortBody: "Professional whitening treatments for a brighter smile.",
    tagline: "A brighter smile, done professionally.",
    intro: [
      "In-office whitening works faster and more predictably than anything you'll find over the counter — often lightening teeth by several shades in a single visit.",
    ],
    sections: [
      {
        heading: "What causes staining",
        bullets: [
          "Coffee",
          "Soda",
          "Wine",
          "Tea",
          "Dark berries",
          "Tobacco",
          "Inconsistent oral hygiene",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "How many visits you'll need depends on how stained your teeth are to start. Results last longer when you cut back on the habits that caused the staining in the first place.",
        ],
      },
    ],
  },
  {
    slug: "orthodontics",
    name: "Orthodontics / Clear Aligners",
    group: "Cosmetic & Orthodontics",
    shortBody: "Nearly-invisible, removable aligners for a straighter smile and healthier bite.",
    tagline: "A straighter smile, a healthier bite.",
    intro: [
      "Straightening your teeth isn't just cosmetic — it restores proper function to your bite and jaw. The American Association of Orthodontists recommends a first evaluation by age 7, but plenty of our adult patients are straightening their teeth for the first time, or fixing shifting that's happened over the years.",
    ],
    sections: [
      {
        heading: "Why patients choose clear aligners",
        bullets: [
          "Nearly invisible",
          "Removable — no food restrictions",
          "Doesn't get in the way of brushing or flossing",
          "Each tray targets precise, controlled tooth movement",
          "Progress can be monitored remotely",
        ],
      },
      {
        heading: "Aligners vs. traditional braces",
        paragraphs: [
          "Clear aligners are more comfortable than wires and brackets, removable for eating and hygiene, and far less noticeable day to day.",
        ],
      },
    ],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    group: "Restorative Care",
    shortBody: "Long-term tooth replacement, planned with 3D imaging for precision.",
    tagline: "A permanent, natural-feeling way to replace missing teeth.",
    intro: [
      "An implant is a titanium post placed in the jawbone, topped with a custom crown that looks and functions like a natural tooth. Implants can replace a single tooth, several teeth with a bridge, or a full arch with implant dentures.",
    ],
    sections: [
      {
        heading: "Are you a candidate?",
        paragraphs: [
          "Not everyone is a candidate for implants, but most patients are — the main requirement is enough healthy jawbone to support the post. Success rates run as high as 98%, thanks to how far the techniques have come.",
        ],
      },
      {
        heading: "The process",
        bullets: [
          "A titanium post is placed into the jawbone",
          "Osseointegration — the bone fuses to the post over the following months",
          "An abutment connector is attached",
          "A custom crown completes the tooth",
        ],
      },
    ],
  },
  {
    slug: "root-canals",
    name: "Root Canals",
    group: "Restorative Care",
    shortBody: "Endodontic treatment to save infected or damaged teeth.",
    tagline: "Saving an infected tooth — before it becomes a bigger problem.",
    intro: [
      "When the pulp inside a tooth — the nerve, blood vessels, and connective tissue — becomes infected or inflamed, a root canal is often what saves the tooth from extraction.",
    ],
    sections: [
      {
        heading: "Signs you may need one",
        bullets: [
          "Sharp tooth pain, especially at night",
          "Jaw pain, bad breath, fever, or pus — signs of a possible abscess",
          "Sharp sensitivity to hot or cold",
          "A tooth that's darkened or discolored",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "Masking the pain with medication doesn't fix an infection — it just delays treatment. Most root canals take two visits: the procedure itself, usually up to about an hour, followed by placing a crown, since the tooth loses much of its structure along the way.",
        ],
      },
    ],
  },
  {
    slug: "sleep-apnea-treatment",
    name: "Sleep Apnea Treatment (Vivos)",
    group: "Whole-Body Wellness",
    shortBody: "Vivos sleep appliances to help improve airway health and obstructive sleep apnea.",
    tagline: "Treating the root cause of sleep apnea — an underdeveloped airway.",
    intro: [
      "A surprising number of sleep apnea cases trace back to jaws that didn't develop enough room for the airway — which is part of why so many adults who had orthodontic work or wisdom teeth removed still end up with sleep-disordered breathing later in life.",
    ],
    sections: [
      {
        heading: "Health risks left untreated",
        bullets: [
          "Hypertension",
          "Stroke",
          "Cardiomyopathy and heart failure",
          "Diabetes",
          "Heart attack",
          "Job impairment and workplace accidents",
          "Motor vehicle crashes",
          "Academic underachievement in children",
        ],
      },
      {
        heading: "Symptoms to watch for",
        bullets: [
          "Adults — snoring, daytime fatigue, restless sleep, gasping or choking awake, dry mouth, trouble concentrating, mood changes, night sweats, frequent urination, headaches",
          "Children — poor school performance, daytime mouth breathing, unusual sleep positions, night sweating, behavioral or learning issues",
        ],
      },
      {
        heading: "The Vivos difference",
        paragraphs: [
          "Vivos is an oral appliance therapy for mild-to-moderate obstructive sleep apnea, guided by dentists trained in the system and coordinated with your physician.",
        ],
      },
      {
        heading: "What treatment looks like",
        bullets: [
          "Initial consultation and diagnostics",
          "Comprehensive diagnosis with a multidisciplinary team",
          "A personalized Airway Intelligence Report",
          "A treatment course of roughly 12–24 months",
        ],
      },
    ],
  },
  {
    slug: "evoke-facial-remodeling",
    name: "Evoke Facial Remodeling",
    group: "Whole-Body Wellness",
    shortBody:
      "A hands-free, pain-free radiofrequency treatment for facial and chin contouring — no surgery required.",
    tagline: "A needle-free way to lift and redefine your face, neck, and jawline.",
    intro: [
      "Evoke uses radiofrequency energy to remodel facial tissue non-surgically — no needles, incisions, or downtime — targeting the face, neck, and jawline for a more defined look.",
    ],
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "Radiofrequency delivers even heating to the deeper layers of skin around the jowls and neck. The device's technology keeps the heating balanced across the whole treatment area for consistent results.",
        ],
      },
      {
        heading: "What it feels like",
        paragraphs: [
          "Most patients describe it as a warm facial. It's painless, and you can read or relax through the session — there's even a call button if you'd like to pause at any point.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "There's no downtime. You're free to go straight back to your normal routine, with results building gradually over a personalized number of sessions.",
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export function servicesByGroup(group: string) {
  return SERVICES.filter((service) => service.group === group);
}
