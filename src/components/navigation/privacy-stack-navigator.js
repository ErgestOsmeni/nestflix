import React from "react";
import { createStackNavigator } from "react-navigation";
import PrivacyCookiesScreen from "components/screens/privacy-cookies-screen";

const PrivacyStackNavigator = createStackNavigator(
  {
    Main: { screen: PrivacyCookiesScreen },
  },
  {
    initialRouteName: "Main",
    headerMode: "none"
  }
);

export default PrivacyStackNavigator;
