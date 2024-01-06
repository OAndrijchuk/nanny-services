import { TransparentButton } from './TransparentBtn.styled';

const TransparentBtn = ({ children, onClick }) => {
  return (
    <TransparentButton type="button" onClick={onClick}>
      {children}
    </TransparentButton>
  );
};

export default TransparentBtn;
