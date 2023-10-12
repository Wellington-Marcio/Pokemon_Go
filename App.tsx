import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/components/Routes/AppRoutes";


function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppRoutes />
    </NavigationContainer>
  );
}
export default App;