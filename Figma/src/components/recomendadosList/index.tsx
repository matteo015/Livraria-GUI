import {FlatList, Text, View} from 'react-native'
import Recomendados from '../recomendados'
import { styles } from './styles'

type Props={
    data:{
        id: string,
        title: string,
    }[]
}

export default function RecomendadosList({ data }: Props){
    return(
        <View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Recommended</Text>
            </View>
            <View style={styles.container}>
            <FlatList
            data={ data }
            keyExtractor={ item => item.id }
            renderItem={({item}) => <Recomendados data={item}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            />
            </View>
        </View>
    )
}