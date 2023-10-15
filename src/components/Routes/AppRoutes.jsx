import React from "react";
import LandingScreen from "../../screens/LandingScreen/LandingScreen";
import DashScreen from "../../screens/DashScreen/DashScreen";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";
import {createStackNavigator} from "@react-navigation/stack"



const Stack = createStackNavigator();

function AppRoutes() {
  return (
    
    <Stack.Navigator initialRouteName="landingScreen">
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{ title: "Go" }}
      />
      <Stack.Group
        name="DashScreen"
        component={DashScreen}
        options={{ title: "" }}
      />
      <Stack.Group
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>

  );
};

export default AppRoutes;
