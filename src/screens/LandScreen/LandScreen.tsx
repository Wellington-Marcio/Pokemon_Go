import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {  Image, TouchableOpacity, StyleSheet } from "react-native";

const LandScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#6106ab", "#FF00D6"]} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("DashScreen")}>
        <Image source={require("../../img/go.png")} style={styles.goImage} />
     
        <Image source={require("../../img/Ash.png")} style={styles.asheImage} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
  },
  goImage: {
    width: 200,
    height: 200,
    marginBottom: 120,
  },
  asheImage: {
    width: 400,
    height: 400,
    marginBottom: 30,
  },
});

export default LandScreen;
