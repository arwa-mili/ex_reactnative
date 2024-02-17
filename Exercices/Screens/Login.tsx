import React, { useContext, useEffect, useState } from 'react';
import { TextInput, Button, View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import { setCredentials } from '../redux/reducer/authSlice';
import { useDispatch } from 'react-redux';
import { LoginRequest, useLoginMutation } from '../services/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const [login, { data, isLoading, isSuccess, isError }] = useLoginMutation()
    const dispatch = useDispatch()

    const handleSubmit = async () => {
        try {
            const loginData: LoginRequest = { email, password };

            await login(loginData);
            if (data) {
                //console.log(data)
                dispatch(setCredentials(data));
                //localStorage.setItem("User", data.token)
            }
            if (isError) {

                console.log("fff52")
            }
            if (isSuccess) {
                navigation.navigate('Counter')

            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button
                title={'Login'}
                onPress={handleSubmit}
                disabled={isLoading}


            />



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
});

export default Login;
