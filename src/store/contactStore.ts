import create from 'zustand';
import { Contact } from '../types';
import { contactsApi } from '../services/api';
import { mockContacts } from '../services/mockData';

interface ContactStore {
  contacts: Contact[];
  isLoading: boolean;
  error: string | null;
  fetchContacts: () => Promise<void>;
  addContact: (contact: Omit<Contact, 'id'>) => Promise<void>;
  updateContact: (id: string, contact: Partial<Contact>) => Promise<void>;
  deleteContact: (id: string) => Promise<void>;
}

export const useContactStore = create<ContactStore>((set) => ({
  contacts: mockContacts, // Initialize with mock data
  isLoading: false,
  error: null,

  fetchContacts: async () => {
    set({ isLoading: true });
    try {
      // For now, just use mock data
      set({ contacts: mockContacts, error: null });
    } catch (error) {
      set({ error: 'Failed to fetch contacts' });
    } finally {
      set({ isLoading: false });
    }
  },

  addContact: async (contact) => {
    set({ isLoading: true });
    try {
      const newContact = { ...contact, id: Date.now().toString() };
      set((state) => ({
        contacts: [...state.contacts, newContact],
        error: null,
      }));
    } catch (error) {
      set({ error: 'Failed to add contact' });
    } finally {
      set({ isLoading: false });
    }
  },

  updateContact: async (id, contact) => {
    set({ isLoading: true });
    try {
      set((state) => ({
        contacts: state.contacts.map((c) => (c.id === id ? { ...c, ...contact } : c)),
        error: null,
      }));
    } catch (error) {
      set({ error: 'Failed to update contact' });
    } finally {
      set({ isLoading: false });
    }
  },

  deleteContact: async (id) => {
    set({ isLoading: true });
    try {
      set((state) => ({
        contacts: state.contacts.filter((c) => c.id !== id),
        error: null,
      }));
    } catch (error) {
      set({ error: 'Failed to delete contact' });
    } finally {
      set({ isLoading: false });
    }
  },
}));