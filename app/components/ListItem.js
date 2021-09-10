import React from 'react'
import { View,StyleSheet, Image, TouchableHighlight } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import colors from '../config/colors'
import AppText from './AppText'

function ListItem({title,subTitle,IconComponent, image,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}>
                <View style={styles.container}>
                {IconComponent}
                { image && <Image style={styles.image} source={image} />}
                <View style={styles.detailContainer}>
                    <AppText style={styles.title} >{ title }</AppText>
                    { subTitle && <AppText style={styles.subTitle} >{ subTitle }</AppText>}
                </View>
            </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.white
    },
    detailContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },  
    image: {
        width: 50,
        height: 50,
        borderRadius: 35,
    },
    title: {
        fontWeight: "600",
    },
    subTitle: {
        color: colors.medium,
        marginTop: 5.
    }
})

export default ListItem
