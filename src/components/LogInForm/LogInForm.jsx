import { useState } from 'react';
import { SpriteSVG } from '../../assets/images/SpriteSVG';
import ColorBtn from '../ColorBtn/ColorBtn';
import Input from '../Input/Input';
import {
  Form,
  LogInContainer,
  LogInText,
  LogInTitle,
} from './LogInForm.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signIn } from '../../redux/API/auth';
import { closeModal } from '../../redux/Global/globalSlice';
import { useDispatch } from 'react-redux';

const LogInForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordShow = () => {
    setShowPassword(prev => !prev);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Email is not correct')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    }),
    onSubmit: async values => {
      await signIn(values);

      dispatch(closeModal());
    },
  });

  return (
    <LogInContainer>
      <LogInTitle>Log In</LogInTitle>
      <LogInText>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </LogInText>
      <Form onSubmit={formik.handleSubmit}>
        <Input type="email" id="email" placeholder="Email" formik={formik} />
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          formik={formik}
          rightIcon={
            <button type="button" onClick={isPasswordShow}>
              <SpriteSVG name={showPassword ? 'eye' : 'eye-off'} />
            </button>
          }
        />
        <ColorBtn type="submit">Log In</ColorBtn>
      </Form>
    </LogInContainer>
  );
};

export default LogInForm;
