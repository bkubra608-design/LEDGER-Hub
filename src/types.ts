export type PageId =
  | 'home'
  | 'about'
  | 'product'
  | 'features'
  | 'how-it-works'
  | 'packages'
  | 'demo'
  | 'contact'
  | 'faq';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  badge: string;
}

export interface TimelineMilestone {
  stage: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'future';
  year: string;
}

export interface FeatureDetail {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefit: string;
  previewData?: {
    metricLabel: string;
    metricValue: string;
    subtext: string;
  };
}
