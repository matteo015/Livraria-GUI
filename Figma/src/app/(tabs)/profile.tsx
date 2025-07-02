import { Text, View } from "react-native";

import { colors } from "@/styles/colors";
import HeaderProfile from "@/components/headerProfile";
import UserInfo from "@/components/userInfo";

export default function Profile(){
    return(
        <View style={{flex:1, alignItems:'center'}}>
            <HeaderProfile/>
            <UserInfo/>
        </View>
    )
}