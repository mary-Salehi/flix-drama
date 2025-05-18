function Loader({
  text = "در حال بارگذاری...",
  textSize = "md",
  textColor = "text-black/80 dark:text-white",
  font = "font-semibold",
}) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    xl2: "text-2xl",
    xl3: "text-3xl",
  };

  return (
    <div
      className={`w-full flex justify-center items-center ${font} ${textColor} ${sizeClasses[textSize]}`}
    >
      {text}
    </div>
  );
}

export default Loader;
