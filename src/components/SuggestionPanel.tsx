import React, { useEffect } from 'react';
import { Sparkles, Clock, Flag } from 'lucide-react';
import { EngagementSuggestion } from '../types';
import { useSuggestionStore } from '../store/suggestionStore';

const SuggestionPanel = () => {
  const { suggestions, isLoading, error, fetchSuggestions } = useSuggestionStore();

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  if (isLoading) {
    return <div className="flex justify-center py-8">Loading suggestions...</div>;
  }

  if (error) {
    return <div className="text-red-600 py-8">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">AI-Powered Suggestions</h2>
        <div className="flex space-x-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg">
            <option>All Types</option>
            <option>Comments</option>
            <option>Messages</option>
            <option>Meetings</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <SuggestionCard key={suggestion.id} suggestion={suggestion} />
        ))}
      </div>
    </div>
  );
};

const SuggestionCard = ({ suggestion }: { suggestion: EngagementSuggestion }) => {
  const { completeSuggestion, dismissSuggestion, snoozeSuggestion } = useSuggestionStore();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-green-600 bg-green-50';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Sparkles className="w-6 h-6 text-indigo-500" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(suggestion.priority)}`}>
              {suggestion.priority.charAt(0).toUpperCase() + suggestion.priority.slice(1)} Priority
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              <span>Due {new Date(suggestion.dueDate).toLocaleDateString()}</span>
            </div>
          </div>
          <p className="mt-2 text-gray-900">{suggestion.message}</p>
          <div className="mt-4 flex space-x-2">
            <button 
              onClick={() => completeSuggestion(suggestion.id)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Take Action
            </button>
            <button 
              onClick={() => snoozeSuggestion(suggestion.id, new Date(Date.now() + 24 * 60 * 60 * 1000))}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Snooze
            </button>
            <button 
              onClick={() => dismissSuggestion(suggestion.id)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionPanel;