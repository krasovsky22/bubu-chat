import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";

class _ChatContainer extends Component {
  static propTypes = {
    messages: PropTypes.array,
    sendMessage: PropTypes.func.isRequired
  };

  static defaultProps = {
    messages: []
  };

  onSend = newMessage => {
    const { sendMessage } = this.props;
    sendMessage(newMessage);
  };

  render() {
    const { messages } = this.props;

    return (
      <GiftedChat
        messages={messages.toJS()}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1
        }}
      />
    );
  }
}

export default inject(
  ({
    rootStore: {
      chatStore: { messages, sendMessage }
    }
  }) => ({
    messages,
    sendMessage
  })
)(observer(_ChatContainer));
