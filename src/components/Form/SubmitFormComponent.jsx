export default function SubmitFormComponent({
    label,
    name,
    defaultValue,
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
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </label>
    );
  }
  