// import React from "react";
// import { StatusBar } from "expo-status-bar";
// import { NavigationContainer } from "@react-navigation/native";
// import AppRoutes from "./src/components/Routes/AppRoutes";
// import DashScreen from "./src/screens/DashScreen/DashScreen";
// import { LinearGradient } from "expo-linear-gradient";
// import { StyleSheet } from "react-native";


// function App() {
//   return (
// <>
//   <DashScreen />
//      {/* <NavigationContainer> */}
//     {/* <AppRoutes /> */}
//      {/* <StatusBar style="auto" />
//     </NavigationContainer>  */}
    
//   </>
//    );
// }
// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//   },
// });



import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "./src/components/Routes/AppRoutes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppRouter />
    </NavigationContainer>
  );
}
