import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import MyStack from "./navigation";
// import Home from "./screens/Home";
// import Quiz from "./screens/Quiz";
// import Results from "./screens/Results";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />

      {/* <Home /> */}
      {/* <Quiz /> */}
      {/* <Results /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
