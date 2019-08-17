import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import AppNavigation from "./src/HomeScreen/index.js";

class AwesomeApp extends Component {
  state = {
    isReady: false
  };

  async componentDidMount() {
    await this._loadResourcesAsync();

    this.setState({ isReady: true });
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("@assets/images/robot-dev.png"),
        require("@assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        Roboto: require("@assets/fonts/Roboto.ttf"),
        Roboto_medium: require("@assets/fonts/Roboto_medium.ttf"),
        ...Ionicons.font
      })
    ]);
  };

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <AppNavigation />;
  }
}

export default AwesomeApp;
