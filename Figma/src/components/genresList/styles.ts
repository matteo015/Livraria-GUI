import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.brown,
        marginTop: 15,
        marginBottom: 15,
        marginHorizontal: 10,
        borderRadius: 5,
        padding: 10,
    }
})

