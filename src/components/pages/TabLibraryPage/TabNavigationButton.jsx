import React from 'react';

const TabNavigationButton = ({ label, active, onClick, className }) => {
  const tabClasses = `w-full h-full text-xs py-1 px-1 xxs:py-2 xxs:px-4 xxs:text-base border-t-2 border-t-gray-300 font-semibold ${
    active ? 'text-gray-800' : 'text-gray-600 bg-gray-200 hover:text-gray-300 transition'
  }`;
  return (
    <div
      className={`${className} relative w-1/3 sm:w-auto border-r-2 border-r-gray-300 ${
        active ? '' : 'border-b-2 border-b-gray-300'
      }`}
    >
      {active && <div className="absolute -top-1.5 w-full h-1.5 bg-gray-500"></div>}
      <button className={tabClasses} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default TabNavigationButton;
