import React from 'react';
import { BarChart2, TrendingUp, Users, Clock } from 'lucide-react';

const AnalyticsPanel = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Engagement Analytics</h2>
        <select className="px-4 py-2 border border-gray-300 rounded-lg">
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={<Users className="w-6 h-6 text-blue-500" />}
          title="Active Contacts"
          value="42"
          change="+12%"
          isPositive={true}
        />
        <MetricCard
          icon={<TrendingUp className="w-6 h-6 text-green-500" />}
          title="Engagement Rate"
          value="78%"
          change="+5%"
          isPositive={true}
        />
        <MetricCard
          icon={<Clock className="w-6 h-6 text-purple-500" />}
          title="Response Time"
          value="2.4h"
          change="-15%"
          isPositive={true}
        />
        <MetricCard
          icon={<BarChart2 className="w-6 h-6 text-indigo-500" />}
          title="Interaction Score"
          value="8.5"
          change="+0.8"
          isPositive={true}
        />
      </div>

      <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Timeline</h3>
        <div className="h-64 flex items-center justify-center text-gray-500">
          Chart visualization would go here
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({
  icon,
  title,
  value,
  change,
  isPositive
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {icon}
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
      <div className={`px-2.5 py-0.5 rounded-full text-sm ${
        isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
      }`}>
        {change}
      </div>
    </div>
  </div>
);

export default AnalyticsPanel;