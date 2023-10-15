import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Container, ImageAsh, ImagemGo } from "./style";

function LandingScreen() {
  return (
    
    <LinearGradient colors={["#5203a0", "#ff00a2ab"]} style={styles.container}>
    <Container>
      <ImagemGo source={require("../../img/go.png")} />
      <ImageAsh source={require("../../img/Ash.png")} />
    
    </Container>
     </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContents: "center",
  },
});

export default LandingScreen;
