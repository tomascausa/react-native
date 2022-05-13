import { StyleSheet, Text } from "react-native";
import React from "react";

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
    title: {
        width: 300,
        maxWidth: "80%",
        padding: 12,
        fontFamily: "open-sans-bold",
        fontSize: 24,
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        color: "white",
    },
});

export default Title;