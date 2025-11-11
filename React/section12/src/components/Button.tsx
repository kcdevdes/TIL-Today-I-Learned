import './Button.css';

const Button = ({
  text = '',
  type = 'default',
  onClick,
}: {
  text?: string;
  type?: string;
  onClick?: () => void;
}) => {
  return (
    <button className={`button button_${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
