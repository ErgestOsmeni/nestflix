import React from "react";
import { createStackNavigator } from "react-navigation";
import ProfileScreen from "components/screens/profile-screen";
import TestScreen from "components/screens/test-screen";

const ProfileStackNavigator = createStackNavigator(
  {
    Main: { screen: ProfileScreen },
    TestScreen: { screen: TestScreen}
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
  }
);

export default ProfileStackNavigator;
