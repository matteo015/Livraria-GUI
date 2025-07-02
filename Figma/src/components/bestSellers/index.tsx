import {View, Text} from 'react-native'
import { styles } from './styles'

type Props={
    data:{
        title: string
    }
}

export default function BestSellers({data}: Props){
    return(
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}