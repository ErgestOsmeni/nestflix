import React from "react";
import { createStackNavigator } from "react-navigation";
import ProfileScreen from "components/screens/profile-screen";

const ProfileStackNavigator = createStackNavigator(
  {
    Main: { screen: ProfileScreen },
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
  }
);

export default ProfileStackNavigator;
