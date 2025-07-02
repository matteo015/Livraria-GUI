import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop: 10,
        margin: 10,
        width: '95%',
        height: 120,
        backgroundColor: colors.brown,
        alignItems: 'center',
        gap: 7,
        paddingHorizontal: 10,
        borderRadius: 8,
        boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.5)'
    },
    profilePic:{
        borderRadius: '100%',
        height: 80,
        width: 80,
        backgroundColor: colors.pink,
        alignItems: 'center',
        justifyContent:'center',
        overflow:'hidden',
    },
    userInfo:{
        flexDirection: 'column',
        gap: 8,
    },
})

