const Button = ({color, name, func}) => {
  return (
    <div>
      <button style={{ background: color }} onClick={() => func()}><i className={name}></i></button>
    </div>
  );
};

export default Button;