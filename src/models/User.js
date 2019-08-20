import { types } from "mobx-state-tree";
export default types.model("Message", {
  _id: types.identifierNumber,
  name: types.string,
  avatar: types.string
});
