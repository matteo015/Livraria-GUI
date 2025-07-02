import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import { styles } from './styles'

import { Feather, Fontisto, FontAwesome6 } from '@expo/vector-icons'
import { Link } from 'expo-router'

export default function Login(){
    return(
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.userImage}>
                    <Feather name='user' size={100}/>
                </View>
                <View style={styles.userInfo}>
                    <TextInput style={{opacity:0.6}}>User</TextInput>
                </View>
                <View style={styles.userInfo}>
                    <TextInput style={{opacity:0.6}}>Password</TextInput>
                </View>
                <View style={styles.userResult}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 14,opacity:0.6, color: '#46B8FF'}}>Forgot password?</Text>
                    </TouchableOpacity>
                <View style={styles.userButton}>
                    <TouchableOpacity>
                    <Link href={'/(tabs)'}>
                        <Text style={{fontSize: 15}}>Login</Text>
                    </Link>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </View>
    )
}