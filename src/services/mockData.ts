import { Contact, Notification, EngagementSuggestion } from '../types';

export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Vidhya',
    title: 'Product Manager',
    company: 'TechCorp',
    profileUrl: 'https://linkedin.com/in/Vidhya',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    lastInteraction: '2024-03-15',
    engagementScore: 85
  },
  {
    id: '2',
    name: 'sagar',
    title: 'Software Engineer',
    company: 'InnovateTech',
    profileUrl: 'https://linkedin.com/in/Sagar',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    lastInteraction: '2024-03-10',
    engagementScore: 72
  }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'post',
    contactId: '1',
    message: 'Vidhya shared a new post about AI trends',
    timestamp: '2024-03-15T10:30:00Z',
    isRead: false
  },
  {
    id: '2',
    type: 'achievement',
    contactId: '2',
    message: 'Sagar earned a new certification in Cloud Architecture',
    timestamp: '2024-03-14T15:45:00Z',
    isRead: true
  }
];

export const mockSuggestions: EngagementSuggestion[] = [
  {
    id: '1',
    contactId: '1',
    type: 'comment',
    message: 'Congratulate Vidhya on her recent project launch',
    priority: 'high',
    dueDate: '2024-03-20'
  },
  {
    id: '2',
    contactId: '2',
    type: 'message',
    message: 'Follow up with Sagar about the tech conference',
    priority: 'medium',
    dueDate: '2024-03-25'
  }
];