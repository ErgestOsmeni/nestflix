import React from "react";
import { createStackNavigator } from "react-navigation";
import SettingsScreen from "components/screens/settings-screen";
import TestScreen2 from "components/screens/test-screen2";

const SettingsStackNavigator = createStackNavigator(
  {
    Main: { screen: SettingsScreen },
    TestScreen2: { screen: TestScreen2 }
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
  }
);

export default SettingsStackNavigator;
