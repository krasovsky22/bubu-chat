import { types } from "mobx-state-tree";
import User from "./User";

export default types.model("Message", {
  _id: types.identifier,
  text: types.string,
  createdAt: types.Date,
  user: types.safeReference(User)
});
