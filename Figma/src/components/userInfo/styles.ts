import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.footer,
        marginTop: 15,
        margin: 5,
        height: '65%',
        width:'95%',
        borderRadius: 8,
    },
    userInfo:{
        width: '90%',
        marginHorizontal:17,
        gap: 8,
        paddingTop: '33%',
    },
    userInfo_uni:{
        flexDirection:'row',
        alignItems: 'baseline',
        borderBottomColor: colors.backColor,
        borderBottomWidth: 1,
        gap: 8,
    },
    edit:{
        justifyContent: 'flex-end',
        opacity: 0.7,
        position: 'absolute',
        right: 5,
        top: 5,    
    },
})

