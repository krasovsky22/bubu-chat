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
  Row,
  Grid,
  View
} from "native-base";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import MessageContainer from "./MessageContainer";
import { SafeAreaView } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";

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
        <Content>
          <Grid>
            <ScrollView style={{ flex: 8 }}>
              <MessageContainer />
            </ScrollView>
            <Row
              style={{
                backgroundColor: "yellow",
                flex: 0.1
              }}
            >
              <Text>Chat HEre</Text>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default inject(({ rootStore: { chatStore } }) => ({
  chatStore
}))(observer(_ChatScreen));
