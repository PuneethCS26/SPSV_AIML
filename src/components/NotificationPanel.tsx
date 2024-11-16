import React, { useEffect } from 'react';
import { Bell, Award, Briefcase, Calendar } from 'lucide-react';
import { Notification } from '../types';
import { useNotificationStore } from '../store/notificationStore';

const NotificationPanel = () => {
  const { notifications, isLoading, error, fetchNotifications, markAllAsRead } = useNotificationStore();

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  if (isLoading) {
    return <div className="flex justify-center py-8">Loading notifications...</div>;
  }

  if (error) {
    return <div className="text-red-600 py-8">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Recent Updates</h2>
        <button 
          onClick={markAllAsRead}
          className="text-indigo-600 hover:text-indigo-700"
        >
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
};

const NotificationCard = ({ notification }: { notification: Notification }) => {
  const { markAsRead } = useNotificationStore();

  const getIcon = (type: string) => {
    switch (type) {
      case 'achievement':
        return <Award className="w-6 h-6 text-green-500" />;
      case 'job_change':
        return <Briefcase className="w-6 h-6 text-blue-500" />;
      case 'work_anniversary':
        return <Calendar className="w-6 h-6 text-purple-500" />;
      default:
        return <Bell className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <div 
      className={`p-4 rounded-lg ${notification.isRead ? 'bg-gray-50' : 'bg-indigo-50'}`}
      onClick={() => !notification.isRead && markAsRead(notification.id)}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">{getIcon(notification.type)}</div>
        <div className="flex-1">
          <p className="text-gray-900">{notification.message}</p>
          <p className="text-sm text-gray-500 mt-1">
            {new Date(notification.timestamp).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
        {!notification.isRead && (
          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export default NotificationPanel;