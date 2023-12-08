import { StyleSheet, View, Image } from "react-native";
import React from "react";
import UserIcon from "./userIcon";
import BackIcon from "./backIcon";
import SearchIcon from "./searchIcon";
import EditIcon from "./editIcon";
import { usePathname } from 'expo-router'

const Header = () => {

  const path = usePathname();

  let back = path === "/loggedIn/search" ||
             path === "/loggedIn/profile" ||
             path === "/loggedIn/edit" ||
             path === "/loggedIn/createEvent" ? true : false

  return (
    <>
      <View style={styles.container}>
        {back ? <BackIcon /> : <SearchIcon />}
        <Image
          style={styles.image}
          source={require("../../../assets/eventSpot.png")}
        />
        {path === "/loggedIn/home" && <UserIcon />}
        {path === "/loggedIn/profile" && <EditIcon />}
        {path !== "/loggedIn/profile" && path !== "/loggedIn/home" && <View style={{width: 24}}></View>}
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
