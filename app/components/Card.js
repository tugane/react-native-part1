import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import AppText from '../components/AppText';
import colors from '../config/colors';

function Card({image,title,subTitle,style}) {
    return (
        <View style={[styles.card,style]}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{ title }</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        overflow: 'hidden',
        borderRadius: 15,
        backgroundColor: colors.white,
        marginTop: 20,
    },
    image: {
        height: 200,
        width: '100%',
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
    },
    subTitle: {
        color: colors.secondary,
    }
})


export default Card;