import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

const UserIcon = () => {
  return (
    <Link href={"/loggedIn/profile"} asChild>
      <TouchableOpacity>
        <AntDesign name="user" size={24} color="black" />
      </TouchableOpacity>
    </Link>
  );
};

export default UserIcon;
