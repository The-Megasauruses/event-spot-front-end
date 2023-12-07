import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

const SearchIcon = () => {
  return (
    <Link href={"/loggedIn/search"} asChild>
      <TouchableOpacity>
        <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>
    </Link>
  );
};

export default SearchIcon;
