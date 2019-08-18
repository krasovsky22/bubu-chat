import { getSnapshot, types } from "mobx-state-tree";
import { AsyncStorage } from "react-native";

import { ChatStore } from "./ChatStore";

export const RootStore = types
  .model("RootStore", {
    identifier: types.optional(types.identifier, "RootStore"),
    chatStore: types.optional(ChatStore, () => ChatStore.create({}))
  })
  .actions(self => ({
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
