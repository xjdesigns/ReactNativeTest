import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Profile', {name: 'Jane'});
  };

  return (
    <View style={styles.navBar}>
      <Pressable style={styles.navAction} onPress={handleOnPress}>
        <View style={styles.navIcon} />
        <Text style={styles.navText}>Home</Text>
      </Pressable>
      <Pressable style={styles.navAction}>
        <View style={styles.navIcon} />
        <Text style={styles.navText}>Activites</Text>
      </Pressable>
      <Pressable style={styles.navAction}>
        <View style={styles.navKeyless} />
      </Pressable>
      <Pressable style={styles.navAction}>
        <View style={styles.navIcon} />
        <Text style={styles.navText}>Messaging</Text>
      </Pressable>
      <Pressable style={styles.navAction}>
        <View style={styles.navIcon} />
        <Text style={styles.navText}>More</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  navIcon: {
    width: 30,
    height: 30,
    backgroundColor: 'black',
    borderRadius: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 4,
  },
  navAction: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
  },
  navText: {
    textAlign: 'center',
    fontSize: 10,
  },
  navKeyless: {
    width: 44,
    height: 44,
    backgroundColor: 'black',
    borderRadius: 44,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Menu;
