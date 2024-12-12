interface Props {
  label: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const LabeledTextInput = ({
  label,
  name,
  value,
  handleChange,
  placeholder,
}: Props) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        className="block w-full p-3 border border-gray-300 rounded-lg"
        placeholder={placeholder}
      />
      {/* {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>} */}
    </div>
  );
};

export default LabeledTextInput;
