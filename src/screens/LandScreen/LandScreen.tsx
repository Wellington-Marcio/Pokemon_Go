import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { Container, ImageAsh, ImagemGo } from "./style";

const LandScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#6106ab", "#FF00D6"]} style={styles.container}>
      <Container onPress={() => navigation.navigate("DashScreen")}>
        <ImagemGo source={require("../../img/go.png")} />
     
        <ImageAsh source={require("../../img/Ash.png")} />
      </Container>
    </LinearGradient>
  );
};

export default LandScreen;
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
  },
});