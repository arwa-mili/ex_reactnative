import React from 'react';
import {
    Text,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native';
import { useGetUsersQuery } from '../redux/reducer/yetAnotherSlice';


export const Todo = () => {
    const { data, isLoading } = useGetUsersQuery({});

    if (isLoading) {
        return <ActivityIndicator />;
    }

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text>id: {item.id}</Text>
                        <Text>name: {item.name}</Text>
                        <Text>phone: {item.phone}</Text>
                        <Text>email: {item.email}</Text>
                    </View>)}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 5,
        paddingHorizontal: 18,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        gap: 2
    },

});