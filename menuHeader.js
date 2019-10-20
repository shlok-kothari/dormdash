//image
//name of restaurant
//restaurant info

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';

class MenuHeader extends Component {
    render() {
        return (
            <View style={styles}>
                <View style={{ height: 200 }}><Image source={require("./ios/img/0.jpeg")} style={styles.image} ></Image></View>

                <Text style={styles.text} > {this.props.name}</Text>
                <Text style={{ fontWeight: '500', fontSize: 15, marginTop: 10, paddingHorizontal: 15, paddingBottom: 20 }}>Open Monday to Friday from 10am to 6pm</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontWeight: "600",
        fontSize: 30,
        marginTop: 10,
        paddingHorizontal: 10,
    },
    image: {
        width: null,
        flex: 1
    },

});

export default MenuHeader;