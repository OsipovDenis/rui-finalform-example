import React, {Component} from 'react'
import {Form, Field} from 'react-final-form'
import RuiInput from './RuiInput'
import Button from 'rambler-ui/Button'

const throttling = (ms = 2000) => new Promise(resolve => {setTimeout(resolve, ms)})

const simplestEmailRegExp = /\w@\w/

const validate = values => {
  const errors = {}
  if (!values.email)
    errors.email = 'E-mail is required'
  if (!values.name)
    errors.name = 'Name is required'
  if (!values.surname)
      errors.surname = 'Surname is required'
  if (!values.password)
    errors.password = 'Password is required'
  return errors
}

export default class MyForm extends Component {

  state = {
    loading: false
  }

  onSubmit = async values => {
    if (!simplestEmailRegExp.test(values.email))
      return {email: 'Not valid e-mail'}

    this.setState({loading: true})
    await throttling()
    this.setState({loading: false}, () => {alert('Form submitted!')})
  }

  render() {
    const {loading} = this.state
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={validate}
        render={({handleSubmit, pristine, invalid, dirtySinceLastSubmit, submitFailed, ...other}) => {
          const disabled = submitFailed ? !dirtySinceLastSubmit : (pristine || invalid)
          return (
            <form onSubmit={handleSubmit} style={{width: '200px'}}>
              <Field disabled={loading} name="email" component={RuiInput} placeholder="E-mail" />
              <Field disabled={loading} name="name" component={RuiInput} placeholder="Name" />
              <Field disabled={loading} name="surname" component={RuiInput} placeholder="Surname" />
              <Field disabled={loading} name="password" component={RuiInput} placeholder="Password" />
              <Button
                loading={this.state.loading}
                type="primary"
                buttonType="submit"
                rounded
                disabled={disabled} >
                Submit
              </Button>
            </form>
          )
        }} />
    )
  }
}
