import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashScreen from "../../screens/DashScreen/DashScreen";
import Pokemons from "../../screens/Pokemons/Pokemons";
import Profile from "../../screens/Profile/Profile";


const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="DashScreen">
      <Stack.Screen
        name="DashScreen"
        component={DashScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Pokemons"
        component={Pokemons}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Profiles"
        component={Profile}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
