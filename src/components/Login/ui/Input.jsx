export default function Input({ name, value, onChange, error }) {
  return (
    <>
      <input
        className={`input-signup ${error ? "input-error" : ""} `}
        type="text"
        placeholder={error ? `${name} is required` : name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
