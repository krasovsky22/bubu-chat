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

class _ChatScreen extends Component {
  static propTypes = {
    chatStore: PropTypes.shape({
      user: PropTypes.string.isRequired
    })
  };

  clickButton = () => {
    const { navigation } = this.props;

    navigation.toggleDrawer();
  };
  render() {
    const { chatStore } = this.props;
    const { user } = chatStore;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.clickButton}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Hello {user}</Title>
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

export default inject(({ rootStore: { chatStore } }) => ({
  chatStore
}))(observer(_ChatScreen));
