import React, { useState } from 'react';

const Settings = () => {
  // State to manage toggle preferences
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle handler for notifications and dark mode
  const handleToggle = (setting) => {
    if (setting === 'notifications') {
      setNotifications(!notifications);
    } else if (setting === 'darkMode') {
      setDarkMode(!darkMode);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Settings</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-600">Username</label>
              <input type="text" id="username" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your username" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600">Email Address</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input type="password" id="password" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
            </div>
            <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
              Save Changes
            </button>
          </form>
        </div>

        {/* Notification Settings */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Notification Settings</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Email Notifications</span>
              <button
                onClick={() => handleToggle('notifications')}
                className={`w-12 h-6 flex items-center rounded-full ${notifications ? 'bg-blue-500' : 'bg-gray-300'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-all duration-300 ${notifications ? 'translate-x-6' : ''}`}></div>
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Push Notifications</span>
              <button
                onClick={() => handleToggle('notifications')}
                className={`w-12 h-6 flex items-center rounded-full ${notifications ? 'bg-blue-500' : 'bg-gray-300'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-all duration-300 ${notifications ? 'translate-x-6' : ''}`}></div>
              </button>
            </div>
          </div>
        </div>

        {/* Dark Mode Settings */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Appearance</h2>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Dark Mode</span>
            <button
              onClick={() => handleToggle('darkMode')}
              className={`w-12 h-6 flex items-center rounded-full ${darkMode ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
              <div className={`w-6 h-6 bg-white rounded-full transition-all duration-300 ${darkMode ? 'translate-x-6' : ''}`}></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
