export default function InputField2({ type, value, onChange, name, required, label }) {
    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="py-3 px-4 border text-lg bg-white text-tertiary rounded-lg placeholder:text-tertiary placeholder:text-base focus:ring-none focus:outline-none"
        required={required}
        placeholder={label}
      />
    );
  };