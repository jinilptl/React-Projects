import React from "react";
import { FiEdit3, FiTrash2, FiUser, FiClock, FiFolder } from "react-icons/fi";

const Card = () => {
  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl shadow-2xl p-6 w-[320px] max-w-full text-white transition-all hover:scale-[1.03] duration-300 hover:shadow-indigo-500/30">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-indigo-500 p-2 rounded-full">
          <FiFolder size={20} />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Project Alpha</h2>
          <p className="text-gray-400 text-sm">UI/UX Case Study</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        This project focuses on building an intuitive user interface with excellent user experience.
        It includes responsive design, animation, and accessibility.
      </p>

      {/* Info Row */}
      <div className="flex justify-between text-gray-400 text-sm mb-4">
        <div className="flex items-center gap-1">
          <FiUser size={16} />
          <span>Jinil Patel</span>
        </div>
        <div className="flex items-center gap-1">
          <FiClock size={16} />
          <span>3 days ago</span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 pt-4 flex justify-end gap-4 text-gray-300">
        <button className="hover:text-indigo-400 transition">
          <FiEdit3 size={20} />
        </button>
        <button className="hover:text-red-400 transition">
          <FiTrash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default Card;
