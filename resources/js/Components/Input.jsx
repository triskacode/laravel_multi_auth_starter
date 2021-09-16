import { useEffect, useRef } from "react";

export default function Input({
  label = "",
  type = "text",
  name,
  handleChange,
  className = "",
  isFocused,
  ...props
}) {
  const input = useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <label className="block">
      <span className="text-gray-700 text-sm">{label}</span>
      <input
        ref={input}
        type={type}
        name={name}
        onChange={(e) => handleChange(e)}
        className={`mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 ${className}`}
        {...props}
      />
    </label>
  );
}
