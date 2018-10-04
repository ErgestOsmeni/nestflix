import React, { Component } from "react";
import styled from "styled-components/native";
import Header from "components/common/header";
import { COLORS } from "constants/styles";
import {
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity
} from "react-native";
import ShowData from "data/data";
import Icon from "react-native-vector-icons/FontAwesome";

const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.GREY.BLACK_RUSSIAN};
`;

const HelloContainer = styled.View`
  background-color: ${COLORS.GREY.BRIGHT_GREY};
  padding-top: 10;
  padding-right: 10;
  padding-left: 10;
  padding-bottom: 10;
`;

const HelloText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
`;

class PrivacyCookiesScreen extends Component {
  render() {
    return (
      <Container>
        <Header
          toggleDrawer={() => this.props.navigation.toggleDrawer()}
          home={() => this.props.navigation.navigate("Home")}
        />
        <HelloContainer>
          <HelloText>Privacy Screen </HelloText>
        </HelloContainer>
      </Container>
    );
  }
}

export default PrivacyCookiesScreen;
