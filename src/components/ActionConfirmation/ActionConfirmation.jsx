import { useDispatch } from 'react-redux';
import ColorBtn from '../ColorBtn/ColorBtn';
import {
  ConfirmationBtnWrapper,
  ConfirmationTitle,
  YesButton,
} from './ActionConfirmation.styled';
import { closeModal } from '../../redux/Global/globalSlice';

const ActionConfirmation = ({ text, actionFunc }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ConfirmationTitle>{text}</ConfirmationTitle>
      <ConfirmationBtnWrapper>
        {actionFunc ? (
          <>
            <YesButton onClick={() => dispatch(actionFunc())}>Ok</YesButton>
            <ColorBtn onClick={() => dispatch(closeModal())}>No</ColorBtn>
          </>
        ) : (
          <ColorBtn onClick={() => dispatch(closeModal())}>Ok</ColorBtn>
        )}
      </ConfirmationBtnWrapper>
    </div>
  );
};

export default ActionConfirmation;
