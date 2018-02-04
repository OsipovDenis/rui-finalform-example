import React, {Component} from 'react'
import FormGroup from 'rambler-ui/FormGroup'
import InputStatus from 'rambler-ui/InputStatus'
import Input from 'rambler-ui/Input'

export default class RuiInput extends Component {
  render() {
    const {input, meta, placeholder, disabled} = this.props
    return (
      <FormGroup>
        <InputStatus
          type={meta.touched && (meta.error || meta.submitError) ? 'error' : null}
          message={meta.touched && (meta.error || meta.submitError)} >
          <Input
            status={(meta.touched && (meta.error || meta.submitError)) ? 'error' : null}
            value={input.value}
            onChange={input.onChange}
            onBlur={input.onBlur}
            placeholder={placeholder}
            disabled={disabled} />
        </InputStatus>
      </FormGroup>
    )
  }
}
