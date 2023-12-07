import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <View style={styles.card}>
        <Text style={styles.spacing}>Event Title</Text>
        <View />
        <Image
          style={styles.image}
          source={require("../../assets/eventSpot.png")}
        />
        <Text style={styles.spacing}>Date: 1/23/24 @ 5:00pm</Text>
        <Text style={styles.spacing}>Location: Code Fellows Campus, Seattle WA</Text>
        <Text style={styles.spacing}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: '5%',
    alignItems: 'center',
  },
  card: {
    padding: '10%',
    alignItems: 'left',
    backgroundColor: '#add8e6',
    width: '80%',
    borderRadius: '20%',
  },
  title: {
    color: '#ffb6c1',
    fontSize: 20,
    fontFamily: 'Kailasa-Bold',
    textDecorationLine: 'underline',
    textDecorationColor: '#ffb6c1',
    textDecorationStyle: 'double',
    marginVertical: 10,
    textAlign: 'center',
  },
  spacing: {
    marginBottom: 10,
  },
  image: {
    width: 160,
    height: 60,
    resizeMode: "cover",
    marginBottom: 10,
  },
});

export default Home