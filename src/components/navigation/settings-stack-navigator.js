import React from "react";
import { createStackNavigator } from "react-navigation";
import SettingsScreen from "components/screens/settings-screen";

const SettingsStackNavigator = createStackNavigator(
  {
    Main: { screen: SettingsScreen }
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
  }
);

export default SettingsStackNavigator;
