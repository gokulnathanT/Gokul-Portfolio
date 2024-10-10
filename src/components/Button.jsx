import React from 'react';

const Button = ({ link, children }) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer'); // Opens the link in a new tab
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-block px-2 py-1 text-xs font-bold text-[#2c9caf] uppercase transition-all duration-1000 transform rounded border-2 border-[#2c9caf]  hover:scale-110 hover:border-[#70bdca] hover:shadow-lg overflow-hidden"
    >
      {children}
      <span className="absolute left-[-50px] top-0 w-0 h-full bg-[#2c9caf] skew-x-45 transition-width duration-1000 z-[-1] hover:w-[250%]" />
    </button>
  );
};

export default Button;
