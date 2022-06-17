export default function Input({ name, value, onChange, error, type }) {
  return (
    <>
      <input
        className={`input-signup ${error ? "input-error" : ""} `}
        type={type}
        placeholder={error ? `${name} is required` : name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
