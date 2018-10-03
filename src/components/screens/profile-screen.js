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
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.GREY.BLACK_RUSSIAN};
`;

const BackIconContainer = styled.View`
  margin-top: 10;
  margin-left: 10;
`;

const HelloContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.BRIGHT_GREY};
  align-items: center;
  justify-content: center;
`;

const HelloText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
`;

class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
          <BackIconContainer>
            <Icon name={"arrow-left"} size={30} color={COLORS.WHITE.WHITE} />
          </BackIconContainer>
        </TouchableOpacity>
        <HelloContainer>
          <HelloText>Profile Screen</HelloText>
        </HelloContainer>
      </Container>
    );
  }
}

export default ProfileScreen;
