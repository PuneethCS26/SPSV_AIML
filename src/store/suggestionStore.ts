import create from 'zustand';
import { EngagementSuggestion } from '../types';
import { suggestionsApi } from '../services/api';
import { mockSuggestions } from '../services/mockData';

interface SuggestionStore {
  suggestions: EngagementSuggestion[];
  isLoading: boolean;
  error: string | null;
  fetchSuggestions: () => Promise<void>;
  completeSuggestion: (id: string) => Promise<void>;
  dismissSuggestion: (id: string) => Promise<void>;
  snoozeSuggestion: (id: string, until: Date) => Promise<void>;
}

export const useSuggestionStore = create<SuggestionStore>((set) => ({
  suggestions: mockSuggestions, // Initialize with mock data
  isLoading: false,
  error: null,

  fetchSuggestions: async () => {
    set({ isLoading: true });
    try {
      // For now, just use mock data
      set({ suggestions: mockSuggestions, error: null });
    } catch (error) {
      set({ error: 'Failed to fetch suggestions' });
    } finally {
      set({ isLoading: false });
    }
  },

  completeSuggestion: async (id) => {
    try {
      set((state) => ({
        suggestions: state.suggestions.filter((s) => s.id !== id),
        error: null,
      }));
    } catch (error) {
      set({ error: 'Failed to complete suggestion' });
    }
  },

  dismissSuggestion: async (id) => {
    try {
      set((state) => ({
        suggestions: state.suggestions.filter((s) => s.id !== id),
        error: null,
      }));
    } catch (error) {
      set({ error: 'Failed to dismiss suggestion' });
    }
  },

  snoozeSuggestion: async (id, until) => {
    try {
      set((state) => ({
        suggestions: state.suggestions.filter((s) => s.id !== id),
        error: null,
      }));
    } catch (error) {
      set({ error: 'Failed to snooze suggestion' });
    }
  },
}));