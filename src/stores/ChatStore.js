import { types } from "mobx-state-tree";

export const ChatStore = types
  .model("ChatStore", {
    identifier: types.optional(types.identifier, "ChatStore"),
    user: types.optional(types.string, "New User")
  })
  .actions(self => ({}));
