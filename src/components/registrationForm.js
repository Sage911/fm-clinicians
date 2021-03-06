// This component will render a registration form

import React from 'react'
import { Control, Form, actions, modelReducer } from 'react-redux-form'
import { connect } from 'react-redux'

import { registerUser } from '../actions/registrationActions'

import styles from './RegistrationForm.css'

@connect((store)=>{return{}})

class RegistrationForm extends React.Component {

  handleSubmit(values) {
    this.props.dispatch(registerUser(values))
  }

  render() {
    return (
        <main className={styles.main}>
          <Form className={styles.registrationForm} name="registration" model="forms.registration" onSubmit={ values => this.handleSubmit(values)}>

            <h2 className={styles.registrationForm__label}>ABOUT YOU</h2>

            <Control.text className={styles.registrationForm__input} model="registration.name" maxLength="25" placeholder="Full Name" required />

            <Control.text className={styles.registrationForm__input} type="number" max="99" model="registration.experience" placeholder="Years Of Experience" required />

            <Control.text className={styles.registrationForm__input} model="registration.specialty" placeholder="Specialty" required/>

            <Control.text className={styles.registrationForm__input} type="email" model="registration.email" placeholder="Email" required />

            <span className={styles.registrationForm__saveSection}>
              <button className={styles.registrationForm__save} type="submit">SAVE</button>
            </span>

        </Form>
      </main>
    )
  }
}

export default RegistrationForm
