/* eslint-disable react/prop-types */
const Button = ({ type = "button", children, className = "" }) => {
  return (
    <button
      className={`flex items-center p-4 justify-center text-base font-semibold rounded-xl ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
