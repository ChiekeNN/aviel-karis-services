export type ServiceGroup =
  | "Procurement & Logistics"
  | "Marine & Offshore"
  | "Engineering & Pipeline"
  | "HSE & Equipment";

export type IconKey =
  | "truck"
  | "pipe"
  | "gauge"
  | "flame"
  | "zap"
  | "building"
  | "ship"
  | "extinguisher"
  | "shield"
  | "wrench";

export interface Service {
  id: string;
  title: string;
  group: ServiceGroup;
  icon: IconKey;
  summary: string;
  bullets: string[];
  detail?: { heading: string; body: string; highlights: { label: string; value: string }[] };
}

export const SERVICE_GROUPS: ("All" | ServiceGroup)[] = [
  "All",
  "Procurement & Logistics",
  "Marine & Offshore",
  "Engineering & Pipeline",
  "HSE & Equipment",
];

export const SERVICES: Service[] = [
  {
    id: "procurement",
    title: "Procurement & Logistics",
    group: "Procurement & Logistics",
    icon: "truck",
    summary:
      "Major global OEM sourcing through a CIPSMN-certified supply chain team, with warehousing, forwarding and clearing.",
    bullets: [
      "Direct global OEM sourcing",
      "CIPSMN-certified supply chain",
      "Warehousing & global forwarding/clearing",
      "Inventory financing",
      "7-day responsive communication",
    ],
    detail: {
      heading: "Global procurement power, delivered from Port Harcourt",
      body: "Our supply chain team is certified by the Chartered Institute of Purchasing and Supply Management of Nigeria (CIPSMN). Through direct OEM partnerships we source critical oilfield materials from major global manufacturers, then manage warehousing, international forwarding and customs clearing end-to-end. Inventory financing keeps client projects moving, and our communication lines are monitored seven days a week — guided by our motto: deliver what the customer wants, quickly and in the cheapest possible way.",
      highlights: [
        { label: "Accreditation", value: "CIPSMN" },
        { label: "Sourcing", value: "Direct OEM" },
        { label: "Response", value: "7 days / week" },
      ],
    },
  },
  {
    id: "pipeline",
    title: "Pipeline Construction & Fabrication",
    group: "Engineering & Pipeline",
    icon: "pipe",
    summary:
      "Pipeline supply, fabrication and laying across OCTG, GRE, GRP and HDPE pipe specifications.",
    bullets: [
      "OCTG pipe supply",
      "GRE & GRP composite pipelines",
      "HDPE pipeline systems",
      "Fabrication & laying",
    ],
    detail: {
      heading: "From pipe supply to laid, tested lines",
      body: "Aviel Karis supplies, fabricates and lays pipelines across the full range of modern specifications — Oil Country Tubular Goods (OCTG), Glass Reinforced Epoxy (GRE), Glass Reinforced Plastic (GRP) and High-Density Polyethylene (HDPE). Our crews operate across land and swamp terrains of the Niger Delta, conforming strictly to international oilfield client specifications.",
      highlights: [
        { label: "Specifications", value: "OCTG · GRE · GRP · HDPE" },
        { label: "Terrain", value: "Land & Swamp" },
        { label: "Scope", value: "Supply · Fabricate · Lay" },
      ],
    },
  },
  {
    id: "flow",
    title: "Flow Control & Measurement",
    group: "Engineering & Pipeline",
    icon: "gauge",
    summary:
      "Supply, maintenance, calibration and repair of flow control products, valves and metering systems.",
    bullets: [
      "Valve supply & repair",
      "Metering systems",
      "Calibration services",
      "Scheduled maintenance",
    ],
  },
  {
    id: "process",
    title: "Process, Heat Transfer & Vessels",
    group: "Engineering & Pipeline",
    icon: "flame",
    summary:
      "Supply and scheduled maintenance of heat exchangers, pressure vessels and process pipeline equipment.",
    bullets: [
      "Heat exchangers",
      "Pressure vessels",
      "Process pipeline equipment",
      "Scheduled maintenance",
    ],
  },
  {
    id: "electrical",
    title: "Electrical & Instrumentation",
    group: "Engineering & Pipeline",
    icon: "zap",
    summary:
      "Supply of heavy-duty industrial electrical cables, explosion-proof accessories and specialized fittings.",
    bullets: [
      "Heavy-duty industrial cables",
      "Explosion-proof accessories",
      "Specialized fittings",
    ],
  },
  {
    id: "civil",
    title: "Civil & Structural Engineering",
    group: "Engineering & Pipeline",
    icon: "building",
    summary:
      "Heavy civil engineering in land and swamp terrains: roads, industrial slabs, reinforced concrete and facility maintenance.",
    bullets: [
      "Road construction",
      "Industrial support slabs",
      "Reinforced concrete works",
      "Facility maintenance",
    ],
  },
  {
    id: "marine",
    title: "Offshore Marine Services",
    group: "Marine & Offshore",
    icon: "ship",
    summary:
      "Multipurpose offshore support operations, modern navigational support vessels and rig operational support.",
    bullets: [
      "Multipurpose offshore support",
      "Modern navigational support vessels",
      "Rig operational support",
      "Sub-Saharan Africa coverage",
    ],
    detail: {
      heading: "Offshore support across Sub-Saharan Africa",
      body: "Our marine division delivers multipurpose offshore support operations using modern navigational support vessels. We provide rig operational support to upstream operators across the Niger Delta and wider Sub-Saharan African waters, with the same zero-incident safety commitment that governs every Aviel Karis operation.",
      highlights: [
        { label: "Coverage", value: "Sub-Saharan Africa" },
        { label: "Fleet", value: "Modern support vessels" },
        { label: "Safety", value: "Zero-incident" },
      ],
    },
  },
  {
    id: "fire",
    title: "Fire Fighting & Safety Installation",
    group: "HSE & Equipment",
    icon: "extinguisher",
    summary:
      "Supply, certified installation and maintenance of fire suppression and industrial safety equipment.",
    bullets: [
      "Fire suppression systems",
      "Certified installation",
      "Maintenance programmes",
      "Industrial safety equipment",
    ],
  },
  {
    id: "ppe",
    title: "Personal Protective Equipment (PPE)",
    group: "HSE & Equipment",
    icon: "shield",
    summary:
      "EN-certified high-grade PPE supply with bulk discount capabilities for heavy industrial, mining and oil operations.",
    bullets: [
      "EN-registered PPE",
      "Surpasses US ANSI baselines",
      "Bulk discount capability",
      "Oil, mining & heavy industry",
    ],
    detail: {
      heading: "PPE engineered to European standards",
      body: "We supply PPE registered to European (EN) standards — specifications that surpass US ANSI baselines — sourced through direct OEM partnerships. Our bulk discount capabilities make high-grade protection cost-effective for heavy industrial, mining and oil & gas workforces of any size.",
      highlights: [
        { label: "Standard", value: "EN registered" },
        { label: "Benchmark", value: "Exceeds ANSI" },
        { label: "Pricing", value: "Bulk discounts" },
      ],
    },
  },
  {
    id: "leasing",
    title: "Equipment Leasing & Manpower",
    group: "HSE & Equipment",
    icon: "wrench",
    summary:
      "Heavy equipment leasing, specialized hand tools and technical manpower outsourcing.",
    bullets: [
      "Heavy equipment leasing",
      "Specialized hand tools",
      "Technical manpower outsourcing",
    ],
  },
];

export const PILLARS = [
  { name: "Trust", text: "Transparent dealings and dependable commitments with every client and partner." },
  { name: "Experience", text: "Operational know-how earned across the Niger Delta since 2015." },
  { name: "Reliability", text: "Services that meet or exceed expectations, every time." },
  { name: "Responsiveness", text: "Communication lines monitored seven days a week." },
  { name: "Excellence", text: "World-class quality delivered by well-trained, highly motivated professionals." },
];

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "The Company" },
  { href: "#services", label: "Capabilities" },
  { href: "#quality", label: "Standards" },
  { href: "#structure", label: "Governance" },
  { href: "#contact", label: "Contact" },
];

export const ADDRESS =
  "No 19 Obudu Street, Mile 1 Rumuwoji, Port Harcourt, Rivers State, Nigeria.";

export const STATS = [
  { value: "2015", label: "Incorporated in Nigeria", note: "Port Harcourt HQ" },
  { value: "100%", label: "Indigenous Nigerian content", note: "Local content first" },
  { value: "10", label: "Integrated capabilities", note: "Upstream to industrial" },
  { value: "24/7", label: "Supply logistics desk", note: "7-day response" },
];

export const CREDENTIALS = [
  "CIPSMN-certified supply chain",
  "EN-registered PPE",
  "Direct OEM partnerships",
  "Zero-incident safety commitment",
  "OCTG · GRE · GRP · HDPE",
  "Niger Delta · Nationwide · Sub-Saharan Africa",
  "100% indigenous Nigerian content",
  "Inventory financing available",
];

export const SECTORS = [
  {
    index: "01",
    name: "Upstream Oil & Gas",
    text: "Procurement, flow control, process equipment, drilling support materials and rig operational support for upstream operators.",
    icon: "flame" as IconKey,
  },
  {
    index: "02",
    name: "Midstream & Pipeline",
    text: "Pipeline supply, fabrication and laying across OCTG, GRE, GRP and HDPE — executed on land and swamp terrain.",
    icon: "pipe" as IconKey,
  },
  {
    index: "03",
    name: "Marine & Offshore",
    text: "Multipurpose offshore support, modern navigational support vessels and logistics across Sub-Saharan African waters.",
    icon: "ship" as IconKey,
  },
  {
    index: "04",
    name: "Industrial & Manufacturing",
    text: "Heavy-duty cabling, explosion-proof fittings, heat transfer equipment, fire safety and high-grade PPE supply.",
    icon: "building" as IconKey,
  },
  {
    index: "05",
    name: "Public & Civil Infrastructure",
    text: "Roads, industrial support slabs, reinforced concrete works and facility maintenance in demanding terrains.",
    icon: "wrench" as IconKey,
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Define the requirement",
    text: "Share drawings, a material take-off or a specification. Our procurement and engineering desks review it together so scope, standards and delivery windows are clear from day one.",
  },
  {
    step: "02",
    title: "Source & verify",
    text: "We price through direct OEM channels, confirm the applicable standards — OCTG, GRE, GRP, HDPE, EN or ANSI — and issue a competitive, compliant quotation.",
  },
  {
    step: "03",
    title: "Mobilise",
    text: "Warehousing, international forwarding, customs clearing and equipment mobilisation are coordinated in-house, with inventory financing available where it protects project cash flow.",
  },
  {
    step: "04",
    title: "Deliver & document",
    text: "Field crews execute to international oilfield client specifications under a zero-incident safety commitment, with communication lines monitored seven days a week.",
  },
];

export const FAQS = [
  {
    q: "How quickly will a procurement inquiry be acknowledged?",
    a: "Procurement requests submitted through our RFQ desk are acknowledged within one business day. Inquiry lines are monitored seven days a week, including for urgent field requirements and the 24/7 supply logistics desk.",
  },
  {
    q: "Which standards does Aviel Karis work to?",
    a: "Services are delivered in line with our Quality Policy — meeting or exceeding client expectations while complying with all applicable statutory regulations — and conform strictly to international oilfield client specifications. Our PPE is registered to European (EN) standards, which surpass US ANSI baselines.",
  },
  {
    q: "Do you buy directly from manufacturers?",
    a: "Yes. Direct OEM partnerships are core to our operating model: they remove intermediary mark-ups, shorten lead times and give clients traceable supply. Our supply chain team is certified by the Chartered Institute of Purchasing and Supply Management of Nigeria (CIPSMN).",
  },
  {
    q: "Which regions do you cover?",
    a: "We are headquartered in Port Harcourt, Rivers State, and serve the Niger Delta region and nationwide Nigeria. Our marine division extends offshore support across Sub-Saharan African waters.",
  },
  {
    q: "Can you support bulk PPE and equipment rollouts?",
    a: "Yes. Bulk discount capability is built into our PPE supply line, and we support heavy equipment leasing, specialized hand tools and technical manpower outsourcing for projects of varying scale.",
  },
  {
    q: "Is Aviel Karis an indigenous company?",
    a: "Aviel Karis Services Ltd is a 100% indigenous Nigerian company, incorporated in 2015. We champion local content by developing Nigerian technical talent, engaging local supply chains and retaining value within the communities where we operate.",
  },
];
