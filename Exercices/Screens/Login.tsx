import React, { useState } from 'react';
import { RootState } from '../redux/store';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/reducer/authSlice';


import Counter from './Counter';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const dispatch = useDispatch();
    //const navigate = useNavigate();
    const token = useSelector((state: RootState) => state.auth.token);

    const handleLogin = async () => {

        loginUser(username, password);
        // dispatch(loginUser({ username: username, password: password }));
        //navigate('Counter');

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
});

export default Login;

