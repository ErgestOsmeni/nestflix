import React from "react";
import { StatusBar } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import HomeStackNavigator from "components/navigation/home-stack-navigator";
import SettingsStackNavigator from "components/navigation/settings-stack-navigator";
import ProfileStackNavigator from "components/navigation/profile-stack-navigator";
import PrivacyStackNavigator from "components/navigation/privacy-stack-navigator";
import AccountStackNavigator from "components/navigation/account-stack-navigator";
import { COLORS } from "constants/styles";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

const DrawerContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.BLACK_RUSSIAN};
`;

const AppContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.BLACK_RUSSIAN};
`;

const DrawerItemsContainer = styled.View`
  flex: 1;
  margin-top: 5;
  padding-top: 10;
  padding-right: 10;
  padding-left: 10;
  padding-bottom: 5;
`;

const CustomDrawerItem = styled.Text`
  color: ${COLORS.GREY.BRIGHT_GREY};
  font-size: 20;
`;

const drawerRouteConfig = {
  Home: {
    screen: HomeStackNavigator
  },
  Settings: {
    screen: SettingsStackNavigator
  },
  Profile: {
    screen: ProfileStackNavigator
  },
  Account: {
    screen: AccountStackNavigator
  },
  Privacy: {
    screen: PrivacyStackNavigator
  }
};

const CustomDrawerContentComponent = props => (
  <DrawerContainer>
    <DrawerItems
      {...props}
      getLabel={scene => (
        <DrawerItemsContainer >
          <CustomDrawerItem>{props.getLabel(scene)}</CustomDrawerItem>
        </DrawerItemsContainer>
      )}
    />
  </DrawerContainer>
);

const drawerNavigatorConfig = {
  contentComponent: props => <CustomDrawerContentComponent {...props} />
};

const AppDrawer = createDrawerNavigator(
  drawerRouteConfig,
  drawerNavigatorConfig
);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <StatusBar hidden={true} />
        <AppDrawer />
      </AppContainer>
    );
  }
}
