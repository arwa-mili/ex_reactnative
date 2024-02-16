


/*

import React, { useContext, useEffect, useState } from 'react';
import { TextInput, Button, View, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Counter from './Counter';
import { useLoginUserMutation } from '../services/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setAuthenticatedUser } from '../redux/reducer/authSlice';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [isLoggingIn, onLogin] = useContext(AuthContext);
    const navigate = useNavigation();
    const [showRegister, setShowRegister] = useState(false);




    const handleSubmit = async () => {
        if (email && password) {
            await loginUser({ email, password });






        } else {
            console.error("Please fill all input fields");

        };
    }
    useEffect(() => {
        if (isLoginSuccess) {
            console.log("user login successfully");
            //navigate 
        }
    }, [isLoginSuccess]);


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="PhoneNumber"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />


            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="confirmMassword"
                value={confirmpassword}
                onChangeText={setConfirmpassword}
            />
            <Button
                title={isLoading ? 'Logging in...' : 'Login'}
                onPress={handleSubmit}
                disabled={isLoading}
            />
            {!showRegister ? "Login" : "Register"}
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