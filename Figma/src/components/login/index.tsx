import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { styles } from './styles'

import { Feather, Fontisto, FontAwesome6 } from '@expo/vector-icons'
import { Link } from 'expo-router'  
import { useState } from 'react'
import { useRouter } from 'expo-router';
import { useDatabase } from '@/database/useDatabase'

export default function Login(){
    const router = useRouter()
    const [user_id, set_user_id] = useState("")
    const [user_password, set_user_password] = useState("")
    const database = useDatabase()

    async function login(){
        try {
            if(user_id == undefined || user_password == undefined){
                return
            }
            const login_sucess = await database.login({
                id_user: user_id,
                password: user_password
            })

            if(login_sucess == true){
                console.log('Login sucessfully!')
                router.push('/(tabs)/profile')
            }
        } catch (error) {
            console.log('Failed to login.')
            console.log({error})
        }
    }
    return(
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.userImage}>
                    <Feather name='user' size={100}/>
                </View>

                <View style={styles.userInfo}>
                    <TextInput style={{opacity:0.6}} placeholder="Username" onChangeText={set_user_id} value={user_id}/>
                </View>

                <View style={styles.userInfo}>
                    <TextInput style={{opacity:0.6}} placeholder="Password" onChangeText={set_user_password} value={user_password}/>
                </View>

                <View style={styles.userResult}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 14,opacity:0.6, color: '#46B8FF'}}>Forgot password?</Text>
                    </TouchableOpacity>
                <View style={styles.userButton}>

                    <TouchableOpacity onPress={() => login()}>
                    <Text style={{fontSize: 15}}>Login</Text>
                    {/* <Link href={'/(tabs)'}>
                    </Link> */}
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </View>
    )
}