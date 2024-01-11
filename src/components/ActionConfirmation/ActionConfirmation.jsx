import { useDispatch } from 'react-redux';
import ColorBtn from '../ColorBtn/ColorBtn';
import {
  ConfirmationBtnWrapper,
  ConfirmationTitle,
  YesButton,
} from './ActionConfirmation.styled';
import { closeModal } from '../../redux/Global/globalSlice';
import { getOut } from '../../redux/auth/operations';

const ActionConfirmation = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ConfirmationTitle>Are you sure you want to exit?</ConfirmationTitle>
      <ConfirmationBtnWrapper>
        <YesButton onClick={() => dispatch(getOut())}>Yes</YesButton>
        <ColorBtn onClick={() => dispatch(closeModal())}>No</ColorBtn>
      </ConfirmationBtnWrapper>
    </div>
  );
};

export default ActionConfirmation;
