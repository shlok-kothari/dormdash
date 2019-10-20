import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Cuisine extends Component {

    render() {
        return (
            <View style={styles.square}>
                <Text style={styles.text}>{this.props.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    square: {
        width: 175,
        height: 175,
        backgroundColor: '#8bd6d6',
        borderRadius: 10,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: 'white',
        fontWeight: "600",
        fontSize: 20

    }
});

export default Cuisine;