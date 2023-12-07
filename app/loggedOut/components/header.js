import { StyleSheet, View, Image } from "react-native";
import React from "react";
import BackIcon from "./backIcon";
import { usePathname } from 'expo-router'

const Header = () => {

  const path = usePathname();

  return (
    <>
      <View style={styles.container}>
        {path === "/loggedOut/signUp" ? <BackIcon /> : <View style={{width: 24}}></View>}
        <Image
          style={styles.image}
          source={require("../../../assets/eventSpot.png")}
        />
        <View style={{width: 24}}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5271FF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    shadowOffset: {
        width: 0,
        height: 1,
      },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});

export default Header;
