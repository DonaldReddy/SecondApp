import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.heading}>Fancy Card</Text>
      <View style={styles.card}>
        <Text style={styles.name}>Name</Text>
        <Image
          style={styles.image}
          source={{uri: 'https://picsum.photos/200/300'}}
        />
        <Text style={styles.about}>About</Text>
        <Text style={styles.author}>@author</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  card: {
    backgroundColor: 'black',
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    height: 350,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: 350,
    aspectRatio: 16 / 9,
    borderRadius: 10,
  },
  about: {fontSize: 20},
  author: {fontSize: 10},
});
