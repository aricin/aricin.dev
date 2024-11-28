import React from 'react';

export interface SectionProps {
  children?: React.ReactNode;
  isFullWidth?: boolean;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  className = '',
  isFullWidth = false,
  children,
}) => {
  return (
    <div className={`flex flex-col h-full items-center ${className}`}>
      <div
        className={`flex flex-col flex-grow h-full ${
          isFullWidth ? 'w-full' : 'w-full max-w-7xl px-4'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
