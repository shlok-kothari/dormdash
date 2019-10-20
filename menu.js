import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import MenuHeader from './menuHeader.js'
import MenuSection from './menuSection.js'
import Item from './item.js'

export default class Menu extends Component {
    render() {
        return (
            <ScrollView>
                <MenuHeader name={this.props.name}></MenuHeader>
                <MenuSection header={"Hello"}></MenuSection>
            </ScrollView>
        )
    }
}
Menu.propTypes = {
    menuItems: PropTypes.array
}


// export default Menu;