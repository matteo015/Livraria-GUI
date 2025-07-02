import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main:{
        backgroundColor: colors.backColor,
        width: '100%',
        height: '100%',
        justifyContent:'center',
        flex: 1,
    },
    container:{
        backgroundColor: colors.brown,
        margin: 10,
        width: '93%',
        height: '70%',
        borderRadius: 10,
        alignSelf: 'center',
        boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center',
        padding: 30,
    },
    userImage:{
        backgroundColor: colors.pink,
        borderRadius: 100,
        height: 130,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    userInfo:{
        backgroundColor: colors.pink,
        margin: 5,
        borderRadius: 8,
        width:'70%',
        boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.5)',
        paddingHorizontal: 5,
        overflow: 'hidden',
    },
    userResult:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
        alignItems:'center',
    },
    userButton:{
        backgroundColor: colors.pink,
        margin: 5,
        borderRadius: 8,
        width: 60,
        padding: 8,
        boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent:'center',
    }
})

