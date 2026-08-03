// ---------------------------------------------------------------------------
// Central site content for One Bharat Engineering Services
// Edit values here to update contact details, services, projects, etc.
// ---------------------------------------------------------------------------

export const company = {
  name: "One Bharat Engineering Services",
  shortName: "One Bharat",
  domain: "onebharatengineeringservices.com",
  tagline: "Engineering Excellence for Cement & Heavy Industries",
  intro:
    "One Bharat Engineering Services is a specialist industrial engineering consultancy delivering end-to-end technical solutions for the cement, power, steel and process industries — from feasibility and greenfield projects to plant optimization, major maintenance and manpower.",
  foundedExperience: "40+",
  phonePrimary: "+91 98765 43210",
  phoneSecondary: "+91 91234 56780",
  email: "info@onebharatengineeringservices.com",
  emailAlt: "projects@onebharatengineeringservices.com",
  address: {
    line1: "One Bharat Engineering Services",
    line2: "404/258/5B, New Sohbatiya Bagh",
    city: "Prayagraj, Uttar Pradesh",
    pin: "211006",
    country: "India",
  },
  hours: "Mon – Sat · 9:00 AM – 7:00 PM IST",
  social: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    instagram: "#",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "40+", label: "Years of combined expertise" },
  { value: "150+", label: "Projects delivered" },
  { value: "60+", label: "Clients across India & abroad" },
  { value: "7", label: "Core industries served" },
];

export type Service = {
  slug: string;
  title: string;
  icon: string;
  image: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "technical-studies",
    title: "Technical Studies & Process Optimization",
    icon: "chart",
    image: "/images/process-pipes.jpg",
    summary:
      "Data-driven diagnostics that unlock capacity, quality and cost improvements across the pyro, grinding and material-handling circuits.",
    points: [
      "Pyro section analysis, heat & mass balance and optimization",
      "Raw mill, cement mill and coal mill technical studies",
      "Fan audits, gas circuit and false-air surveys",
      "Raw-mix design, homogenization & clinker quality programs",
      "White cement and oil-well cement process guidance",
      "Civil & mechanical stability assessments",
    ],
  },
  {
    slug: "plant-maintenance",
    title: "Plant Maintenance & Overhauling",
    icon: "wrench",
    image: "/images/welding.jpg",
    summary:
      "Precision maintenance for rotating and static equipment — planned shutdowns, breakdown recovery and life-extension of critical assets.",
    points: [
      "Kiln maintenance — tyres, rollers, girth gear & alignment",
      "Ball mill repairs and slide-shoe / trunnion restoration",
      "Gearbox overhaul — spur, worm, helical & planetary",
      "On-site machining, crack repair & specialised welding",
      "Compressor, blower and fan maintenance",
      "Hot & cold kiln alignment with laser instrumentation",
    ],
  },
  {
    slug: "project-management",
    title: "Project Management & EPC Consultancy",
    icon: "blueprint",
    image: "/images/engineers-team.jpg",
    summary:
      "Owner's-engineer support that keeps greenfield and expansion projects on scope, on schedule and on budget.",
    points: [
      "Greenfield cement & grinding-unit projects",
      "Expansion, retrofit and de-bottlenecking initiatives",
      "Plant layout, basic & detailed engineering design",
      "Procurement support and vendor evaluation",
      "Erection supervision, commissioning & performance guarantee runs",
      "Mine geological surveys and reserve assessment",
    ],
  },
  {
    slug: "material-handling",
    title: "Fly Ash & Material Handling Systems",
    icon: "conveyor",
    image: "/images/logistics-trucks.jpg",
    summary:
      "Turnkey handling, classification and packing solutions for fly ash, clinker, cement and allied bulk materials.",
    points: [
      "Port-based and rail-based loading / unloading systems",
      "Fly-ash classification and blending facilities",
      "Lightweight block & AAC feed plants",
      "Jumbo-bag packing systems with in-line weighing",
      "Pneumatic conveying and silo automation",
      "Dust suppression and pollution-control integration",
    ],
  },
  {
    slug: "energy-audits",
    title: "Energy & Efficiency Audits",
    icon: "bolt",
    image: "/images/wind-energy.jpg",
    summary:
      "Certified energy audits that cut specific power and heat consumption while improving reliability and sustainability.",
    points: [
      "Kiln and mill thermal energy audits",
      "Electrical energy and specific power consumption studies",
      "Compressed-air and utility optimization",
      "Alternative fuel & raw material (AFR) feasibility",
      "CO₂ reduction and green-cement roadmaps",
      "Benchmarking against global best practice",
    ],
  },
  {
    slug: "training-manpower",
    title: "Training & Manpower Solutions",
    icon: "people",
    image: "/images/factory-robots.jpg",
    summary:
      "Skilled engineers, operators and structured training programs that build capability inside your plant.",
    points: [
      "Operator and technician competency training",
      "CCR / process control operator development",
      "Deputation of trained engineers & technicians",
      "Shutdown and commissioning manpower teams",
      "Safety, housekeeping and 5S programs",
      "Troubleshooting support for steel & petrochemical plants",
    ],
  },
];

export type Industry = {
  name: string;
  icon: string;
  image: string;
  description: string;
};

export const industries: Industry[] = [
  {
    name: "Cement Manufacturing",
    icon: "factory",
    image: "/images/plant-refinery.jpg",
    description:
      "Our core strength — integrated plants, grinding units, pyro-processing and quality systems.",
  },
  {
    name: "Thermal Power",
    icon: "bolt",
    image: "/images/wind-energy.jpg",
    description:
      "Fly-ash handling, boiler auxiliaries, efficiency audits and ash utilisation projects.",
  },
  {
    name: "Steel & Casting",
    icon: "beam",
    image: "/images/factory-robots.jpg",
    description:
      "Troubleshooting, equipment reliability and maintenance for integrated steel plants.",
  },
  {
    name: "Lime Production",
    icon: "flame",
    image: "/images/welding.jpg",
    description:
      "Kiln process guidance, refractory management and productivity improvement.",
  },
  {
    name: "Minerals & GGBS",
    icon: "gem",
    image: "/images/logistics-trucks.jpg",
    description:
      "Grinding, classification and blending systems for slag and mineral processing.",
  },
  {
    name: "Petrochemical",
    icon: "drum",
    image: "/images/process-pipes.jpg",
    description:
      "Rotating-equipment support, shutdown planning and reliability engineering.",
  },
  {
    name: "Sugar & Process",
    icon: "leaf",
    image: "/images/solar-farm.jpg",
    description:
      "Utility optimisation, boiler and material-handling support for process plants.",
  },
];

export type Project = {
  client: string;
  location: string;
  scope: string;
  category: string;
  year: string;
};

export const projects: Project[] = [
  {
    client: "Eshan Minerals — Greenfield Cement Project",
    location: "Central India",
    scope:
      "Owner's engineer for a 400 TPD × 6-line greenfield cement plant — basic engineering, layout and commissioning strategy.",
    category: "Project Management",
    year: "2026",
  },
  {
    client: "Jaycee Build Corp",
    location: "Gujarat",
    scope:
      "Engineering and commissioning of a fly-ash grinding mill with classification and packing.",
    category: "Material Handling",
    year: "2025",
  },
  {
    client: "Unity Cement",
    location: "Maharashtra",
    scope:
      "Pyro-processing optimization study — clinker quality, heat balance and capacity enhancement.",
    category: "Technical Studies",
    year: "2025",
  },
  {
    client: "Thyssen — Pune Works",
    location: "Pune, Maharashtra",
    scope:
      "Cyclone crack analysis, structural stability assessment and repair methodology.",
    category: "Maintenance",
    year: "2024",
  },
  {
    client: "Tata Chemicals",
    location: "Mithapur, Gujarat",
    scope:
      "Energy audit and utility optimisation across grinding and material-handling circuits.",
    category: "Energy Audit",
    year: "2024",
  },
  {
    client: "Dalmia Cement",
    location: "Assam",
    scope:
      "Kiln alignment, girth-gear inspection and preventive maintenance planning.",
    category: "Maintenance",
    year: "2024",
  },
  {
    client: "Adani Cement",
    location: "Rajpura, Punjab",
    scope:
      "Fan audit and gas-circuit optimisation to reduce specific power consumption.",
    category: "Technical Studies",
    year: "2023",
  },
  {
    client: "United Cement",
    location: "Nepal",
    scope:
      "Commissioning support and operator training for a new grinding unit.",
    category: "Training",
    year: "2023",
  },
];

export type Leader = {
  name: string;
  role: string;
  bio: string;
};

export const leadership: Leader[] = [
  {
    name: "Mr. Rajeev Sharma",
    role: "Founder & Managing Director",
    bio: "B.Tech (Mechanical) with 40+ years across leading Indian and international cement groups, including senior plant-head and project-director roles in India and Africa.",
  },
  {
    name: "Mr. Anil Deshpande",
    role: "Director — Process & Technology",
    bio: "Process specialist with three decades of pyro-processing, grinding optimization and quality-systems experience across 30+ plants.",
  },
  {
    name: "Mr. S. Krishnan",
    role: "Head — Projects & Commissioning",
    bio: "Greenfield and expansion project leader with a track record of on-time, on-budget delivery from engineering through performance guarantee.",
  },
];

export const values = [
  {
    title: "Technical Integrity",
    icon: "shield",
    text: "Recommendations grounded in data, first-principles engineering and decades of plant-floor experience.",
  },
  {
    title: "Reliability",
    icon: "clock",
    text: "We commit to realistic timelines and deliver — during shutdowns, commissioning and emergencies alike.",
  },
  {
    title: "Safety First",
    icon: "shield",
    text: "Every intervention is planned around the safety of your people, equipment and environment.",
  },
  {
    title: "Partnership",
    icon: "handshake",
    text: "We work as an extension of your team, transferring knowledge so improvements outlast our engagement.",
  },
];

export const process = [
  {
    step: "01",
    title: "Assess",
    text: "Site study, data collection and diagnostics to understand the real problem — not just the symptoms.",
  },
  {
    step: "02",
    title: "Engineer",
    text: "A clear technical solution with scope, methodology, timeline and measurable targets.",
  },
  {
    step: "03",
    title: "Execute",
    text: "Hands-on supervision, quality control and safe execution by experienced engineers.",
  },
  {
    step: "04",
    title: "Sustain",
    text: "Performance verification, documentation and training so results are sustained long term.",
  },
];

// ---------------------------------------------------------------- Careers ---

// The company's core scope of work — what a new joiner gets exposure to.
export const careerAreas = [
  {
    icon: "conveyor",
    title: "Supply, Erection & Commissioning",
    items: [
      "RMC (Ready-Mix Concrete) batching plants",
      "Cement bulk terminals",
      "Concrete-strengthening chemicals & admixtures",
      "Grinding aids for clinker grinding",
    ],
  },
  {
    icon: "blueprint",
    title: "Consultancy",
    items: [
      "SLA (Service Level Agreement) model for cement plants",
      "Specialised manpower supply",
      "Clinkerisation, grinding & packing operations",
    ],
  },
  {
    icon: "people",
    title: "Training & Development",
    items: [
      "Master-trainer led programs",
      "GET / DET mentoring for O&M",
      "Innovation and continuous-improvement culture",
    ],
  },
];

// Disciplines / functions the company hires for.
export const hiringDisciplines = [
  {
    icon: "flame",
    title: "Clinkerisation",
    text: "Kiln, pyro-processing and refractory operations — from CCR to the platform.",
  },
  {
    icon: "chart",
    title: "Grinding",
    text: "Raw, cement and coal mill operation, optimisation and quality control.",
  },
  {
    icon: "conveyor",
    title: "Packing & Dispatch",
    text: "Packing plant operation, bulk loading and material-handling systems.",
  },
  {
    icon: "wrench",
    title: "Erection & Commissioning",
    text: "Mechanical erection, alignment and commissioning of plant and equipment.",
  },
  {
    icon: "beam",
    title: "Batching Plant O&M",
    text: "RMC batching plant operation, maintenance and cement bulk terminals.",
  },
  {
    icon: "blueprint",
    title: "Process & Consultancy",
    text: "Process engineering, SLA delivery and technical consultancy support.",
  },
];

export const careerBenefits = [
  {
    icon: "people",
    title: "Learn from veterans",
    text: "Work shoulder-to-shoulder with engineers who have 30–50 years of plant experience.",
  },
  {
    icon: "factory",
    title: "Real plant exposure",
    text: "Hands-on assignments across live cement, power and process plants — not just theory.",
  },
  {
    icon: "bolt",
    title: "Fast-track growth",
    text: "Structured GET/DET development that moves capable engineers into responsibility quickly.",
  },
  {
    icon: "shield",
    title: "Safety-first culture",
    text: "Rigorous safety standards and mentorship on every site you are deputed to.",
  },
];

export const testimonials = [
  {
    quote:
      "Their pyro-section study gave us a measurable jump in clinker output with lower heat consumption. The team's depth of experience is exceptional.",
    author: "Plant Head",
    org: "Integrated Cement Plant, Western India",
  },
  {
    quote:
      "During a critical kiln shutdown, One Bharat's engineers delivered flawless alignment and got us back online ahead of schedule.",
    author: "Maintenance Manager",
    org: "Cement Group, South India",
  },
  {
    quote:
      "Professional, safety-focused and technically sound. They feel like part of our own team.",
    author: "Project Director",
    org: "Greenfield Cement Project",
  },
];
