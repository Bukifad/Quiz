import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import quiz from "../screens/Quiz";
import results from "../screens/Results";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz"
        component={quiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Results"
        component={results}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default MyStack;
