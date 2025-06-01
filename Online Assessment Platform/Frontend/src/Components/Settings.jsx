import React from "react";
import { motion } from "framer-motion";
import { Settings as Gear } from "lucide-react";

const Settings = () => {
  return (
    <motion.div
      className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10"
      initial={{ rotate: -5, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <Gear size={32} className="text-indigo-500" />
        <h2 className="text-3xl font-bold text-gray-800">Settings</h2>
      </div>
      <p className="text-gray-600">
        Manage your profile, notifications, and system preferences from this
        panel.
      </p>
    </motion.div>
  );
};

export default Settings;
