import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        height: 90,
        backgroundColor: colors.brown,
        paddingTop: 18,
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 10,
        boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.5)'
    },
    search:{
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'flex-start',
        height: '55%',
        borderRadius: 5,
        backgroundColor: colors.pink,   
        paddingHorizontal: 5,
    },
    profilePic:{
        borderRadius: '100%',
        height: 50,
        width: 50,
        backgroundColor: colors.pink,
        alignItems: 'center',
        justifyContent:'center',
        overflow:'hidden',
    }
})

