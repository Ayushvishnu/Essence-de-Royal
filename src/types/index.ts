export type Currency = 'USD' | 'EUR' | 'GBP';

export interface NoteItem {
  name: string;
  category: string;
  description: string;
}

export interface NoteMovement {
  id: string;
  numeral: string;
  title: string;
  duration: string;
  description: string;
  notes: NoteItem[];
  characteristics: string[];
}

export interface DetailFeature {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  size: '50ml' | '100ml';
  price: number;
  quantity: number;
  engraving?: string;
  image: string;
}

export interface CompanionFragrance {
  id: string;
  name: string;
  subtitle: string;
  concentration: string;
  price: number;
  description: string;
  notes: string[];
  image: string;
  badge?: string;
}

export interface Boutique {
  id: string;
  city: string;
  name: string;
  address: string;
  neighborhood: string;
  hours: string;
  phone: string;
  flagship?: boolean;
  mapEmbedUrl: string;
  mapsDirectUrl: string;
}

export interface BestSellerFragrance {
  id: string;
  rank: number;
  badge: string;
  name: string;
  subtitle: string;
  concentration: string;
  rating: number;
  reviewsCount: number;
  pricing: {
    '50ml': number;
    '100ml': number;
  };
  description: string;
  keyNotes: string[];
  sillage: string;
  longevity: string;
  image: string;
}

export interface PerfumeCollectionItem {
  id: string;
  title: string;
  tagline: string;
  family: string;
  description: string;
  flaconsCount: number;
  signatureNotes: string[];
  image: string;
  mood: string;
}

export interface TestimonialReview {
  id: string;
  author: string;
  title: string;
  city: string;
  country: string;
  fragrance: string;
  rating: number;
  date: string;
  quote: string;
  verified: boolean;
  avatarInitials: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Craftsmanship' | 'Ordering & Care' | 'Boutiques & Concierge';
}

export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}
