import Header from "@/components/header"
import GenresList from "@/components/genresList"
import { DATA } from "@/utils/data"

import { ScrollView, Text, View } from "react-native"
import BestSellersList from "@/components/bestSellersList"
import BannerScrollList from "@/components/bannerScrollList"
import RecomendadosList from "@/components/recomendadosList"

export default function Index(){
    return (
        <View style={{flex:1, alignItems:'center'}}>
            <Header/>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 100,
            }}>
            <GenresList data={DATA.RECENT}/>
            <BestSellersList data={DATA.PAGES}/>
            <BannerScrollList data={DATA.PAGES}/>
            <RecomendadosList data={DATA.PAGES}/>
            </ScrollView>
        </View>
    )
}