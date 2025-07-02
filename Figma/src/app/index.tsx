import { DATA } from "@/utils/data"

import { ScrollView, Text, View } from "react-native"
import Login from "@/components/login"

export default function Index(){
    return ( //tela de login (vou fazer ela ainda)
        <View style={{flex:1, alignItems:'center'}}>
            <Login/>
        </View>
    )
}