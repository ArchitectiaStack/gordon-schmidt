export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: string; // Used to select Lucide icons dynamically
  details: string[];
}

export interface CaseResolution {
  id: string;
  title: string;
  clientType: string;
  recovery: string;
  recoveryValue: number; // For counting up
  description: string;
  year: number;
  badge: string;
}

export interface Attorney {
  name: string;
  role: string;
  image: string;
  specialty: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  role: string;
  avatar: string;
  audioDuration: string;
}

export interface DiagnosticResult {
  attorneyName: string;
  attorneyTitle: string;
  attorneyImage: string;
  matchScore: number;
  focusArea: string;
  strategyMessage: string;
}
