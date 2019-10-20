import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

class Restaurant extends Component {

    state = {
        visible: true,
    }



    render() {
        return (
            <TouchableHighlight>
                <View style={styles.rectangle}>
                    <Text style={styles.text}>{this.props.name}</Text>
                </View >
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    rectangle: {
        height: 195,
        backgroundColor: 'darkgray',
        borderRadius: 10,
        marginLeft: 18,
        marginRight: 15,
        marginBottom: 15,
        textAlign: "right",
        //justifyContent:""
    },
    text: {
        fontSize: 20,
        color: "white",
        position: "absolute",
        bottom: 10,
        left: 0,
        marginBottom: 10,
        marginRight: 20,
        alignSelf: "flex-end",
        marginHorizontal: 20


        // alignSelf: 'stretch'
    }
});
export default Restaurant;