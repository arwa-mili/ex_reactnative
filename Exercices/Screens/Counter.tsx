import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { incrementCounter, resetCounter, selectCounter } from "../redux/reducer/counterSlice";

const Counter = () => {
    const counter = useSelector(selectCounter);
    const dispatch = useDispatch();

    const onPressIncrement = () => {
        dispatch(incrementCounter());
    };

    const onPressReset = () => {
        dispatch(resetCounter());
    };

    return (
        <View style={styles.mainLayout}>
            <Text style={styles.title}>CounterExercise</Text>
            <Text style={styles.counter}>Counter: {counter}</Text>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.button} onPress={onPressIncrement}>
                    <Text>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onPressReset}>
                    <Text>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    mainLayout: {
        flexDirection: "column",
        backgroundColor: "#ffff",
        position: "relative",
        flex: 1,
        justifyContent: 'center',

    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        margin: 50,
    },
    counter: {
        fontSize: 15,
        padding: 50,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        margin: 50,

        padding: 10,
    },
});









/*
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";


const Ex1 = () => {

    const [counter, setCounter] = useState(0);



    const onPressIn = () => {
        setCounter(counter => counter + 1);

    }


    const onPress = () => {
        setCounter(0);

    }
    return (
        <View style={styles.mainLayout}>

            <Text style={styles.title}>
                CounterExercie
            </Text>


            <Text style={styles.counter}>
                counter :  {counter}
            </Text>
            <View style={[{ flexDirection: 'row' }]}>
                <TouchableOpacity style={styles.button} onPressIn={onPressIn} >
                    <Text>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onPress} >
                    <Text>Reset</Text>
                </TouchableOpacity>

            </View>
        </View >



    );




};

const styles = StyleSheet.create({


    mainLayout: {
        flexDirection: 'column',
        backgroundColor: "#ffff",
        position: "relative",
    },

    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        margin: 50,
    },

    counter: {
        fontSize: 15,
        padding: 15
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        margin: 50,
        padding: 10
    },
});



export default Ex1;
*/