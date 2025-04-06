
type ColoredButtonProps = {
  text: string,
  onClick: () => void,
  bgColor: string
}

const ColoredButton = ({ text, onClick, bgColor } : ColoredButtonProps) => {
  return (
    <button onClick={onClick} style={{backgroundColor: bgColor}} >{text}</button>
  );
}

export default ColoredButton;