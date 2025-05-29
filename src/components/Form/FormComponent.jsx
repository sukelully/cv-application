export default function FormComponent({
  label,
  name,
  value,
  onChange,
  labelClassName = ''
}) {
  return (
    <label className={`flex flex-col font-semibold ${labelClassName}`}>
      {label}
      <input
        className="bg-neutral-200 rounded-md p-1 font-normal"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
