import {FlatList, Text, View} from 'react-native'
import BestSellers from '../bestSellers'
import { styles } from './styles'

type Props={
    data:{
        id: string
        title: string
    }[]
}

export default function BestSellersList({ data }: Props){
    return(
        <View>
        <View style={styles.containerText}>
            <Text style={styles.text}>Best Sellers</Text>
        </View>
        <View style={styles.container}>
            <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => <BestSellers data={item}/>}
            showsHorizontalScrollIndicator={false}
            horizontal
            />
        </View>
        </View>
    )
}