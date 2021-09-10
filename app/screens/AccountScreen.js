import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'
import colors from '../config/colors'


const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    },
]

function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Tugane AMiel"
                    subTitle="tooamiel@gmail.com"
                    image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => 
                        <ListItem title={item.title}
                            IconComponent={
                            <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                        } />
                    }
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon
                        name="logout"
                        backgroundColor="#cfc9a8"
                    />
                }
            />
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen
