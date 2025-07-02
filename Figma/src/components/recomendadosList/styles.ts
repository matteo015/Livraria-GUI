import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      marginHorizontal: 12,
      marginTop: 10,
      borderRadius: 8, 
    },
    containerText:{
      backgroundColor:colors.brown,
      flexDirection: 'row',
      width: 130,
      marginLeft: 10,
      borderRadius: 8,
    },
    text:{
        fontSize: 16,
        margin: 6,
        color: colors.footer,
        fontWeight: 500,
    },
})

