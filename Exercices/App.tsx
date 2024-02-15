/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import React from 'react';
import Counter from './Screens/Counter';
import Login from './Screens/Login';

//const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    /*<Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Ex1">
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>*/
    <NavigationContainer>
      <Provider store={store}>
        <Login />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
