export interface Contact {
  id: string;
  name: string;
  title: string;
  company: string;
  profileUrl: string;
  imageUrl: string;
  lastInteraction: string;
  engagementScore: number;
}

export interface Notification {
  id: string;
  type: 'post' | 'achievement' | 'job_change' | 'work_anniversary';
  contactId: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

export interface EngagementSuggestion {
  id: string;
  contactId: string;
  type: string;
  message: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
}