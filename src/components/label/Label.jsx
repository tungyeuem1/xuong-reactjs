const Label = (proprs) => {
  const { children, htmlFor = "", className = "" } = proprs;
  return (
    <label>
      <label
        htmlFor={htmlFor}
        className={`inline-block text-sm font-medium cursor-pointer text-text-2 mt-5 ${className}`}
      >
        {children}
      </label>
    </label>
  );
};

export default Label;
