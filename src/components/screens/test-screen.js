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

const HelloContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.BRIGHT_GREY};
  align-items: center;
  justify-content: center;
`;

const HelloText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
`;

class TestScreen extends Component {
  render() {
    return (
      <Container>
        <HelloContainer>
          <HelloText>Test Screen</HelloText>
        </HelloContainer>
      </Container>
    );
  }
}

export default TestScreen;
