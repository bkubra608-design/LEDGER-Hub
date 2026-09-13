import { FAQItem, Founder, TimelineMilestone } from '../types';

export const LEDGER_SOFTWARE_URL = 'https://ledger-wfwc.vercel.app';

export const FOUNDERS: Founder[] = [
  {
    name: 'Shamsa Malik',
    role: 'Founder, Ledger',
    bio: 'Shamsa Malik is the Founder of Ledger, working on building a practical business solution that helps entrepreneurs manage their everyday business operations more simply.',
    badge: 'Founder'
  },
  {
    name: 'Kubra Batool',
    role: 'Co-Founder, Ledger',
    bio: 'Kubra Batool is a Co-Founder of Ledger, working on technology, product development, AI, automation, and creating practical digital solutions for businesses.',
    badge: 'Co-Founder'
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    stage: '01',
    title: 'Idea',
    description: 'Ledger started as an idea focused on making business management easier for small businesses who were struggling with bloated enterprise tools.',
    status: 'completed',
    year: 'Inception'
  },
  {
    stage: '02',
    title: 'Development',
    description: 'Iterative prototyping centered on direct feedback from everyday shop owners, home bakeries, and independent merchants.',
    status: 'completed',
    year: 'Prototyping'
  },
  {
    stage: '03',
    title: 'NIC Hyderabad',
    description: 'Incubated and refined through the startup journey at the National Incubation Center (NIC) Hyderabad, solidifying product-market fit.',
    status: 'completed',
    year: 'Incubation'
  },
  {
    stage: '04',
    title: 'Product',
    description: 'Launched a simple, reliable, and accessible platform keeping sales, orders, cash flow, inventory, and AI parsing in one place.',
    status: 'current',
    year: 'Active Launch'
  },
  {
    stage: '05',
    title: 'Future',
    description: 'Expanding smart business automations, multi-currency ledger books, and lightweight inventory intelligence for growing micro-enterprises.',
    status: 'future',
    year: 'Roadmap'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Ledger?',
    answer: 'Ledger is a simple business management and smart ledger platform designed for small businesses and entrepreneurs. It brings sales, orders, cash flow, costs, inventory, and net profit together in one intuitive interface.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'Who is Ledger for?',
    answer: 'Ledger is designed specifically for small businesses, entrepreneurs, retail shops, home-based businesses, online sellers, and independent merchants who want clarity without accounting headaches.',
    category: 'General'
  },
  {
    id: 'faq-3',
    question: 'What can I manage with Ledger?',
    answer: 'You can easily manage sales, customer orders, cash inflows and outflows, stock inventory levels, business operational costs, total revenue, and exact net profit.',
    category: 'Product'
  },
  {
    id: 'faq-4',
    question: 'Is Ledger difficult to use?',
    answer: 'No. Ledger is intentionally built to eliminate unnecessary accounting jargon, complex balance sheets, and confusing setup steps. If you can send a message or read a receipt, you can use Ledger.',
    category: 'Product'
  },
  {
    id: 'faq-5',
    question: 'Does Ledger have AI?',
    answer: 'Yes. Ledger includes an AI-powered message parser that turns raw order messages from WhatsApp, SMS, or direct messages into clean, structured order details with one click.',
    category: 'AI Features'
  },
  {
    id: 'faq-6',
    question: 'Can I try Ledger?',
    answer: 'Yes. You can immediately access and explore the Ledger software through the "Open Ledger" button located throughout this website.',
    category: 'Access'
  },
  {
    id: 'faq-7',
    question: 'Where can I access Ledger?',
    answer: 'You can launch Ledger right in your browser via the "Open Ledger" button. It runs smoothly on desktop, tablet, and mobile browsers with no heavy installation required.',
    category: 'Access'
  },
  {
    id: 'faq-8',
    question: 'How does Ledger help me monitor cash flow and dues?',
    answer: 'Ledger tracks both cash in hand and pending customer dues/advances. You always know what money has come in, what is owed to you, and what bills are due.',
    category: 'Finance'
  }
];

export const AUDIENCES = [
  {
    id: 'shops',
    title: 'Small Shops',
    summary: 'Track sales, orders, costs, and inventory.',
    description: 'Perfect for local grocers, boutiques, and retail counters who need fast daily checkout recording and instant stock alerts.',
    icon: 'Store'
  },
  {
    id: 'home',
    title: 'Home Businesses',
    summary: 'Keep business records organized without complicated tools.',
    description: 'Ideal for home bakers, craft creators, and culinary artisans managing customer custom orders and material expenses.',
    icon: 'Home'
  },
  {
    id: 'online',
    title: 'Online Sellers',
    summary: 'Track orders, payments, and customer transactions.',
    description: 'Built for Instagram, WhatsApp, and social commerce merchants who process orders via chats and need structured delivery tracking.',
    icon: 'ShoppingBag'
  },
  {
    id: 'growing',
    title: 'Growing Entrepreneurs',
    summary: 'Understand revenue, costs, and profit as your business grows.',
    description: 'Essential for founders who need clear financial visibility and profit calculations to make confident expansion decisions.',
    icon: 'TrendingUp'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Record',
    subtitle: 'Add your sales, orders, costs, and inventory.',
    description: 'Quickly log daily transactions through one-tap entry or paste order messages straight from customer chats.',
    icon: 'PenTool'
  },
  {
    step: '02',
    title: 'Organize',
    subtitle: 'Ledger keeps your business information in one place.',
    description: 'No more scattered notebooks, disconnected spreadsheets, or lost slips. Everything is neatly sorted by date, customer, and category.',
    icon: 'Layers'
  },
  {
    step: '03',
    title: 'Understand',
    subtitle: 'See revenue, costs, profit, orders, and stock clearly.',
    description: 'Interactive cards show your exact financial health instantly: what came in, what went out, and what you actually earned.',
    icon: 'PieChart'
  },
  {
    step: '04',
    title: 'Grow',
    subtitle: 'Use better information to make better business decisions.',
    description: 'Identify your most profitable items, replenish low stock on time, and build a resilient business with clarity.',
    icon: 'Compass'
  }
];
