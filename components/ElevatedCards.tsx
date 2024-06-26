import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.lrgText}>ELEVATED</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.lrgText}>ELEVATED</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.lrgText}>ELEVATED</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.lrgText}>ELEVATED</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.lrgText}>ELEVATED</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    backgroundColor: 'red',
    textAlign: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 2,
    borderRadius: 10,
  },
  lrgText: {
    fontSize: 20,
    color: 'yellow',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginTop: 10,
  },
});
