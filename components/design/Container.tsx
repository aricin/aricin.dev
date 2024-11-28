import React from 'react';

export interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return <div className={`px-4 md:px-16 ${className}`}>{children}</div>;
};

export default Container;
