



import React, { useContext, useEffect, useState } from 'react';
import { TextInput, Button, View, Text, StyleSheet, Alert } from 'react-native';

import { setCredentials } from '../redux/reducer/authSlice';

import { useDispatch } from 'react-redux';
import { LoginRequest, useLoginMutation } from '../services/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    


    const [login, { data, isLoading, isSuccess, isError }] = useLoginMutation()
    const dispatch = useDispatch()
    console.log(data?.token)




    const handleSubmit = async () => {
        try {

             await login({email,password});
            if (data) {
                dispatch(setCredentials(data));
            }
        } catch (err) {
            console.log(err)
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
/*
import React, { useEffect, useState } from 'react';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Counter from './Counter';
import { useLoginMutation } from '../services/auth.service';
import { useAppDispatch } from '../redux/hooks';
import { setAuthenticatedUser } from '../redux/reducer/authSlice';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const [login, { data, error, isLoading }] = useLoginMutation()
    const dispatch = useAppDispatch()


    useEffect(() => {

        if (data && !error) {
            console.log('LoginPage:: data:', data)
            //NotificationManager.success(`Welcome ${data.name}`, 'Authentication Success')
            //localStorage.setItem('user', JSON.stringify(data))
            dispatch(setAuthenticatedUser(data))
            //navigate('home')
        } else if (error) {
            //NotificationManager.error('Error authenticating user, please check your email and password', 'Authentication Error')
            console.log(`LoginPage:: Authentication error`, error)
        }
    }, [data, error, dispatch, navigate])


    const handleSubmit = async () => {
        try {
            login({ email, password });





        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };

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
                title={isLoading ? 'Logging in...' : 'Login'}
                onPress={handleSubmit}
                disabled={isLoading}
            />
            {error && <Text style={styles.error}>Error: {error.message}</Text>}
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

*/