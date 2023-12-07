import { Slot } from "expo-router";
import Header from "./components/header";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

const LoggedInLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#5271FF" />
      <Header />
      <PaperProvider>
        <Slot />
      </PaperProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5271FF",
    alignItems: "stretch",
  },
});

export default LoggedInLayout;
