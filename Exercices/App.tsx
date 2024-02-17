import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import React, { useEffect } from 'react';
import Counter from './Screens/Counter';
import Login from './Screens/Login';

import { useAppDispatch } from './redux/hooks';
import { Todo } from './Screens/Todo';

import { api2 } from './redux/reducer/yetAnotherSlice';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  /*
    const dispatch = useAppDispatch();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
  
    useEffect(() => {
      dispatch(setUser(user));
    }, []);
  */
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Counter" component={Counter} />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
}

export default App;
