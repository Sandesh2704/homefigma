export const Checkbox = ({ label, name, checked, onChange }) => (
    <label className="flex items-center text-gray-500 text-sm">
        <input type="checkbox" name={name} checked={checked} onChange={onChange} className="mr-2" />
        {label}
    </label>
);

export const Radio = ({ label, name, value, checked, onChange }) => (
    <label className="flex items-center text-gray-500 text-sm">
        <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="mr-2" />
        {label}
    </label>
);

export const Select = ({ label, name, options, value, onChange }) => (
    <div className="">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select name={name} value={value} onChange={onChange} className="w-full border rounded px-3 py-2">
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
);


export const Input = ({ label, name, type, value, onChange, placeholder }) => (
    <div className="flex flex-col gap-2">
        <label className="text-sm tertiary">{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} className="w-full border rounded px-3 py-2   placeholder:text-sm focus:outline-none" placeholder={placeholder} />
    </div>
);

export const TextArea = ({ label, name, type, value, onChange, placeholder }) => (
    <div className="flex flex-col gap-2">
        <label className="text-sm tertiary">{label}</label>
        <textarea
            rows={4}
            className="w-full border rounded px-3 py-2 placeholder:text-sm focus:outline-none"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
);