import React, { useState } from 'react';
import { useLoginUserMutation } from '../redux/reducer/authApi';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginUser, { isLoading, error }] = useLoginUserMutation();

    const handleSubmit = async () => {
        try {
            
            const { data } = await loginUser({ username, password });
            
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };

    return (


        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
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

