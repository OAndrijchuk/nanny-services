import { useState } from 'react';
import { SpriteSVG } from '../../assets/images/SpriteSVG';
import ColorBtn from '../ColorBtn/ColorBtn';
import Input from '../Input/Input';
import {
  Form,
  RegisterContainer,
  RegisterText,
  RegisterTitle,
} from './RegistrationForm.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordShow = () => {
    setShowPassword(prev => !prev);
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, 'Name should be of minimum 2 characters length')
        .required('Name is required'),
      email: Yup.string()
        .email('Email is not correct')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <RegisterContainer>
      <RegisterTitle>Registration</RegisterTitle>
      <RegisterText>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </RegisterText>
      <Form onSubmit={formik.handleSubmit}>
        <Input type="text" id="name" placeholder="Name" formik={formik} />
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
        <ColorBtn type="submit">Sign Up</ColorBtn>
      </Form>
    </RegisterContainer>
  );
};

export default RegistrationForm;
