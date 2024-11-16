import create from 'zustand';
import { Notification } from '../types';
import { notificationsApi } from '../services/api';
import { mockNotifications } from '../services/mockData';

interface NotificationStore {
  notifications: Notification[];
  isLoading: boolean;
  error: string | null;
  fetchNotifications: () => Promise<void>;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: mockNotifications, // Initialize with mock data
  isLoading: false,
  error: null,

  fetchNotifications: async () => {
    set({ isLoading: true });
    try {
      // For now, just use mock data
      set({ notifications: mockNotifications, error: null });
    } catch (error) {
      set({ error: 'Failed to fetch notifications' });
    } finally {
      set({ isLoading: false });
    }
  },

  markAsRead: async (id) => {
    try {
      set((state) => ({
        notifications: state.notifications.map((n) =>
          n.id === id ? { ...n, isRead: true } : n
        ),
        error: null,
      }));
    } catch (error) {
      set({ error: 'Failed to mark notification as read' });
    }
  },

  markAllAsRead: async () => {
    try {
      set((state) => ({
        notifications: state.notifications.map((n) => ({ ...n, isRead: true })),
        error: null,
      }));
    } catch (error) {
      set({ error: 'Failed to mark all notifications as read' });
    }
  },
}));