import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default Results = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Results</Text>
      </View>

      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={{
            uri: "https://cdni.iconscout.com/illustration/premium/preview/tv-show-5330043-4459341.png?w=0&h=700",
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: 300,
    height: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "95%",
  },
});
