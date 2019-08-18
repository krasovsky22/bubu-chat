import SideBar from "@components/SideBar/SideBar.js";
import React from "react";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import ChatScreen from "./Chat";
import ProfileScreen from "./Profile";

const AppNavigator = createDrawerNavigator(
  {
    Chat: { screen: ChatScreen },
    ProfileScreen
  },
  {
    contentComponent: props => <SideBar {...props} />,
    style: {
      backgroundColor: "red"
    }
  }
);

export default createAppContainer(AppNavigator);
