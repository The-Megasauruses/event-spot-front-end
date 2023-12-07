import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import React from "react";

const BackIcon = () => {
  return (
      <TouchableOpacity onPress={() => router.back()}>
        <AntDesign name="back" size={24} color="black" />
      </TouchableOpacity>
  );
};

export default BackIcon;