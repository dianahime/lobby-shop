import React from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styled from 'styled-components'

let ProfileSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email('DAS IST KEINE GUELTIGE EMAIL ADRESSE, DU HONK!!!')
    .max(50, 'Too Long!')
    .required('Required'),
})

export default function CustomerRegistration({ onRegistration }) {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={ProfileSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values.name, values.email)
        axios
          .post('http://localhost:2020/customers', {
            name: values.name,
            email: values.email,
          })
          .then(() => {
            alert('Danke für Ihre Daten. Wir werden sie demnächst verkaufen :P')
            onRegistration(setSubmitting(values))
          })
          .catch((error) => {
            alert('Sie sind hier nicht willkommen.')
            console.log(error)
          })
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting }) => (
        <Form className="formik">
          <Field type="name" name="name" />
          <ErrorMessageStyled name="name" component="div" />
          <Field type="email" name="email" />
          <ErrorMessageStyled name="email" component="div" />
          <ButtonStyled type="submit" disabled={isSubmitting}>
            Submit
          </ButtonStyled>
        </Form>
      )}
    </Formik>
  )
}

const ErrorMessageStyled = styled(ErrorMessage)`
  border: 2px dashed hotpink;
  color: hotpink;
  padding: 5px;
  margin-bottom: 10px;
`

const ButtonStyled = styled.button`
  color: white;
`
const FormStyled = styled.form`
  input {
    font-size: 1.2rem;
    margin-bottom: 15px;
    border: none;
    border-radius: 3px;
    padding: 5px;
    width: 80%;
  }

  button {
    font-size: 1.1rem;
    border: none;
    color: var(--base);
    background-color: var(--text);
    padding: 10px;
    border-radius: 3px;
  }
`
