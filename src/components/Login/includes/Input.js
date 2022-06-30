const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        name={props.id}
        id={props.id}
        type={props.type}
        onInput={props.onInput}
      />
    </div>
  );
};

export default Input;
