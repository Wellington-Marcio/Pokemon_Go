import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";

function LandingScreen ({navigation}) {

  
  return (
    <LinearGradient colors={["#5203a0", "#ff00a2ab"]} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Pokemons')}>
        <Image source={require("../../img/go.png")} style={styles.Image1} />
        <Image source={require("../../img/ashe.png")} style={styles.Image2} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
  },
  Image1: {
    width: 300,
    height: 300,
    marginBottom: 100,
  },
  Image2: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
});

export default LandingScreen;
