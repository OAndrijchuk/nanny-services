import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import {
  ContactContainer,
  ContactText,
  ContactTitle,
  Form,
  InputContainer,
  NannyInfo,
  NannyLabel,
  NannyName,
  NannyPhoto,
  TextareaStyle,
} from './ContactForm.styled';
import ColorBtn from '../ColorBtn/ColorBtn';

const ContactForm = ({ nanny }) => {
  const formik = useFormik({
    initialValues: {
      address: '',
      phoneNumber: '',
      childAge: '',
      time: '',
      email: '',
      parentName: '',
      comment: '',
    },
    validationSchema: Yup.object().shape({
      parentName: Yup.string().min(
        2,
        'Name should be of minimum 2 characters length'
      ),
      email: Yup.string().email('Email is not correct'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <ContactContainer>
      <ContactTitle>Make an appointment with a babysitter</ContactTitle>
      <ContactText>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </ContactText>
      <NannyInfo>
        <NannyPhoto src={nanny.avatar_url} alt={nanny.name} />
        <div>
          <NannyLabel>Your nanny</NannyLabel>
          <NannyName>{nanny.name}</NannyName>
        </div>
      </NannyInfo>
      <Form onSubmit={formik.handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            id="address"
            placeholder="Address"
            formik={formik}
          />
          <Input
            type="tel"
            id="phoneNumber"
            placeholder="+380"
            formik={formik}
          />
          <Input
            type="tel"
            id="childAge"
            placeholder="Child's age"
            formik={formik}
          />
          <Input type="time" id="time" placeholder="Address" formik={formik} />
        </InputContainer>
        <Input type="email" id="email" placeholder="Email" formik={formik} />
        <Input
          type="text"
          id="parentName"
          placeholder="Father's or mother's name"
          formik={formik}
        />
        <TextareaStyle name="comment" placeholder="Comment"></TextareaStyle>

        <ColorBtn type="submit">Send</ColorBtn>
      </Form>
    </ContactContainer>
  );
};

export default ContactForm;
