/* eslint-disable react/prop-types */

export const ProductGrid = ({ children, className = "" }) => {
  return (
    <div className={`grid grid-cols-4 gap-x-7 ${className}`}>{children}</div>
  );
};
