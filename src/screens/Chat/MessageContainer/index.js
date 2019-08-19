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
  Grid
} from "native-base";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";

const messages = require("./messages.json");

class MessageContainer extends Component {
  static propTypes = {};

  render() {
    return (
      <Grid>
        {messages.map(message => (
          <Row key={message.key} style={{ height: 100 }}>
            <Text>{message.text}</Text>
          </Row>
        ))}
      </Grid>
    );
  }
}

export default MessageContainer;
