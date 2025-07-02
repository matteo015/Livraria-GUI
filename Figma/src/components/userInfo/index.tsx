import {Text, TouchableOpacity, View} from 'react-native'
import { styles } from './styles'

import { Feather, Fontisto, FontAwesome6 } from '@expo/vector-icons'

export default function UserInfo(){
    return(
        <View style={styles.container}>
            <FontAwesome6 style={styles.edit} name='edit' size={40}/>
            <View style={styles.userInfo}>
            <View style={styles.userInfo_uni}>
                <Feather name='user' size={40}/>
                <Text style={{opacity:0.6}}>Name</Text>
            </View>
            <View style={styles.userInfo_uni}>
                <Feather name='smartphone' size={40}/>
                <Text style={{opacity:0.6}}>99 9999-9999</Text>
            </View>
            <View style={styles.userInfo_uni}>
                <Feather name='eye' size={40}/>
                <Text style={{opacity:0.6}}>Password</Text>
            </View>
            <View style={styles.userInfo_uni}>
                <Fontisto name='email' size={40}/>
                <Text style={{opacity:0.6}}>Contact</Text>
            </View>
            </View>
        </View>
    )
}