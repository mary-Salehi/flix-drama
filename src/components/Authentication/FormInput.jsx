
function FormInput({
  children,
  label,
  name,
  register,
  errors,
  type = "text",
  placeholder = "",
  disabled = false,
  className = "",
  inputClassName = "",
  labelClassName = "",
  errorClassName = "",
  showError = true,
  ...rest
}) {
  const error = errors?.[name];

  return (
    <div className="space-y-3">
      {label && (
        <label htmlFor={name} className={`${labelClassName} flex items-center gap-3`}>
          {children}
          <span className="text-[#292D32] dark:text-white font-bold">{label}</span>
        </label>
      )}

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`${inputClassName} w-full rounded-xl p-3 font-semibold dark:bg-primary-1-dark bg-[#F8F8F8] placholder-[#717171] placeholder:text-xs dark:text-white focus:outline-0`}
        {...register(name)}
        {...rest}
      />

      {showError && error && (
        <div className={`p-1 px-3 text-xs bg-red-700 rounded-md text-white ${errorClassName}`}>
            {error.message}
          </div>
      )}
    </div>
  );
}

export default FormInput;
