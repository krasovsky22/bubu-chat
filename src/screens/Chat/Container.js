import PropTypes from "prop-types";
import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const messages = require("./messages.json");

class ChatContainer extends Component {
  static propTypes = {};

  state = {
    messages: messages
  };

  onSend(newMessage) {
    const { messages } = this.state;
    this.setState({ messages: GiftedChat.append(messages, newMessage) });
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1
        }}
      />
    );
  }
}

export default ChatContainer;
