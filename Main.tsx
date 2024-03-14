/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Dashboard from './Dashboard';
import ActiveCards from './ActiveCards';
import Menu from './Components/Menu';

function Main(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={styles.header}>
          <View style={styles.headerName}>
            <Text style={styles.name}>Hello, Jason</Text>
          </View>
        </View>
        <ActiveCards />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View>
            <Dashboard />
          </View>
        </ScrollView>
      </SafeAreaView>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerName: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
  },
});

export default Main;
