import {Text, TouchableOpacity, View} from 'react-native'
import { styles } from './styles'
import { Link } from 'expo-router'

import { Feather } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

export default function HeaderProfile(){
    return(
        <View style={styles.container}>
            <View style={styles.profilePic}>
                <TouchableOpacity>
                    <Link href={'/(tabs)/profile'}>
                    <Feather name='user' size={81} style={{opacity: 0.4}}/>
                    </Link>
                </TouchableOpacity>
            </View>
            <View style={styles.userInfo}>
             <Text style={{fontSize:16, color: 'white',
             borderBottomColor: 'black',
             borderBottomWidth: 1,}}>Murilo C.G.Furlanetto</Text>
             <Text style={{fontSize:12, opacity: 0.8, color: 'white',
             borderBottomColor: 'black',
             borderBottomWidth: 1,}}>murilo.canhadas.tinfem2022@gmail.com</Text>
            </View>
        </View>
    )
}