import { Slot } from 'expo-router';
import Header from './components/header';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar'; 

const LoggedInLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#5271FF" />
      <Header />
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor:"#5271FF",

    }
})

export default LoggedInLayout
