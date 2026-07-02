export type CaseCategory = 'labor' | 'realestate' | 'family' | 'commercial';

export const CATEGORY_LABELS: Record<CaseCategory, string> = {
  labor: 'قانون عمالي',
  realestate: 'قانون عقاري',
  family: 'أحوال شخصية',
  commercial: 'تجاري وشركات',
};

export type UserRole = 'client' | 'lawyer';
export type MembershipStatus = 'active' | 'pending' | 'rejected';

export interface UserProfile {
  uid: string;
  email: string;
  name: string;
  role: UserRole;
  status: MembershipStatus;
  createdAt: number;

  /** client-only */
  clientType?: 'فرد' | 'منشأة';
  assignedLawyerId?: string;

  /** lawyer-only */
  specialty?: CaseCategory;
  licenseNumber?: string;
  rating?: number;
  casesCount?: number;
}

export type CaseStatus = 'قيد النظر' | 'نشطة' | 'مكتملة';

export interface CaseRecord {
  id: string;
  clientId: string;
  clientName: string;
  lawyerId: string;
  lawyerName: string;
  title: string;
  type: CaseCategory;
  status: CaseStatus;
  progress: number;
  nextEvent: string;
  feeSar: number;
  createdAt: number;
}

export type ConsultationStatus = 'مكتملة' | 'قيد المعالجة';
export type ConsultationPriority = 'عاجل' | 'متوسط' | 'عادي';

export interface ConsultationRecord {
  id: string;
  clientId: string;
  clientName: string;
  question: string;
  answer: string;
  citation: string;
  category: CaseCategory;
  suggestedLawyerId: string | null;
  suggestedLawyerName: string | null;
  status: ConsultationStatus;
  needsReply: boolean;
  priority: ConsultationPriority;
  staffReply?: string;
  respondedAt?: number;
  createdAt: number;
}

export interface AppointmentRecord {
  id: string;
  clientId: string;
  caseId: string;
  title: string;
  dateLabel: string;
  location: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
  citation?: string;
  lawyer?: {
    id: string;
    name: string;
    specialtyLabel: string;
    rating: number;
  };
}
