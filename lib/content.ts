export const profile = {
  name: "Denis Omondi Mboya",
  title: "Zoho Developer & Full-Stack Developer",
  subtitle: "React · Node.js · TypeScript · Convex",
  location: "Nairobi, Kenya",
  phone: "+254 768 819 481",
  phoneAlt: "+254 769 826 584",
  email: "denisomondi294@gmail.com",
  linkedin: "https://www.linkedin.com/in/denis-omondi00",
  github: "https://github.com/dmboya882-hash",
  summary:
    "Zoho Developer and full-stack software developer with hands-on experience building and automating business systems on the Zoho platform (CRM, Books, Inventory) using Deluge scripting, custom modules, workflows, and blueprints. Combines platform development expertise with modern web development skills in React, Node.js, TypeScript, and Convex to design end-to-end solutions — from backend automation and API integrations to responsive front-end interfaces.",
};

export const skillGroups = [
  {
    label: "Zoho Development",
    items: [
      "Zoho CRM front-end & back-end administration",
      "CRM customization & configuration",
      "Deluge scripting & automation",
      "Custom functions & workflow rules",
      "Blueprints & validation rules",
      "Zoho Books",
      "Zoho Inventory",
      "Zoho Analytics / reporting",
    ],
  },
  {
    label: "Software Development",
    items: [
      "React",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Convex",
      "REST API integrations",
      "SQL & database management",
    ],
  },
  {
    label: "Platform & Tools",
    items: [
      "Shopify administration",
      "Data migration & system configuration",
      "Dashboard & report development",
      "E-commerce operations",
    ],
  },
];

export const experience = [
  {
    role: "Zoho Developer",
    org: "Ika Three Sixty (Zoho Premium Partner)",
    period: "Oct 2025 — Present",
    bullets: [
      "Develop and maintain Deluge scripts, custom functions, and automation workflows to extend Zoho CRM functionality and streamline business processes.",
      "Design and build custom Zoho CRM modules, page layouts, blueprints, workflow rules, and validation rules to meet client business requirements.",
      "Administer front-end and back-end Zoho CRM configuration, including user roles, permissions, and system architecture.",
      "Implement and support Zoho Books and Zoho Inventory solutions, including custom scripting and third-party integrations.",
      "Build reports, dashboards, and analytics views for business intelligence and data-driven decision-making.",
      "Perform data imports, migrations, and API-based integrations between Zoho and other business systems.",
      "Apply JavaScript/TypeScript knowledge to extend Zoho functionality via custom widgets and integrations.",
      "Troubleshoot application issues, provide end-user support, and conduct client onboarding, training, and system demonstrations.",
    ],
  },
  {
    role: "Technical Support",
    org: "Kenya Orient Insurance Ltd",
    period: "Jan 2025 — Mar 2025",
    bullets: [
      "Provided hardware, software, and network troubleshooting support across the organization.",
      "Delivered user training and maintained system functionality and uptime.",
      "Diagnosed and resolved technical issues to improve end-user experience.",
    ],
  },
  {
    role: "Data Analyst (Freelance)",
    org: "Self-Employed",
    period: "Jan 2023 — Present",
    bullets: [
      "Analyzed datasets using SQL and Excel to identify business trends and generate actionable insights.",
      "Built dashboards and automated reports to support data-driven decision-making for clients.",
      "Conducted market research and data analysis to support business strategy.",
    ],
  },
];

export const projects = [
  {
    title: "Multi-Branch Inventory & Stock Transfer Automation System",
    tag: "Zoho Books · Zoho Inventory · Deluge · REST APIs",
    description:
      "Designed and automated a multi-branch inventory request and fulfillment workflow spanning Branch → Purchase Request → Approval → Warehouse Fulfillment → Transfer → Delivery → Completion. Built on custom Purchase Request and Transfer Order modules with branch/warehouse mapping, stock and quantity validation, Deluge automation, Zoho Books + Zoho Inventory integration via API calls, blueprint-driven approval workflow, email notifications, and error handling.",
    approach:
      "Modeled the full request lifecycle as two custom modules — Purchase Request and Transfer Order — linked to branch and warehouse records. Deluge functions handle each blueprint transition: validating requested items against live stock in Zoho Inventory before a request can move to fulfillment, and pushing confirmed transfers into Zoho Books via API calls so stock and financial records stay in sync.",
    challenges:
      "Keeping stock validation accurate across branches meant querying Zoho Inventory in real time rather than relying on cached module data, and building error handling so a failed API call rolled a blueprint transition back instead of leaving a request stuck half-approved.",
  },
  {
    title: "Automated Inventory Landed Cost Calculation in Zoho Books",
    tag: "Zoho Books · Zoho Inventory · Deluge",
    description:
      "Built item-level landed cost calculations in Zoho Books using custom Deluge logic against inventory data, working around limitations in the Kenyan edition of Zoho Books to get accurate automated cost and financial reporting.",
    approach:
      "Wrote custom Deluge logic to calculate landed cost at the item level, factoring in cost inputs the Kenyan edition of Zoho Books doesn't handle natively, then fed the result back into inventory and financial records.",
    challenges:
      "The core challenge was platform limitation, not logic: the Kenya edition lacks certain landed-cost fields available elsewhere, so the calculation had to be reconstructed outside the standard UI while still reconciling with financial reporting.",
  },
  {
    title: "Zoho CRM Sales Process Automation & Customization",
    tag: "Zoho CRM · Blueprints · Workflows",
    description:
      "End-to-end CRM customization for a sales process: custom modules, fields, layouts, and page configuration, backed by workflows, blueprints, validation rules, custom functions, and user permissions to automate the process.",
    approach:
      "Rebuilt the sales process end-to-end inside CRM: custom modules and fields for the data that mattered, page layouts matched to how the sales team works, and blueprints to enforce the process stage by stage, backed by validation rules and custom functions.",
    challenges:
      "Balancing enforcement with flexibility — blueprints needed to guide reps through the correct stages without blocking legitimate edge cases, which took a few rounds of workflow and validation-rule tuning with the sales team.",
  },
  {
    title: "AI-Powered Zoho CRM Assistant",
    tag: "Zia · Zoho CRM · Automation",
    description:
      "Explored Zia Agent and Zia Smart Prompts to give Zoho CRM an AI-assisted layer — routing a customer query through Zia to CRM data and triggering an automated response or action, on top of standard CRM automation.",
    approach:
      "Used Zia Agent and Zia Smart Prompts to route a customer query against live CRM data, then trigger an automated response or action instead of requiring an agent to look records up manually.",
    challenges:
      "Getting Zia's responses to stay grounded in actual CRM data, rather than generic replies, took careful prompt design and testing against real record scenarios.",
  },
  {
    title: "Zoho Creator Employee Payslip Management System",
    tag: "Zoho Creator",
    description:
      "Designed a payslip system from a business requirement into a working application in Zoho Creator — employee information, earnings, deductions, and net pay calculations, with forms and reports covering the full payslip structure.",
    approach:
      "Built the payslip system as a Zoho Creator app from the ground up: forms for employee information, earnings, and deductions, calculation logic for net pay, and reports formatted as an actual payslip.",
    challenges:
      "Getting the calculation logic right across different earning/deduction combinations, and making the generated reports look like a payslip someone could hand to an employee, not just a data table.",
  },
  {
    title: "Zoho Transfer Order Automation",
    tag: "Deluge · Zoho CRM · Zoho Books",
    description:
      "A Deluge script that automates stock transfer orders between Zoho branch warehouses, triggered directly from a purchase request — removing a manual handoff between the sales and warehouse teams.",
    approach:
      "A Deluge script triggered directly from an approved purchase request, generating the matching transfer order between branch warehouses automatically.",
    challenges:
      "Making sure the trigger only fired once per approved request, and handled partial-stock scenarios without creating duplicate or incorrect transfer orders.",
  },
  {
    title: "Vehicle Sync — Books to Creator",
    tag: "Deluge · Zoho Books · Zoho Creator",
    description:
      "A sync script that reads vehicle records from a custom module in Zoho Books and creates or updates matching Vehicle records in a Zoho Creator service-center app, keeping both systems consistent.",
    approach:
      "A sync script that reads vehicle records from a custom module in Zoho Books and creates or updates matching records in a Zoho Creator service-center app.",
    challenges:
      "Keeping both systems consistent meant deciding how to detect updates versus new records, and avoiding duplicate Creator records on repeated syncs.",
  },
  {
    title: "Comex Homes Sales Reports",
    tag: "Zoho CRM · Reporting",
    description:
      "Two custom Zoho CRM reports built for a real-estate client, pulling unit number, unit type, purchaser, sales person, and sale amount from the Opportunities and Properties modules — one report per project (Astana and Reveal) so sales and receivables are easy to track.",
    approach:
      "Built two Zoho CRM reports pulling unit number, type, purchaser, sales person, and sale amount from the Opportunities and Properties modules — one report per project, Astana and Reveal.",
    challenges:
      "The data needed for the report was split across two modules with different field names, so the report had to correctly join Opportunity and Property data without a native lookup for every field.",
  },
  {
    title: "3CX–Zoho Telephony Integration Review",
    tag: "Zoho CRM · Zoho Desk · 3CX",
    description:
      "Diagnosed a gap in a 3CX–Zoho phone integration: CRM call pop-ups showed no prior interaction history and couldn't create tickets, unlike Desk's pop-up. Reviewed the CRM/Desk/PhoneBridge setup with the client to scope a fix.",
    approach:
      "Reviewed the CRM/Desk/PhoneBridge setup to diagnose why CRM call pop-ups showed no history while Desk's did, and scoped what Canvas could and couldn't fix.",
    challenges:
      "Discovering that Canvas can't customize the telephony pop-up itself — that's a separate PhoneBridge/3CX widget — meant the fix had to be scoped differently than originally planned.",
  },
  {
    title: "Real-Time Chat App",
    tag: "React · Convex",
    description:
      "A learning project exploring real-time data patterns: live message delivery and presence built on Convex as the backend, with a React front end.",
    approach:
      "Built with Convex as the real-time backend and React on the front end, exploring live message delivery and presence.",
    challenges:
      "Learning Convex's real-time subscription model for the first time and structuring the schema to support live updates cleanly.",
  },
  {
    title: "Inventory Management App",
    tag: "React · Convex · TypeScript",
    description:
      "An e-commerce / inventory management app with its backend scaffolded on Convex — stock, orders, and product data modelled and ready for a full front-end build-out.",
    approach:
      "Scaffolded the backend on Convex — schema for stock, orders, and product data — ready for the frontend to be built out.",
    challenges:
      "Designing a schema flexible enough to support both e-commerce and inventory management without over-engineering it before the frontend requirements were fully known.",
  },
];

export const education = {
  degree: "Bachelor of Business Information Technology (BBIT)",
  school: "Technical University of Kenya",
  period: "2019 — 2023",
};

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Swahili", level: "Native" },
];
