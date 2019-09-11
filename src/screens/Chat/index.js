import { inject, observer } from "mobx-react";
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Title
} from "native-base";
import PropTypes from "prop-types";
import React, { Component } from "react";
import ChatContainer from "./Container";

class ChatScreen extends Component {
  static propTypes = {};

  clickButton = () => {
    const { navigation } = this.props;

    navigation.toggleDrawer();
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.clickButton}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Hello User</Title>
          </Body>
          <Right />
        </Header>
        <Container>
          <ChatContainer />
        </Container>
      </Container>
    );
  }
}

export default ChatScreen;
