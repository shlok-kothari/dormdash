/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Menu from './menu.js'

const App: () => React$Node = () => {

  state = {
    visible: true,
    restaurants: [
      { name: "Firehouse Subs", key: 1 },
      { name: "Smoothie King", key: 2 },
      { name: "Halal Guys", key: 3 }],
    cuisines: [
      { name: "Mexican", key: 1 },
      { name: "Asian", key: 2 },
      { name: "Sandwiches", key: 3 },
      { name: "American", key: 4 },
      { name: "Pizza", key: 5 },
      { name: "Mediterranean", key: 6 }],
  };

  onClick = () => {
    this.state.visible = false;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <Menu name="Halal Shack"></Menu>

        {/* <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>DormDash
          </Text>
        </View> */}

        {/* <SearchBar
          placeholder="Search"
          onChangeText={this.updateSearch}
          platform="ios"
          containerStyle={{ backgroundColor: 'white', margin: 10 }}
        /> */}
        {/* <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}> */}
        {/* <View style={styles.subSectionContainer}>
            <Text style={styles.sectionDescription}>Cuisines</Text>
          </View> */}
        {/* <ScrollView
            horizontal={true}
            contentContainerStyle={{ marginLeft: 10, marginBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            {this.state.cuisines.map(item => <Cuisine name={item.name} key={item.key}></Cuisine>)}
          </ScrollView> */}
        {/* <View style={styles.subSectionContainer}>
            <Text style={styles.sectionDescription}>Places near you</Text>
          </View> */}

        {/* {this.state.restaurants.map(item => <Restaurant name={item.name} key={item.key} onClick={this.onClick} />)} */}

        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: "row"
  },
  subSectionContainer: {
    marginTop: 0,
    paddingHorizontal: 24,
    flex: 1
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionHeader: {
    fontSize: 38,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: '600',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
