export default function ValidationErrors({ errors: errorValidations }) {
  const errors = Object.keys(errorValidations);

  return (
    errors.length > 0 && (
      <div className="mb-4 px-4 py-2 bg-red-100 rounded-md">
        <div className="font-semibold text-red-600">
          Whoops! Something went wrong.
        </div>

        <ul className="mt-3 list-disc list-inside text-sm text-red-600">
          {errors.map((key, index) => (
            <li key={index}>{errorValidations[key]}</li>
          ))}
        </ul>
      </div>
    )
  );
}
