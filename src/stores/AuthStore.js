import { types } from "mobx-state-tree";
import User from "@models/User";

export const AuthStore = types
  .model("AuthStore", {
    identifier: types.optional(types.identifier, "AuthStore"),
    user: types.maybeNull(User),
    isLoggedIn: false
  })
  .actions(self => ({
  }));
