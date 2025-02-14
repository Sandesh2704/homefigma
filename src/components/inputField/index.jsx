export default function InputField({ type, value, onChange, name, required, label }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="py-3 px-4 border text-xl placeholder:text-xl border-[#011627] text-tertiary rounded-lg placeholder:text-tertiary  focus:ring-none focus:outline-none"
      required={required}
      placeholder={label}
    />
  );
};