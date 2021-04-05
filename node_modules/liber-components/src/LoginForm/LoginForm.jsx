import React, { PureComponent as Component, Fragment } from 'react';
import validarCpf from 'validar-cpf';
import PropTypes from 'prop-types';
import {
  LoginContainer, Form, Title, Button,
  FormSeparator, Logo,
} from './LoginForm.styles';
import { TextField } from '../Inputs';


class LoginForm extends Component {
  state = {
    cpf: '',
    pin: '',
    otp: '',
    errors: {
      cpf: '',
      pin: '',
      otp: '',
    },
  }

  handleCallback = callback => (...args) => () => callback(...args)


  handleFieldChange = field => (value) => {
    const { onFieldChange } = this.props;
    this.setState({ [field]: value }, this.handleCallback(onFieldChange)(field, value));
  }

  validateForm = (cpf, pin, otp) => {
    const errors = {};

    if (pin === '') {
      errors.pin = 'Campo obrigatório';
    }
    if (otp === '') {
      errors.otp = 'Campo obrigatório';
    }
    if (!validarCpf(cpf)) {
      errors.cpf = 'CPF Inválido';
    }
    if (cpf === '') {
      errors.cpf = 'Campo obrigatório';
    }

    return { isValid: Object.keys(errors).length === 0, errors };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { cpf, pin, otp } = this.state;
    const { isValid, errors } = this.validateForm(cpf, pin, otp);

    if (isValid) {
      this.setState({
        cpf: '',
        pin: '',
        otp: '',
      }, this.handleCallback(onSubmit)({ cpf, pin, otp }));
    } else {
      this.setState({ errors });
    }
  }

  render() {
    const {
      cpf, pin, otp, errors,
    } = this.state;
    const {
      title, logo, button, containerProps,
    } = this.props;
    const submitButton = React.cloneElement(button, {
      type: 'submit',
    });
    return (
      <LoginContainer {...containerProps}>
        <Form onSubmit={this.handleSubmit}>
          <Title>{title}</Title>
          <TextField
            label="CPF"
            type="text"
            value={cpf}
            onChange={this.handleFieldChange('cpf')}
            fullWidth
            openLabel
            errorMessage={errors.cpf}
            mask="999.999.999-99"
            maskChar={null}
          />
          <TextField
            label="PIN"
            type="password"
            value={pin}
            onChange={this.handleFieldChange('pin')}
            fullWidth
            openLabel
            maxLength={4}
            errorMessage={errors.pin}
          />
          <TextField
            label="OTP"
            type="number"
            value={otp}
            onChange={this.handleFieldChange('otp')}
            fullWidth
            openLabel
            errorMessage={errors.otp}
          />
          {submitButton}
        </Form>
        {
          logo && (
            <Fragment>
              <FormSeparator />
              {logo}
            </Fragment>
          )
        }
      </LoginContainer>
    );
  }
}

LoginForm.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.node,
  button: PropTypes.node,
  onFieldChange: PropTypes.func,
  onSubmit: PropTypes.func,
  containerProps: PropTypes.shape({
    container: PropTypes.string,
    footer: PropTypes.node,
  }),
};

LoginForm.defaultProps = {
  title: 'Autenticação',
  logo: <Logo />,
  button: <Button type="submit">Entrar</Button>,
  containerProps: {
    container: undefined,
    footer: undefined,
  },
  onFieldChange: () => {},
  onSubmit: () => {},
};

export default LoginForm;
