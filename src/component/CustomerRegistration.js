import React, { useState } from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage, ErrorStyles } from 'formik'

let ProfileSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email('DAS IST KEINE GUELTIGE EMAIL ADRESSE!!!')
    .max(50, 'Too Long!')
    .required('Required'),
})

export default function CustomerRegistration({ onRegistration }) {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={ProfileSchema}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post('http://localhost:2020/customers', { name, email })
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
          <ErrorMessage name="name" component="div" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

/*  const handleSubmit = (event) => {
    event.preventDefault()
    if (name && email) {
      axios
        .post('http://localhost:2020/customers', { name, email })
        .then(() => {
          setName('')
          setEmail('')
          alert('Danke für Ihre Daten. Wir werden sie demnächst verkaufen :P')
          onRegistration(name)
        })
        .catch((error) => {
          alert('Sie sind hier nicht willkommen.')
          console.log(error)
        })
    }

    <ErrorStyles name="email" component="div" />
  }*/
