import SideBar from "@components/SideBar/SideBar.js";
import React from "react";
import { createAppContainer, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from "react-navigation";
import ChatScreen from "./Chat";
import ProfileScreen from "./Profile";
import AuthScreen from "./Auth";

const drawerNavigator = createDrawerNavigator(
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

export default createAppContainer(
  createSwitchNavigator({
    App: drawerNavigator,
    Auth: AuthScreen
  },
    {
      initialRouteName: 'Auth'
    }
  )
);
