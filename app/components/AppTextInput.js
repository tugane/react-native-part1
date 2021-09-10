import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';
import defaultStyles from '../config/styles'
function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            { icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} />}
            <TextInput style={defaultStyles.text} {...otherProps} />
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
    }
})
export default AppTextInput
