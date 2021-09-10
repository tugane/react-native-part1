import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from './AppText'
import defaultStyles from '../config/styles.js'
function AppPicker({icon, placeholder, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon &&
            <MaterialCommunityIcons
            style={styles.icon}
            name={icon} size={20} />}
            <AppText style={styles.text}>
                { placeholder }
            </AppText>
            <MaterialCommunityIcons
            name="chevron-down" size={20} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 5,
        color: defaultStyles.colors.medium,
    },
    text: {
        flex: 1,
    }
})
export default AppPicker
