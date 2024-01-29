import "./Button.css";

export const Button = ({ buttonText, onClick }) => {
  const handleClick = () => {
    console.log(`Clicked ${buttonText}`);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className="button">
      {buttonText}
    </button>
  );
};
