import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActivityIndicator } from 'react-native';

import { Creators as loginActions } from '~/store/ducks/signin';
import '~/config/ReactotronConfig';

import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText
} from './styles';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    token: '',
    error: ''
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleSignInPress = async () => {
    const { email, password } = this.state;
    const { loginRequest } = this.props;
    if (email.length === 0 || password.length === 0) {
      this.setState(
        { error: 'Preencha usuário e senha para continuar!' },
        () => false
      );
    } else {
      loginRequest(email, password);
    }
  };

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Logo
          source={require('../../images/airbnb_logo.png')}
          resizeMode="contain"
        />
        <Input
          placeholder="Endereço de e-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        {this.state.error.length !== 0 && (
          <ErrorMessage>{this.state.error}</ErrorMessage>
        )}
        <Button onPress={this.handleSignInPress}>
          {this.props.loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Entrar</ButtonText>
          )}
        </Button>
        <SignUpLink onPress={this.handleCreateAccountPress}>
          <SignUpLinkText>Criar conta grátis</SignUpLinkText>
        </SignUpLink>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(loginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
