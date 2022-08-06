import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        color:"black",
        backgroundColor:"#FFDFD3",
        alignItems: "center",
        justifyContent: "center",
    }
});



export default HomeScreen;
