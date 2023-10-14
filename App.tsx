import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/components/Routes/AppRoutes";
import DashScreen from "./src/screens/DashScreen/DashScreen";


function App() {
  return (
    <DashScreen />
    // <NavigationContainer>
    //   <AppRoutes />
    //   <StatusBar style="auto" />
    // </NavigationContainer>
   );
}
export default App;
