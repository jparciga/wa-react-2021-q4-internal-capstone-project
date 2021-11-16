import './Button.css'

const Button = (props) => {
  return (
    <button className={`btn ${props.customClass}`}>{props.label}</button>
  )
};

export default Button;
