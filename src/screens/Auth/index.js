import { createStackNavigator } from "react-navigation";
import LoginScreen from "./Login";
import LoadingScreen from "./Loading";
import DashboardScreen from "./Dashboard";

export default createStackNavigator(
    {
        LoginScreen: LoginScreen,
        LoadingScreen: LoadingScreen,
        DashboardScreen: DashboardScreen,
    },
    {
        initialRouteName: "LoadingScreen"
    }
);