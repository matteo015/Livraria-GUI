import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import { styles } from './styles'
import { Link } from 'expo-router'

import { Feather } from '@expo/vector-icons'

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.search}>
                <TouchableOpacity>
                    <Feather name='search' size={30} style={{opacity: 0.7}}/>
                </TouchableOpacity>
                <TextInput style={{opacity: 0.5, fontSize:14}} placeholder='Search'/>
            </View>
            <View style={styles.profilePic}>
                <TouchableOpacity>
                    <Link href={'/(tabs)/profile'}>
                    <Feather name='user' size={51} style={{opacity: 0.7}}/>
                    </Link>
                </TouchableOpacity>
            </View>
        </View>
    )
}