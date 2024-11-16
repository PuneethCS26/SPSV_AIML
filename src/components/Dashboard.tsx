import React, { useState } from 'react';
import { Users, Bell, Sparkles, BarChart } from 'lucide-react';
import ContactList from './ContactList';
import NotificationPanel from './NotificationPanel';
import SuggestionPanel from './SuggestionPanel';
import AnalyticsPanel from './AnalyticsPanel';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('contacts');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Social Engagement Hub</h1>
            <div className="flex items-center space-x-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Add Contact
              </button>
            </div>
          </div>
        </header>

        <nav className="flex space-x-4 mb-8">
          <TabButton
            icon={<Users className="w-5 h-5" />}
            label="Contacts"
            isActive={activeTab === 'contacts'}
            onClick={() => setActiveTab('contacts')}
          />
          <TabButton
            icon={<Bell className="w-5 h-5" />}
            label="Notifications"
            isActive={activeTab === 'notifications'}
            onClick={() => setActiveTab('notifications')}
          />
          <TabButton
            icon={<Sparkles className="w-5 h-5" />}
            label="AI Suggestions"
            isActive={activeTab === 'suggestions'}
            onClick={() => setActiveTab('suggestions')}
          />
          <TabButton
            icon={<BarChart className="w-5 h-5" />}
            label="Analytics"
            isActive={activeTab === 'analytics'}
            onClick={() => setActiveTab('analytics')}
          />
        </nav>

        <main className="bg-white rounded-2xl shadow-xl p-6">
          {activeTab === 'contacts' && <ContactList />}
          {activeTab === 'notifications' && <NotificationPanel />}
          {activeTab === 'suggestions' && <SuggestionPanel />}
          {activeTab === 'analytics' && <AnalyticsPanel />}
        </main>
      </div>
    </div>
  );
};

const TabButton = ({ icon, label, isActive, onClick }: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
      isActive
        ? 'bg-indigo-600 text-white'
        : 'text-gray-600 hover:bg-indigo-50'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Dashboard;