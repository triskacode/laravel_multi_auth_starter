export default function Checkbox({ label, name, value, handleChange }) {
  return (
    <div className="block">
      <div className="mt-2">
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name={name}
              value={value}
              onChange={(e) => handleChange(e)}
              className="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
            />
            <span className="ml-2 text-sm">{label}</span>
          </label>
        </div>
      </div>
    </div>
  );
}
