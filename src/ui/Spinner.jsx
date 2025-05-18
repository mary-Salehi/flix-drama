function Spinner({
  size = "md",
  borderSize = 2,
  color = "currentColor",
  label = "Loading...",
  className = "",
}) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  return (
    <div
      className={`inline-block animate-spin rounded-full border-${borderSize} border-solid border-${color} border-r-transparent ${sizeClasses[size]} ${className}`}
      role="status"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default Spinner;
