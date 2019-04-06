import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 30px;
`;

const Logo = styled.Image`
  height: 30%;
  margin-bottom: 40px;
`;

const Input = styled.TextInput`
  padding-horizontal: 20px;
  padding-vertical: 15px;
  border-radius: 5px;
  background-color: #fff;
  align-self: stretch;
  margin-bottom: 15px;
  margin-horizontal: 20px;
  font-size: 16px;
`;

const ErrorMessage = styled.Text`
  text-align: center;
  color: #ce2029;
  font-size: 16px;
  margin-bottom: 15px;
  margin-horizontal: 20px;
`;

const Button = styled.TouchableOpacity`
  padding: 20px;
  border-radius: 5px;
  background-color: #008000;
  align-self: stretch;
  margin: 10px;
  margin-horizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  margin-top: 20px;
`;

const SignUpLinkText = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText
};
