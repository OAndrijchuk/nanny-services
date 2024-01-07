import { ColorButton } from './ColorBtn.styled';

const ColorBtn = ({ type = 'button', children, onClick }) => {
  return (
    <ColorButton type={type} onClick={onClick}>
      {children}
    </ColorButton>
  );
};

export default ColorBtn;
