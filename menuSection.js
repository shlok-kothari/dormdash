import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Item from './item.js'
import { Card } from 'react-native-elements'
import * as halalshack from './halal-shack.json'

export default class MenuSection extends Component {




    render() {

        let print = [];
        // console.log("hala;", halalshack.menu)
        // halalshack.menu.map(function (section) {
        //     console.log(section);
        // })
        for (var key in halalshack.menu) {
            var list = [];
            for (var item in halalshack.menu[key]) {
                list.push(
                    <Item text={halalshack.menu[key][item].item}
                        key={halalshack.menu[key][item].item}
                        price={halalshack.menu[key][item].price}
                        calories={halalshack.menu[key][item].calories}
                        minCalories={halalshack.menu[key][item].min_calories}
                        maxCalories={halalshack.menu[key][item].max_calories}
                    />)
            }
            print.push(<Card title={key} styles={styles.card} key={key} titleStyle={{ textAlign: 'left' }}>{list}</Card>);
        }

        return (
            <>
                {print}
            </>
        )
    }
}

const styles = {
    itemHeader: {
        color: 'black',
        fontWeight: "600",
        fontSize: 20,
        marginTop: 10,
        paddingHorizontal: 10
    },
    itemText: {
        color: 'black',
        fontWeight: "600",
        fontSize: 15,
        marginTop: 10,
        paddingHorizontal: 10
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}
// export default MenuSection;