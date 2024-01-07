import {
  ErrorText,
  InputContainer,
  InputStyle,
  RightIconStyle,
} from './Input.styled';

const Input = ({ type, placeholder, rightIcon, id, formik }) => {
  const error = formik.touched[id] && formik.errors[id];

  return (
    <InputContainer>
      <InputStyle
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={formik.handleChange}
        value={formik.values[id]}
        $error={error}
      />
      {error && <ErrorText>*{error}</ErrorText>}
      <RightIconStyle>{rightIcon}</RightIconStyle>
    </InputContainer>
  );
};

export default Input;
