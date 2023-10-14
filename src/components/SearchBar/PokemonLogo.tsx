import React from "react";
import { Image, StyleSheet } from "react-native";

const PokemonLogo = () => {
  return <Image source={require("../../img/logo.png")} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 252,
    height: 88,
    resizeMode: "contain",
  },
});

export default PokemonLogo;
