import Genres from '../genres'

import {View, FlatList} from 'react-native'
import { styles } from './styles'

type Props = {
    data:{
        id: string,
        title: string,
        cover?: string,
    }[]
}

export default function GenresList({ data }: Props){
    return(
        <View style={styles.container}>
            <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Genres data={item}/>}
            showsHorizontalScrollIndicator={false}
            horizontal
            />
        </View>
    )
}
