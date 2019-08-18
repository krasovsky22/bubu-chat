import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
  Row
} from "native-base";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";

class _ChatScreen extends Component {
  static propTypes = {
    chatStore: PropTypes.shape({
      user: PropTypes.string.isRequired
    })
  };
  render() {
    const { chatStore } = this.props;
    const { user } = chatStore;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Hello {user}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Container>
            <Row size={8} style={{ backgroundColor: "pink" }} />
            <Row size={2} style={{ backgroundColor: "yellow" }}>
              <Text>Chat HEre</Text>
            </Row>
          </Container>
        </Content>
      </Container>
    );
  }
}

export default inject(({ rootStore: { chatStore } }) => ({
  chatStore
}))(observer(_ChatScreen));
