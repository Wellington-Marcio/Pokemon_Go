import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandScreen from "../../screens/LandScreen/LandScreen";
import DashScreen from "../../screens/DashScreen/DashScreen";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";

const Stack = createStackNavigator();

const AppRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Go"
        component={LandScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="DashScreen"
        component={DashScreen}
        options={{ title: "Pokémon List" }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "Details" }}
      />
    </Stack.Navigator>
  );
};

export default AppRoute;
