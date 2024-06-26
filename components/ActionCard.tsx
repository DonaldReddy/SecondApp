import {Linking, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function open(uri: string) {
    Linking.openURL(uri);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ActionCard</Text>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            open('https://youtube.com/@binarydevs?si=Ve_XQf49L_yryGWa')
          }>
          <Text style={styles.buttonText}>Open</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
  },
  button: {
    backgroundColor: '#5a228b',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: 'white',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 10,
  },
  buttonText: {
    fontSize: 30,
  },
});
