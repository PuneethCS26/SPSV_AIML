import axios from 'axios';
import { Contact, Notification, EngagementSuggestion } from '../types';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactsApi = {
  getContacts: async (): Promise<Contact[]> => {
    const { data } = await api.get('/contacts');
    return data;
  },
  
  addContact: async (contact: Omit<Contact, 'id'>): Promise<Contact> => {
    const { data } = await api.post('/contacts', contact);
    return data;
  },
  
  updateContact: async (id: string, contact: Partial<Contact>): Promise<Contact> => {
    const { data } = await api.patch(`/contacts/${id}`, contact);
    return data;
  },
  
  deleteContact: async (id: string): Promise<void> => {
    await api.delete(`/contacts/${id}`);
  },
};

export const notificationsApi = {
  getNotifications: async (): Promise<Notification[]> => {
    const { data } = await api.get('/notifications');
    return data;
  },
  
  markAsRead: async (id: string): Promise<void> => {
    await api.patch(`/notifications/${id}/read`);
  },
  
  markAllAsRead: async (): Promise<void> => {
    await api.patch('/notifications/read-all');
  },
};

export const suggestionsApi = {
  getSuggestions: async (): Promise<EngagementSuggestion[]> => {
    const { data } = await api.get('/suggestions');
    return data;
  },
  
  completeSuggestion: async (id: string): Promise<void> => {
    await api.patch(`/suggestions/${id}/complete`);
  },
  
  dismissSuggestion: async (id: string): Promise<void> => {
    await api.patch(`/suggestions/${id}/dismiss`);
  },
  
  snoozeSuggestion: async (id: string, until: Date): Promise<void> => {
    await api.patch(`/suggestions/${id}/snooze`, { until });
  },
};