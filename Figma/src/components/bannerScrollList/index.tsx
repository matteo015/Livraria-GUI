import {FlatList, View} from 'react-native'
import BannerScroll from '../bannerScroll'
import { styles } from './styles'

type Props={
    data:{
        id: string,
        title: string,
    }[]
}

export default function BannerScrollList({ data }: Props){
    return(
        <View style={styles.container}>
            <FlatList
            data={ data }
            keyExtractor={item => item.id}
            renderItem={({item}) => <BannerScroll data={item}/>}
            horizontal
            />
        </View>
    )
}