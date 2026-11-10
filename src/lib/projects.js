// One9 Tech — shared case study data (single source of truth)
//
// Case study sections, all optional except overview/systems/techGroups:
//   parts        — the separate apps that make up the build
//   systems      — every module, with concrete feature points
//   roles        — user roles / access levels
//   integrations — third-party services and what they're used for
//   engineering  — notable engineering decisions
//   techGroups   — full stack grouped by layer (shown as "Technology")
// `technologies` is the short list used on cards.
// `images[0]` is the primary visual; the rest render in the gallery.

export const projects = [
  {
    slug: 'review-qr',
    number: '01',
    title: 'Review QR',
    status: 'LIVE',
    building: false,
    category: 'SAAS / AI MARKETING',
    year: '2026',
    description:
      'A three-part SaaS that turns any Google Maps listing into a trackable review QR code and print-ready standee, with AI-written review suggestions in 21 languages and a full agency platform on top.',
    overview: [
      'Local businesses lose reviews because asking for them is awkward. Review QR fixes that end to end: an owner searches their business by name, and the platform builds a short trackable link that leads to Google\u2019s \u201cwrite a review\u201d form — downloadable as a branded QR code, a print-ready standee, or an NFC tap sticker.',
      'On paid plans, a scan opens a branded review page where AI drafts reviews from what the customer actually experienced — the service they used, what they liked, who helped them — in any of 21 languages including Hinglish. The customer always posts the review themselves.',
      'The Agency plan turns it into a platform for marketing agencies: team seats, read-only client logins, per-QR client billing with payment claims, automatic blocking of overdue clients, and white-label standees. A separate admin panel runs users, revenue, QR codes, testimonials, and live pricing.',
    ],
    parts: [
      {
        name: 'Website & Business Dashboard',
        stack: 'Next.js 16 · React 19 · TypeScript',
        summary:
          'Marketing and SEO site, free QR generator, public review page, business dashboard, and the agency client portal.',
      },
      {
        name: 'Backend API',
        stack: 'Express 5 · MongoDB · Redis',
        summary:
          'REST API, dynamic scan redirect, payments and webhooks, AI engine, Google integrations, six cron jobs, 17 transactional emails.',
      },
      {
        name: 'Admin Panel',
        stack: 'Vite · React 19 · TypeScript',
        summary:
          'Internal console for users, revenue, platform-wide QR analytics, testimonial moderation, and live pricing control.',
      },
    ],
    systems: [
      {
        name: 'QR & Standee Generator',
        detail:
          'Search a business through Google Places and design a branded QR code or print-ready standee in minutes.',
        points: [
          'QR colors, five dot shapes, and logo upload',
          '8 standee templates with text in 5 languages',
          'Show or hide logo, rating, address, phone, NFC badge',
          'Writes NFC tap tags directly from Android Chrome',
          'PNG, SVG, and print-ready PDF downloads',
        ],
      },
      {
        name: 'AI Review Page',
        detail:
          'The branded page a customer lands on after scanning — tap what they experienced, get reviews written for them.',
        points: [
          'Tap-chips for services used, highlights, and staff',
          'Three AI drafts — short, medium, detailed',
          'Review language picker across 21 languages',
          'One tap to copy and open the Google review form',
        ],
      },
      {
        name: 'Business Dashboard',
        detail:
          'Everything an owner needs to manage QR codes and watch their reputation grow.',
        points: [
          'Scan activity, review funnel, and smart alerts',
          'Analytics — locations, devices, rating performance',
          'Google Rating Monitor with daily trend snapshots',
          'AI review profile with \u201cauto-fill from Google\u201d',
          'Plan-gated pages with in-place upgrade prompts',
        ],
      },
      {
        name: 'Agency Suite',
        detail:
          'A complete toolkit for agencies managing reviews for many client businesses.',
        points: [
          'Team seats with invites and per-member QR scoping',
          'Read-only client logins with their own portal',
          'Per-QR billing in 8 currencies with payment claims',
          'Auto-block for clients 15+ days overdue',
          'White-label standees',
        ],
      },
      {
        name: 'Subscriptions & Billing',
        detail:
          'Four plans — Free, Starter, Pro, Agency — with region-aware payments and a full plan lifecycle.',
        points: [
          'Razorpay for INR, Lemon Squeezy for international',
          'Gateway chosen automatically by visitor country',
          'Monthly and annual cycles, prorated extra seats',
          'Expiry warnings, grace periods, automatic QR pausing',
        ],
      },
      {
        name: 'Admin Panel',
        detail:
          'The operator\u2019s view of the whole platform.',
        points: [
          'KPIs, growth trends, users-by-plan breakdown',
          'User management — plans, extensions, seats, blocking',
          '12-month revenue with CSV export',
          'Platform-wide QR analytics and pause controls',
          'Live pricing editor for every plan and currency',
        ],
      },
    ],
    roles: [
      'Visitor — search businesses and preview the generator',
      'Business owner — Free, Starter, Pro, or Agency plan',
      'Agency team member — works inside the owner\u2019s account',
      'Agency client — read-only portal and payments',
      'Platform admin',
    ],
    integrations: [
      { name: 'Google Places API', use: 'Business search, ratings, and latest reviews' },
      { name: 'OpenRouter + Gemini', use: 'AI review drafts with a multi-model fallback chain' },
      { name: 'Razorpay', use: 'INR payments with signed webhooks' },
      { name: 'Lemon Squeezy', use: 'International USD checkout' },
      { name: 'Google OAuth', use: 'One-tap sign in' },
      { name: 'Cloudinary', use: 'Logos and avatars' },
      { name: 'Redis', use: 'Scan-redirect cache, analytics cache, AI memory' },
      { name: 'Web NFC API', use: 'Writing tap tags from the browser' },
    ],
    engineering: [
      {
        title: 'Printed codes that stay smart',
        detail:
          'Every QR encodes a short redirect link, so upgrades, downgrades, and pauses apply instantly to codes already printed and stuck on counters.',
      },
      {
        title: 'A fast scan path',
        detail:
          'The redirect is cached in Redis, scan logging is fire-and-forget, visitor IPs are hashed, and the cache fails open — a scan never waits on analytics.',
      },
      {
        title: 'AI that stays honest and varied',
        detail:
          'Prompts use only owner-entered facts, avoid repeating recent suggestions, follow per-language rules for 21 languages, and fall back across models.',
      },
      {
        title: 'Plan lifecycle engine',
        detail:
          'Trials, grace periods, expiry warnings, and bulk QR pause/resume run on scheduled jobs — paused codes show a friendly page instead of breaking.',
      },
      {
        title: 'Multi-tenant by design',
        detail:
          'Owners, team members, and agency clients each have scoped access — client sessions are fully separate and can never reach agency routes.',
      },
    ],
    techGroups: [
      { label: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Redux Toolkit', 'RTK Query'] },
      { label: 'Admin', items: ['Vite', 'React 19', 'React Router 7', 'Custom charts'] },
      { label: 'Backend', items: ['Node.js', 'Express 5', 'MongoDB', 'Mongoose', 'Redis', 'node-cron', 'Passport'] },
      { label: 'Rendering', items: ['qr-code-styling', 'sharp', 'pdfkit', 'jsPDF'] },
      { label: 'Infra', items: ['PM2 cluster', 'GitHub Actions', 'VPS', 'Google Tag Manager'] },
    ],
    technologies: ['Next.js', 'Express', 'MongoDB', 'Redis', 'AI'],
    image: '/projectsImages/ReviewQr/img1.png',
    images: [
      '/projectsImages/ReviewQr/img1.png',
      '/projectsImages/ReviewQr/img2.png',
      '/projectsImages/ReviewQr/img3.png',
    ],
    link: 'https://www.getreviewqr.com/',
  },
  {
    slug: 'paramount',
    number: '02',
    title: 'Paramount Constructions',
    status: 'IN DEVELOPMENT',
    building: true,
    category: 'CONSTRUCTION — WEB + ERP + APP',
    year: '2026',
    description:
      'A complete operating platform for a commercial interiors and construction company — cinematic public website, a 70-module ERP with 10 roles, and a mobile-ready API running everything from site progress to payroll.',
    overview: [
      'Paramount Constructions & Decor delivers commercial interior fit-out and construction for offices, healthcare, hospitality, and education spaces. A business that complex runs on hundreds of moving parts — sites, labour, materials, safety, billing, and staff in the field.',
      'We built the whole platform. The public website showcases the company with a scroll-driven cinematic hero and a fully editable CMS. Behind it, an ERP covers projects and sites, daily progress reports, materials and stock, safety, client and contractor billing, accounts, marketing leads, and HR — including geofenced attendance with GPS tracking and payroll built for Indian compliance.',
      'Website enquiries flow straight into the ERP as marketing leads. The API is already built for mobile clients, with the companion app in development.',
    ],
    parts: [
      {
        name: 'Public Website',
        stack: 'Next.js 16 · React 19 · GSAP',
        summary:
          'Marketing site with a scroll-driven hero, projects portfolio, gallery, and enquiry form — all content editable from the ERP.',
      },
      {
        name: 'ERP Panel',
        stack: 'React · Vite · TanStack Query',
        summary:
          'About 70 permission-gated modules across operations, finance, HR, and the website CMS, with a dashboard for every role.',
      },
      {
        name: 'Backend API & Worker',
        stack: 'TypeScript · Express 5 · MongoDB · BullMQ',
        summary:
          'Secure API serving the ERP and website, plus a background worker for payroll runs, notifications, and report exports.',
      },
      {
        name: 'Mobile App',
        stack: 'In development',
        summary:
          'Companion app for field teams — the API already supports mobile sessions and location tracking.',
      },
    ],
    systems: [
      {
        name: 'Projects & Site Operations',
        detail:
          'Every project and site tracked from planning to handover.',
        points: [
          'Projects with team, tasks, schedule, budget, and billing tabs',
          'Daily progress reports and measurement book',
          'Labour register, manpower attendance, tools & equipment',
          'Site issues, quality checks, and housekeeping',
          'Drawings, contractors, and vendors',
        ],
      },
      {
        name: 'Materials & Store',
        detail:
          'Full material control across sites with a running stock ledger.',
        points: [
          'Material master, site stock, and requirements',
          'Purchase, receiving, and issue',
          'Wastage and damage tracking',
          'Weekly stock reports',
        ],
      },
      {
        name: 'Safety',
        detail:
          'Site safety digitised end to end.',
        points: [
          'Inspections, toolbox talks, and inductions',
          'Work permits and PPE register',
          'Incidents and corrective actions',
          'Drills, emergency plans, and safety documents',
        ],
      },
      {
        name: 'Billing & Accounts',
        detail:
          'Client and contractor billing tied to real site measurements.',
        points: [
          'Client billing with certified copies',
          'Contractor billing linked to measurement sheets',
          'Expenses, travel & daily allowance claims',
          'Payments, bank & cash, TDS/GST, outstanding',
        ],
      },
      {
        name: 'HR & Payroll',
        detail:
          'People management built for teams spread across sites.',
        points: [
          'Geofenced punch-in with live GPS route maps',
          'Leave, recruitment, onboarding, and performance',
          'Payroll with PF, ESIC, and TDS (old and new regimes)',
          'Payslips, HR letters, grievances, and policies',
        ],
      },
      {
        name: 'Website CMS',
        detail:
          'The marketing team edits every page of the public website from inside the ERP.',
        points: [
          'Draft and publish workflow',
          'Version history with one-click restore',
          'Image and large video uploads',
          'Publishing instantly refreshes the live site',
        ],
      },
      {
        name: 'Approvals, Reports & Notifications',
        detail:
          'One inbox for every decision, and reports for every module.',
        points: [
          'Approvals across 11 modules — leave, purchase, billing, permits',
          '19 reports including financial and project MIS',
          'Background CSV exports with ready notifications',
          'Role-based dashboards and in-app notifications',
        ],
      },
    ],
    roles: [
      'Super Admin',
      'Operation Manager',
      'Project Coordinator',
      'Site Manager',
      'Site Supervisor',
      'Safety & Site Supervisor',
      'HR',
      'Accounts',
      'Marketing',
      'Employee',
    ],
    integrations: [
      { name: 'Google Maps Platform', use: 'Geocoding punches, route maps, roads-snapped GPS trails' },
      { name: 'Leaflet', use: 'Location trails and punch-location picker' },
      { name: 'Cloudinary', use: 'Private file storage with expiring signed links' },
      { name: 'Nodemailer (SMTP)', use: 'Emailed one-time login codes' },
      { name: 'Redis + BullMQ', use: 'Sessions, caching, rate limits, background jobs' },
      { name: 'Next.js revalidation', use: 'Instant website refresh on CMS publish' },
    ],
    engineering: [
      {
        title: 'Geofenced attendance',
        detail:
          'Punches capture GPS and accuracy, flag fake locations, and check a radius around each employee\u2019s site — anything out of range goes to an HR review queue.',
      },
      {
        title: 'Offline-tolerant live tracking',
        detail:
          'Field staff send a location ping every five minutes while on duty; pings queue offline and sync in batches, then snap to roads on the map.',
      },
      {
        title: 'Indian payroll engine',
        detail:
          'PF, ESIC, and TDS under both tax regimes, overtime and loss-of-pay from attendance — run automatically each month with protection against double payment.',
      },
      {
        title: 'Permission matrix',
        detail:
          '10 roles × ~70 modules × 6 actions, editable from the ERP and enforced on every API route — with row-level scoping so staff only see their own records and sites.',
      },
      {
        title: 'Security built in',
        detail:
          'Short-lived tokens with rotating refresh sessions, emailed login codes, account lockout, encrypted personal data, and a two-year audit trail.',
      },
    ],
    techGroups: [
      { label: 'Website', items: ['Next.js 16', 'React 19', 'TypeScript', 'GSAP ScrollTrigger', 'Lenis'] },
      { label: 'ERP', items: ['React', 'Vite', 'React Router', 'TanStack Query', 'Tailwind CSS', 'Recharts', 'Leaflet'] },
      { label: 'Backend', items: ['TypeScript', 'Express 5', 'MongoDB', 'Mongoose', 'Redis', 'BullMQ', 'Zod', 'Swagger'] },
      { label: 'Infra', items: ['Docker', 'Docker Compose', 'Vitest', 'Cloudinary'] },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Redis'],
    image: '/projectsImages/Paramount/img1.png',
    images: [
      '/projectsImages/Paramount/img1.png',
      '/projectsImages/Paramount/img2.png',
    ],
    link: 'https://paramount-website-ten.vercel.app/',
  },
  {
    slug: 'dil-se-dil-tak',
    number: '03',
    title: 'Dil Se Dil Tak',
    status: 'LIVE',
    building: false,
    category: 'SOCIAL / REAL-TIME',
    year: '2025',
    description:
      'An anonymous social platform with pay-per-second voice calls, free chat, reels, and stories — where any user can activate a call button and earn from conversations.',
    overview: [
      'Dil Se Dil Tak lets people talk, chat, and connect with strangers — anonymously. Every user gets a generated handle and avatar; real names and birth dates are stored privately and never shown.',
      'The core is live one-to-one voice calling billed per second from a prepaid wallet, with free minutes for new users. Around it sits a full social layer: a community feed, short video reels, 24-hour stories, and free text chat.',
      'Any user can pay a one-time activation fee to get a call button. Once approved, others can call them, and they earn per minute minus a platform commission — withdrawable to their bank or UPI. Four apps make it work: the user app, a staff portal for receiving calls, an admin panel, and a real-time backend.',
    ],
    parts: [
      {
        name: 'User Web App',
        stack: 'Next.js 16 · React 19 · PWA',
        summary:
          'Feed, reels, stories, chat, live voice calls, and wallet — installable as an app.',
      },
      {
        name: 'Staff Portal',
        stack: 'React · Vite · Agora',
        summary:
          'Where approved staff go online, receive calls, chat with users, and withdraw earnings.',
      },
      {
        name: 'Admin Panel',
        stack: 'React · Vite',
        summary:
          'Operations, payments, moderation, staff approvals, and platform settings.',
      },
      {
        name: 'Real-time Backend',
        stack: 'Express 5 · Socket.IO · MongoDB · Redis',
        summary:
          'REST API, real-time server, per-second billing engine, and scheduled jobs.',
      },
    ],
    systems: [
      {
        name: 'Live Voice Calls',
        detail:
          'Pay-per-second calling with a live cost meter on both sides.',
        points: [
          'Agora voice with ringtone and mic visualizer',
          'Live timer showing cost, balance, and free seconds',
          'Low-balance warning and automatic hang-up',
          'Call recording, ratings, and written reviews',
        ],
      },
      {
        name: 'Social Feed',
        detail:
          'A community layer that keeps people coming back between calls.',
        points: [
          'Posts with up to four images, likes, and comments',
          'Vertical reels player — videos up to 60 seconds',
          '24-hour stories with viewer tracking',
          'Public and private posts on every profile',
        ],
      },
      {
        name: 'Chat',
        detail:
          'Free real-time messaging between users and staff.',
        points: [
          'Inbox with unread counts and typing indicators',
          'Image messages',
          'Floating chat button across the app',
        ],
      },
      {
        name: 'Wallet & Payments',
        detail:
          'Prepaid wallet with two ways to recharge.',
        points: [
          'Razorpay checkout with verified webhooks',
          'Manual UPI QR flow with admin-verified UTR numbers',
          'UPI codes rotate automatically past a collection limit',
          'Full transaction history',
        ],
      },
      {
        name: 'Earn Program & Staff Portal',
        detail:
          'Turns users into earners with a paid, admin-approved activation.',
        points: [
          'Activation flow — payment, review, approval',
          'Online / Busy / Offline status and incoming-call screen',
          'Earnings dashboard and weekly stats',
          'Withdrawals to bank or UPI',
        ],
      },
      {
        name: 'Admin Panel',
        detail:
          'Complete control over money, people, and content.',
        points: [
          'Live calls with recordings and force-end',
          'Staff approvals, per-minute pricing, commissions',
          'UPI approvals, withdrawals, and commission reports',
          'AI-assisted post moderation and reports queue',
          'Platform settings — fees, free minutes, data retention',
        ],
      },
    ],
    roles: [
      'User — feed, chat, calls, wallet',
      'Staff — approved users who receive paid calls',
      'Admin — full platform control',
    ],
    integrations: [
      { name: 'Agora', use: 'Real-time voice calling' },
      { name: 'Socket.IO', use: 'Live call state, typing, and chat rooms' },
      { name: 'Razorpay', use: 'Wallet recharges and activation fees' },
      { name: 'Firebase Cloud Messaging', use: 'Push notifications for calls and activity' },
      { name: 'Cloudinary', use: 'Images, reels, stories, and call recordings' },
      { name: 'OpenAI Moderation', use: 'Automatic content checks on posts' },
      { name: 'Google Sign-In', use: 'Alternative to phone OTP login' },
    ],
    engineering: [
      {
        title: 'Per-second billing engine',
        detail:
          'Live call state lives in Redis and ticks every second to both sides — cost is computed to the paisa, free minutes are split from paid time, and the wallet is charged once at the end.',
      },
      {
        title: 'Self-healing calls',
        detail:
          'A job sweeps every minute: unanswered calls become missed with a push alert, and calls whose heartbeat stopped are force-ended so no one is billed for a dead line.',
      },
      {
        title: 'Money-safe wallet',
        detail:
          'Every credit and debit runs in a database transaction recording balance before and after; UPI approvals are atomic, and rejected withdrawals refund automatically.',
      },
      {
        title: 'Built for scale',
        detail:
          'Likes counted in Redis, feed and reels pages cached, cache failures handled gracefully — the app keeps working even if Redis goes down.',
      },
      {
        title: 'Privacy by default',
        detail:
          'Anonymous public identities, private fields hidden from every API response, and admin-set retention that cleans up old chats and recordings.',
      },
    ],
    techGroups: [
      { label: 'User App', items: ['Next.js 16', 'React 19', 'Redux Toolkit', 'Tailwind CSS 4', 'Socket.IO client', 'PWA'] },
      { label: 'Staff & Admin', items: ['React 19', 'Vite', 'React Router 7', 'TypeScript', 'Agora SDK'] },
      { label: 'Backend', items: ['Express 5', 'TypeScript', 'Socket.IO', 'MongoDB', 'Mongoose', 'Redis', 'Zod', 'node-cron'] },
      { label: 'Services', items: ['Agora', 'Firebase', 'Cloudinary', 'OpenAI', 'Razorpay'] },
    ],
    technologies: ['Next.js', 'Socket.IO', 'Agora', 'MongoDB', 'Redis'],
    image: '/projectsImages/Dilsee/img1.png',
    images: [
      '/projectsImages/Dilsee/img1.png',
      '/projectsImages/Dilsee/img2.png',
      '/projectsImages/Dilsee/img3.png',
    ],
    link: 'https://dilsee.com',
  },
  {
    slug: 'bagherwal-samaj',
    number: '04',
    title: 'Bagherwal Samaj Sahayata',
    status: 'LIVE',
    building: false,
    category: 'COMMUNITY PORTAL',
    year: '2025',
    description:
      'Community assistance portal with automated WhatsApp messaging, member directory, verification workflows, and donations.',
    overview: [
      'A community welfare organization needed to coordinate assistance requests, member records, and donations — work that previously lived in spreadsheets and phone calls.',
      'We built a verified member directory, an assistance workflow with status tracking, and automated WhatsApp notifications so members hear about requests and updates instantly, without anyone manually forwarding messages.',
    ],
    systems: [
      {
        name: 'Public Portal',
        detail:
          'The community-facing website — assistance requests, announcements, and member registration, accessible to every member on any device.',
      },
      {
        name: 'Member Directory & Verification',
        detail:
          'A structured member database with verification workflows, so the organization knows every record is a real, approved member.',
      },
      {
        name: 'WhatsApp Notification Engine',
        detail:
          'Automated WhatsApp messaging via API — new requests, status updates, and announcements reach members instantly without manual forwarding.',
      },
      {
        name: 'Donations & Tracking',
        detail:
          'Donation collection with transparent tracking, so contributions and their outcomes are visible to the community.',
      },
      {
        name: 'Admin Panel',
        detail:
          'Request management, member approvals, messaging controls, and reporting — the organization runs everything from one screen.',
      },
    ],
    integrations: [
      { name: 'WhatsApp API', use: 'Automated member notifications' },
    ],
    techGroups: [
      { label: 'Frontend', items: ['React'] },
      { label: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
      { label: 'Services', items: ['WhatsApp API'] },
    ],
    technologies: ['React', 'Node.js', 'WhatsApp API', 'MongoDB'],
    image: '/projectsImages/BagherwalSamaj/img1.png',
    images: [
      '/projectsImages/BagherwalSamaj/img1.png',
      '/projectsImages/BagherwalSamaj/img2.png',
    ],
    link: 'https://bagherwaljaindp.com',
  },
  {
    slug: 'icchhapurti',
    number: '05',
    title: 'Icchhapurti',
    status: 'LIVE',
    building: false,
    category: 'E-COMMERCE',
    year: '2025',
    description:
      'Modern e-commerce storefront for an artisanal brand — seamless checkout, Razorpay payments, and dynamic order fulfillment.',
    overview: [
      'Icchhapurti needed a storefront that matched the craft of its products — fast, clean, and trustworthy, with payments that work the way Indian customers expect.',
      'We built the full commerce stack: catalog and inventory, cart and checkout, Razorpay integration with webhooks, and an order fulfillment pipeline the owner can run from a single admin screen.',
    ],
    systems: [
      {
        name: 'Storefront',
        detail:
          'Fast, mobile-first shopping experience — catalog, product pages, search, and cart designed to convert on mobile data connections.',
      },
      {
        name: 'Checkout & Payments',
        detail:
          'Razorpay-integrated checkout with webhook-driven order states — payment confirmations update orders automatically and reliably.',
      },
      {
        name: 'Order Fulfillment',
        detail:
          'A fulfillment pipeline with status tracking from order placed to delivered, keeping both the owner and the customer informed.',
      },
      {
        name: 'Owner Admin Panel',
        detail:
          'Catalog, inventory, discounts, and orders in one panel — the owner runs the store day-to-day without touching code.',
      },
    ],
    integrations: [
      { name: 'Razorpay', use: 'Checkout with webhook-driven order states' },
    ],
    techGroups: [
      { label: 'Frontend', items: ['React', 'Tailwind CSS'] },
      { label: 'Backend', items: ['Node.js', 'MongoDB'] },
      { label: 'Services', items: ['Razorpay'] },
    ],
    technologies: ['React', 'Node.js', 'Razorpay', 'MongoDB'],
    image: '/projectsImages/Icchhapurti/img1.png',
    images: [
      '/projectsImages/Icchhapurti/img1.png',
      '/projectsImages/Icchhapurti/img2.png',
    ],
    link: 'https://icchhapurti.com/',
  },
  {
    slug: 'vee-jain',
    number: '06',
    title: 'Vee Jain Dyes & Chemicals',
    status: 'LIVE',
    building: false,
    category: 'B2B E-COMMERCE + ERP',
    year: '2026',
    description:
      'B2B storefront, full business ERP, and a learning center for an industrial dyes and chemicals company — GST invoicing, business credit lines, multi-warehouse stock, CRM, and HR in one system.',
    overview: [
      'Vee Jain Dyes & Chemicals sells industrial dyes, specialty chemicals, and screen-printing supplies across four divisions — Premium Inks, Chemical Solutions, Frames & Mesh, and Squeegees & Tools. Its buyers are businesses that compare technical specifications and order in bulk.',
      'The storefront is built for them: technical product data (CAS number, purity, grade, safety, certificates), variant pricing, bulk quote requests, and checkout through Razorpay, NEFT/RTGS, or an approved business credit line — with GST invoices for every order.',
      'Behind the store is a complete ERP that runs the business: CRM and leads, invoicing and POS sales, purchases, multi-warehouse inventory, finance, credit, and HR with geofenced attendance. A Learning Center of dyeing and printing tutorial videos trains customers alongside the shop.',
    ],
    parts: [
      {
        name: 'B2B Storefront',
        stack: 'Next.js 15 · React 19 · PWA',
        summary:
          'Catalog, cart, checkout, orders, GST invoices, and the Learning Center — installable as an app.',
      },
      {
        name: 'Admin & ERP Console',
        stack: 'React 19 · Vite · TypeScript',
        summary:
          'Sales, inventory, purchases, CRM, finance, HR, and content — every screen permission-gated.',
      },
      {
        name: 'Backend API',
        stack: 'Express · MongoDB · Redis',
        summary:
          'Around 40 data models behind customer and admin APIs, with payments, push, email, and daily backups.',
      },
    ],
    systems: [
      {
        name: 'B2B Storefront',
        detail:
          'An industrial catalog designed for how purchase teams actually buy.',
        points: [
          'Filters by category, division, and colour',
          'Technical specs — CAS, purity, grade, storage, safety',
          'Size and shade variants with reviews and ratings',
          'Quick view, quote calculator, and bulk enquiries',
        ],
      },
      {
        name: 'Checkout & Business Credit',
        detail:
          'Payment options built for B2B buyers.',
        points: [
          'Razorpay — card, UPI, net banking',
          'NEFT/RTGS with proforma invoice',
          'Business credit line with limits and credit days',
          'GSTIN capture and 18% GST calculation',
        ],
      },
      {
        name: 'Sales & GST Invoicing',
        detail:
          'Online, offline, and POS sales in one invoicing system.',
        points: [
          'CGST, SGST, IGST with HSN codes',
          'Multiple billing companies',
          'Quotations convertible to invoices',
          'Shareable invoice links and WhatsApp sharing',
        ],
      },
      {
        name: 'Inventory & Purchasing',
        detail:
          'Stock control across multiple warehouses.',
        points: [
          'Stock per warehouse with low-stock alerts',
          'Transfers and stock audits with approvals',
          'Purchase orders, receiving, invoices, returns',
          'Stock deducted safely on every order',
        ],
      },
      {
        name: 'CRM & Finance',
        detail:
          'From first enquiry to final payment.',
        points: [
          'Lead pipeline with assignments and follow-ups',
          'Customer and supplier profiles',
          'Expenses, cash & bank ledger',
          'GST summary and profit & loss exports',
        ],
      },
      {
        name: 'HR & Organization',
        detail:
          'Staff, branches, and departments managed in the same console.',
        points: [
          'Geofenced check-in against branch locations',
          'Tasks, leave, holidays, and salary',
          'Branches with map pins, 12 departments',
          'Audit log of every admin action',
        ],
      },
      {
        name: 'Learning Center',
        detail:
          'A library of dyeing and printing tutorials that trains customers next to the shop.',
        points: [
          'YouTube tutorial videos managed from the admin',
          'View counts and related videos',
          'Learning carousel on the home page',
        ],
      },
    ],
    roles: [
      'Guest — browse, watch tutorials, send enquiries',
      'Customer — mobile OTP login, orders, invoices, credit',
      'Staff — preset roles: sales, accountant, warehouse, branch manager, HR',
      'Owner / Super Admin',
    ],
    integrations: [
      { name: 'Razorpay', use: 'Online payments with verified webhooks' },
      { name: 'Firebase Cloud Messaging', use: 'Push notifications for customers and staff' },
      { name: 'Cloudinary', use: 'Product images, certificates, and backups' },
      { name: 'Google Maps', use: 'Branch location picker and geocoding' },
      { name: 'Nodemailer (SMTP)', use: 'Order and invoice emails' },
      { name: 'Redis', use: 'OTP storage and product caching' },
      { name: 'YouTube', use: 'Learning Center video embeds' },
    ],
    engineering: [
      {
        title: 'Payment-safe checkout',
        detail:
          'A temporary checkout record holds the cart until Razorpay\u2019s signature is verified — real orders are only created from a confirmed payment or webhook.',
      },
      {
        title: 'Granular permissions',
        detail:
          '37 modules × 9 actions with data scopes (own, department, branch, all) and per-staff limits on credit approval and discounts.',
      },
      {
        title: 'Credit risk controls',
        detail:
          'Credit accounts carry online and offline limits, maximum order size, and credit days — with overdue detection and admin alerts.',
      },
      {
        title: 'Operations ready',
        detail:
          'Daily backups, a health endpoint covering every service, graceful shutdown, and consistent validation across the API.',
      },
    ],
    techGroups: [
      { label: 'Storefront', items: ['Next.js 15', 'React 19', 'Redux Toolkit', 'Tailwind CSS 4', 'PWA'] },
      { label: 'Admin', items: ['React 19', 'Vite', 'TypeScript', 'Redux Toolkit', 'TipTap', 'Recharts'] },
      { label: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Redis', 'Zod', 'node-cron'] },
      { label: 'Services', items: ['Razorpay', 'Firebase', 'Cloudinary', 'Google Maps'] },
    ],
    technologies: ['Next.js', 'React', 'Express', 'MongoDB', 'Redis'],
    image: '/projectsImages/VeeJain/img1.png',
    images: [
      '/projectsImages/VeeJain/img1.png',
      '/projectsImages/VeeJain/img2.png',
    ],
    link: 'https://vee-jain-fe-rf8t.vercel.app/',
  },
  {
    slug: 'optech-institute',
    number: '07',
    title: 'Optech Computer Institute',
    status: 'LIVE',
    building: false,
    category: 'EDUCATION PLATFORM',
    year: '2026',
    description:
      'A complete institute management platform — multilingual public website with a 3D virtual classroom, a student portal for exams and fees, and an admin console that runs admissions to certificates.',
    overview: [
      'Optech Computer Institute of Technology has trained students since 1994. It needed one platform to run everything — from the first website visit to the final certificate.',
      'The public website works in English, Hindi, and Marathi, with a course catalog, fee calculator, online enrollment through Razorpay, a public scholarship exam that awards discount coupons, a typing test, and a 3D virtual classroom showing live batches — where students mark attendance with a camera selfie.',
      'Enrolled students get a portal for mock tests, timed exams, typing practice, notes, live classes, fees and installments, a digital ID card, and certificates. Staff run admissions, batches, attendance, fees, exams, content, and marketing from a permission-gated admin console.',
    ],
    parts: [
      {
        name: 'Website & Student Portal',
        stack: 'Next.js 16 · React 19 · Three.js',
        summary:
          'Multilingual public site, online enrollment, 3D live classroom, and the full student portal.',
      },
      {
        name: 'Admin Console',
        stack: 'React 19 · Vite · TypeScript',
        summary:
          'About 35 sections across academics, exams, content, marketing, and communication.',
      },
      {
        name: 'Backend API',
        stack: 'Express · TypeScript · MongoDB',
        summary:
          'Around 37 data models, payments, generated PDFs, push notifications, and scheduled jobs.',
      },
    ],
    systems: [
      {
        name: 'Public Website',
        detail:
          'A multilingual marketing site that converts visitors into enrolled students.',
        points: [
          'English, Hindi, and Marathi',
          'Course catalog with search and filters',
          'Fee calculator with coupons and installments',
          'Online enrollment with Razorpay and PDF invoices',
          'Public scholarship exam that awards discount coupons',
        ],
      },
      {
        name: '3D Virtual Classroom',
        detail:
          'A live view of today\u2019s batches rendered in 3D.',
        points: [
          'Three.js classroom with an isometric view',
          'Batch selector and live student roster',
          'Selfie-based login and logout attendance',
        ],
      },
      {
        name: 'Student Portal',
        detail:
          'Everything a student needs, in one login.',
        points: [
          'Mock tests and timed exams with auto-submit',
          'Typing tests in English and Hindi',
          'Notes, live classes, and attendance calendar',
          'Fees, installments, digital ID card, certificates',
          'Referrals and push notifications',
        ],
      },
      {
        name: 'Admissions & Academics',
        detail:
          'The institute\u2019s front office, digitised.',
        points: [
          'Admissions desk that issues student credentials',
          'Courses, batches, and student management',
          'Bulk attendance marking with calendar view',
          'Excel import of external admission registers',
        ],
      },
      {
        name: 'Examinations',
        detail:
          'A complete assessment engine.',
        points: [
          'Shared question bank — MCQ, true/false, fill-in-the-blank',
          'Negative marking, difficulty, and explanations',
          'Excel import with validate-then-confirm',
          'Typing tests and scholarship exams with discount slabs',
        ],
      },
      {
        name: 'Content, Marketing & Communication',
        detail:
          'Staff keep the website and students up to date without a developer.',
        points: [
          'Notes, gallery, notices, live classes, alumni, jobs',
          'Coupons, referrals, ads, popups, and marquee',
          'Printable ID cards',
          'Targeted push notifications and WhatsApp reminders',
        ],
      },
    ],
    roles: [
      'Student — portal login issued by the institute',
      'Teacher — attendance, exams, notes, live classes',
      'Staff — front office, admissions, fees, content',
      'Admin and Super Admin',
    ],
    integrations: [
      { name: 'Razorpay', use: 'Online enrollment payments with verified webhooks' },
      { name: 'Firebase Cloud Messaging', use: 'Push notifications for students and staff' },
      { name: 'Cloudinary', use: 'Uploads, attendance selfies, and backups' },
      { name: 'YouTube Data API', use: 'Live classes, videos, and gallery' },
      { name: 'pdf-lib', use: 'Receipts, invoices, ID cards, and certificates' },
      { name: 'Nodemailer (SMTP)', use: 'Receipts with PDF invoices attached' },
      { name: 'SheetJS', use: 'Excel imports for questions and registers' },
    ],
    engineering: [
      {
        title: 'Server-verified payments',
        detail:
          'Enrollments are fulfilled only after the payment signature or webhook is verified — idempotently — then coupons are redeemed and the invoice is emailed.',
      },
      {
        title: 'Selfie attendance',
        detail:
          'Camera-based login and logout with batch checks, one session per day, and automatic cleanup of photos after 30 days.',
      },
      {
        title: 'Fee logic that fits the institute',
        detail:
          'Percent or fixed coupons with date windows, installments above a minimum fee, automatic overdue marking, and referral rewards with self-referral blocked.',
      },
      {
        title: 'Smooth on any device',
        detail:
          'Scroll-driven image sequences load progressively, the 3D scene loads only when needed, and canvas resolution adapts to mobile.',
      },
      {
        title: 'Secure by default',
        detail:
          'Rotating refresh sessions, hashed tokens, rate limits, permission checks on every admin route, and daily database backups.',
      },
    ],
    techGroups: [
      { label: 'Website', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Three.js', 'React Three Fiber', 'Framer Motion'] },
      { label: 'Admin', items: ['React 19', 'Vite', 'TypeScript', 'Redux Toolkit', 'React Hook Form', 'Recharts'] },
      { label: 'Backend', items: ['Express', 'TypeScript', 'MongoDB', 'Mongoose', 'Redis', 'BullMQ', 'Zod'] },
      { label: 'Services', items: ['Razorpay', 'Firebase', 'Cloudinary', 'YouTube API', 'pdf-lib'] },
    ],
    technologies: ['Next.js', 'Three.js', 'Express', 'MongoDB', 'Redis'],
    image: '/projectsImages/Ocit/img1.png',
    images: [
      '/projectsImages/Ocit/img1.png',
      '/projectsImages/Ocit/img2.png',
      '/projectsImages/Ocit/img3.png',
    ],
    link: 'https://ocit.in/',
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug) => {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return projects[0];
  return projects[(idx + 1) % projects.length];
};

// Display-friendly domain for live links, e.g. "getreviewqr.com"
export const projectDomain = (link) => {
  if (!link) return null;
  try {
    return new URL(link).hostname.replace(/^www\./, '');
  } catch {
    return link;
  }
};
