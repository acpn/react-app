import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

const Logo = styled.Image`
  height: 15%;
  margin-bottom: 25px;
`;

const SuccessMessage = styled.Text`
  text-align: center;
  color: #08a092
  font-size: 16px;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
  padding-horizontal: 20px;
  padding-vertical: 15px;
  border-radius: 5px;
  background-color: #fff;
  align-self: stretch;
  margin-bottom: 15px;
  font-size: 16px;
  margin-horizontal: 20px;
`;

const Picker = styled.Picker`
  padding-horizontal: 20px;
  padding-vertical: 15px;
  border-radius: 5px;
  background-color: #fff;
  align-self: stretch;
  margin-bottom: 15px;
  font-size: 16px;
  margin-horizontal: 20px;
`;

const ErrorMessage = styled.Text`
  text-align: center;
  color: #ce2029;
  font-size: 16px;
  margin-bottom: 15px;
`;

const Button = styled.TouchableHighlight`
  padding: 20px;
  border-radius: 5px;
  background-color: #008000;
  align-self: stretch;
  margin: 15px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const SignInLink = styled.TouchableHighlight`
  padding: 10px;
  margin-top: 20px;
`;

const SignInLinkText = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export {
  Container,
  Logo,
  SuccessMessage,
  Input,
  Picker,
  ErrorMessage,
  Button,
  ButtonText,
  SignInLink,
  SignInLinkText
};
