import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

const EditIcon = () => {
  return (
    <Link href={"/loggedIn/edit"} asChild>
      <TouchableOpacity>
        <AntDesign name="edit" size={24} color="black" />
      </TouchableOpacity>
    </Link>
  );
};

export default EditIcon;