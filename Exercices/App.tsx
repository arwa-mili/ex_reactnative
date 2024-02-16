import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import React, { useEffect } from 'react';
import Counter from './Screens/Counter';
import Login from './Screens/Login';
import { useAppDispatch } from './redux/hooks';
import { setUser } from './redux/reducer/authSlice';

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

        <Login />

      </NavigationContainer>
    </Provider>
  );
}

export default App;
