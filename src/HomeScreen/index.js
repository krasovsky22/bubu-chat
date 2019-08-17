import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import ProfileScreen from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import HomeScreen from "./HomeScreen.js";

const AppNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    ProfileScreen: { screen: ProfileScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default createAppContainer(AppNavigator);
