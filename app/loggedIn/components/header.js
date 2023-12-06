import { StyleSheet, View, Image } from "react-native";
import React from "react";
import UserIcon from "./userIcon";
import BackIcon from "./backIcon";
import SearchIcon from "./searchIcon";

const Header = () => {

  return (
    <>
      <View style={styles.container}>
        <SearchIcon />
        <Image
          style={styles.image}
          source={require("../../../assets/eventSpot.png")}
        />
        <UserIcon />
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
