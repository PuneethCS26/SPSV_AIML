import React, { useEffect } from 'react';
import { MessageSquare, ThumbsUp, Calendar } from 'lucide-react';
import { Contact } from '../types';
import { useContactStore } from '../store/contactStore';

const ContactList = () => {
  const { contacts, isLoading, error, fetchContacts } = useContactStore();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  if (isLoading) {
    return <div className="flex justify-center py-8">Loading contacts...</div>;
  }

  if (error) {
    return <div className="text-red-600 py-8">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">Key Contacts</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search contacts..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

const ContactCard = ({ contact }: { contact: Contact }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
    <div className="flex items-start space-x-4">
      <img
        src={contact.imageUrl}
        alt={contact.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-gray-900">{contact.name}</h3>
        <p className="text-gray-600 text-sm">{contact.title}</p>
        <p className="text-gray-500 text-sm">{contact.company}</p>
      </div>
    </div>

    <div className="mt-4 pt-4 border-t border-gray-100">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Engagement Score: 
          <span className="ml-1 font-semibold text-indigo-600">
            {contact.engagementScore}%
          </span>
        </div>
      </div>
    </div>

    <div className="mt-4 flex space-x-2">
      <ActionButton icon={<MessageSquare className="w-4 h-4" />} label="Message" />
      <ActionButton icon={<ThumbsUp className="w-4 h-4" />} label="Engage" />
      <ActionButton icon={<Calendar className="w-4 h-4" />} label="Schedule" />
    </div>
  </div>
);

const ActionButton = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors">
    {icon}
    <span>{label}</span>
  </button>
);

export default ContactList;