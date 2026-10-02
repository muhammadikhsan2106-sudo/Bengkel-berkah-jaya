export type MotorcycleCategory = 'matic-standard' | 'matic-maxi' | 'bebek' | 'sport';

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  durationMinutes: number;
  isPopular?: boolean;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  points: string[];
  recommendedInterval: string;
  estimatedTime: string;
  startingPrice: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  motorcycle: string;
  rating: number;
  date: string;
  comment: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  fullName: string;
  whatsappNumber: string;
  motorcycleBrandModel: string;
  motorcyclePlate: string;
  serviceCategory: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
