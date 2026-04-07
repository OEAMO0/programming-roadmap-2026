export type Tone =
  | 'sand'
  | 'reef'
  | 'rose'
  | 'sky'
  | 'lime'
  | 'indigo'
  | 'amber'
  | 'mint'
  | 'plum'
  | 'coral'
  | 'slate';

export type TopicLevel = 'ابدأ' | 'أساسي' | 'عملي' | 'متقدم' | '2026';
export type Journey = 'enter' | 'optional' | 'mastery';

export type ResourceLink = {
  label: string;
  url: string;
};

export type TopicDetail = {
  id: string;
  title: string;
  level: TopicLevel;
  category: string;
  summary: string;
  learn: string[];
  build: string[];
  note2026?: string;
  resources: ResourceLink[];
  tags: string[];
  searchKeywords?: string[];
  fits?: string[];
  effort?: string;
  finalProject?: string[];
};

export type TopicInput = Omit<TopicDetail, 'id'>;

export type SectionLayout = {
  id: string;
  tone: Tone;
  right: string[];
  left: string[];
};

export type TopicLinkHints = {
  before?: string[];
  next?: string[];
  alternatives?: string[];
};

export type RoadmapNodeData = {
  topicId: string;
  title: string;
  category: string;
  level: TopicLevel;
  journey: Journey;
  tone: Tone;
  variant: 'section' | 'topic';
  childCount: number;
  selected?: boolean;
  matched?: boolean;
  dimmed?: boolean;
};

export const tonePalette: Record<
  Tone,
  { solid: string; soft: string; line: string }
> = {
  sand: { solid: '#c2410c', soft: 'rgba(251, 146, 60, 0.22)', line: '#ea580c' },
  reef: { solid: '#0f766e', soft: 'rgba(45, 212, 191, 0.18)', line: '#0f766e' },
  rose: { solid: '#be123c', soft: 'rgba(244, 114, 182, 0.18)', line: '#e11d48' },
  sky: { solid: '#0369a1', soft: 'rgba(56, 189, 248, 0.18)', line: '#0284c7' },
  lime: { solid: '#4d7c0f', soft: 'rgba(163, 230, 53, 0.16)', line: '#65a30d' },
  indigo: { solid: '#4338ca', soft: 'rgba(129, 140, 248, 0.18)', line: '#4f46e5' },
  amber: { solid: '#b45309', soft: 'rgba(251, 191, 36, 0.2)', line: '#d97706' },
  mint: { solid: '#15803d', soft: 'rgba(74, 222, 128, 0.18)', line: '#16a34a' },
  plum: { solid: '#7c3aed', soft: 'rgba(196, 181, 253, 0.18)', line: '#8b5cf6' },
  coral: { solid: '#c2410c', soft: 'rgba(251, 113, 133, 0.18)', line: '#ea580c' },
  slate: { solid: '#334155', soft: 'rgba(148, 163, 184, 0.2)', line: '#475569' },
};
