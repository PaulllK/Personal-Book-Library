const TabWrapper = ({ active, children }) => {
  const contentClasses = `p-4 ${active ? 'border-x-2 border-b-2 border-x-gray-300 border-b-gray-300' : 'hidden'}`;

  return <div className={contentClasses}>{active && children}</div>;
};

export default TabWrapper;
