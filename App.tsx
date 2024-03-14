/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Main';
import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Test = () => {
  return (
    <View>
      <Text>Yes</Text>
    </View>
  );
};

export default App;
