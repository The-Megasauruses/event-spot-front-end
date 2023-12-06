import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import React from "react";

const UserIcon = () => {
  return (
    <TouchableOpacity>
      <AntDesign name="user" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default UserIcon;
