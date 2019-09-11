import { getSnapshot, types } from "mobx-state-tree";
import { AsyncStorage } from "react-native";

import { ChatStore } from "./ChatStore";
import { AuthStore } from "./AuthStore";

import { connect as firebaseConnect } from "@services/firebase"

export const RootStore = types
  .model("RootStore", {
    identifier: types.optional(types.identifier, "RootStore"),
    chatStore: types.optional(ChatStore, () => ChatStore.create({})),
    authStore: types.optional(AuthStore, () => AuthStore.create({}))
  })
  .actions(self => ({
    afterCreate: () => {
      console.log('root store after create');
      firebaseConnect();

    }
    // async save() {
    //   try {
    //     const transformedSnapshot = getSnapshot(self);
    //     const json = JSON.stringify(transformedSnapshot);
    //     await AsyncStorage.setItem("appStatePersistenceKey", json);
    //   } catch (err) {
    //     console.warn("unexpected error " + err);
    //   }
    // }
  }));
