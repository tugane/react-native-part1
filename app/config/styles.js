import { Platform } from "react-native"
import colors from "./colors"

export default {
    text: {
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        fontSize: 18,
        color: colors.dark,
    },
    colors,
}