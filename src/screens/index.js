import SideBar from "@components/SideBar/SideBar.js";
import React from "react";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import ChatScreen from "./Chat";
import ProfileScreen from "./Profile";

const AppNavigator = createDrawerNavigator(
  {
    ChatScreen,
    ProfileScreen
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default createAppContainer(AppNavigator);
