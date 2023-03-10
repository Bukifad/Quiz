import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Title from "../components/Title";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title />

      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={{
            uri: "https://cdni.iconscout.com/illustration/premium/preview/tv-show-5330043-4459341.png?w=0&h=700",
          }}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz")}
        style={styles.button}
      >
        <Text style={styles.buttontext}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  banner: {
    width: 300,
    height: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "95%",
  },
  button: {
    width: "100%",
    backgroundColor: "#184E77",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttontext: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
