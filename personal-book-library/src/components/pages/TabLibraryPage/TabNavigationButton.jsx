import React from 'react';

const TabNavigationButton = ({ label, active, onClick, className }) => {
  const tabClasses = `cursor-pointer py-2 px-4 border-t-2 border-t-gray-300 font-semibold ${
    active ? 'text-gray-800' : 'text-gray-600 bg-gray-200 hover:text-gray-300 transition'
  }`;
  return (
    <li
      className={`${className} relative border-r-2 border-r-gray-300 ${active ? '' : 'border-b-2 border-b-gray-300'}`}
    >
      {active && <div className="absolute -top-1.5 w-full h-1.5 bg-gray-500"></div>}
      <button className={tabClasses} onClick={onClick}>
        {label}
      </button>
    </li>
  );
};

export default TabNavigationButton;
