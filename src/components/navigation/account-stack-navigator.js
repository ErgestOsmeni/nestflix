import React from "react";
import { createStackNavigator } from "react-navigation";
import AccountScreen from "components/screens/account-screen";

const AccountStackNavigator = createStackNavigator(
  {
    Main: { screen: AccountScreen },
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
  }
);

export default AccountStackNavigator;
