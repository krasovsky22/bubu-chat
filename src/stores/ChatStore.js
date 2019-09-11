import { types } from "mobx-state-tree";
import Message from "@models/Message";
import User from "../models/User";

const messages = require("./data/messages.json");

export const ChatStore = types
  .model("ChatStore", {
    identifier: types.optional(types.identifier, "ChatStore"),
    users: types.array(User),
    messages: types.array(Message)
  })
  .actions(self => ({
    afterCreate: () => {
      self.users = messages.map(message => message.user);

      self.messages = messages.map(message => {
        const newMessage = {
          ...message,
          user: message.user._id,
          createdAt: new Date(message.createdAt)
        };
        return newMessage;
      });
    },

    sendMessage: (messages = []) => {
      messages.forEach(message => {
        const newMessage = { ...message, user: message.user._id };
        self.messages.unshift(newMessage);
      });
    }
  }));
