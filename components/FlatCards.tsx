import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.smlTxt}>BOX</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.smlTxt}>BOX</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.smlTxt}>BOX</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    backgroundColor: 'red',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smlTxt: {
    fontSize: 30,
  },
});
