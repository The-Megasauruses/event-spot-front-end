import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import React from "react";

const BackIcon = () => {
  return (
    <TouchableOpacity>
      <AntDesign name="back" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BackIcon;
