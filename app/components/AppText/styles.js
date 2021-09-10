import { StyleSheet,Platform } from 'react-native'
const styles = StyleSheet.create({
    text: {
        color: "tomato",
        ...Platform.select({
        ios: {
            fontSize: 20,
            fontFamily: "Avenir",
            padding: 10,
        },
        android: {
            fontSize: 18,
            fontFamily: "Roboto"
        }
    })
    },
})


export default styles;