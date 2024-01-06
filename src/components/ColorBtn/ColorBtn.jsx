import { ColorButton } from './ColorBtn.styled';

const ColorBtn = ({ children, onClick }) => {
  return (
    <ColorButton type="button" onClick={onClick}>
      {children}
    </ColorButton>
  );
};

export default ColorBtn;
