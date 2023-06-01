import "./Input.css";

const Input = (props) => {
  return (
    <div className={`input ${props.className}`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input className={props.className} {...props.input} />
    </div>
  );
};

export default Input;
