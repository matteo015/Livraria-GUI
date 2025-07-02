import {View, Text, Image, TouchableOpacity} from 'react-native'
import { styles } from './styles'

type Props = {
    data:{
        title: string
        cover?: string
    }
}

export default function Genres({ data }: Props){
    return(
        <View>
            <TouchableOpacity style={styles.container}>
                <Image style={styles.image} source={{uri: data.cover}}/>
            </TouchableOpacity>
        </View>
    )
}