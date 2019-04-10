import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as mainActions } from '~/store/ducks/main';
import { ActivityIndicator } from 'react-native';

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

class Main extends Component {
  componentDidMount() {
    const { loadUserRequest } = this.props;

    loadUserRequest();
    console.tron.log('Blabla ' + isLogged);
  }

  render() {
    const { dataMain } = this.props;

    return (
      <Container>
        {dataMain.loading ? (
          <ActivityIndicator size="small" color="#999" />
        ) : (
          <Text>{dataMain.data.token}</Text>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  dataMain: state.main,
  init: state.init
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(mainActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
