import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";
import { Feather, FontAwesome5 } from '@expo/vector-icons';

export default function TabsLayout(){
    return(
        <Tabs screenOptions={{
                headerShown: false,
                sceneStyle:{ backgroundColor: colors.backColor,},
                tabBarShowLabel: false,
                tabBarStyle:{
                    paddingTop:10,
                    height: 60,
                    backgroundColor: colors.footer, 
                    opacity: 0.7,
                    margin: 20,
                    marginBottom: 25,
                    borderRadius: 8,
                    position: 'absolute',    
                },
                tabBarActiveTintColor: 'black',
        }}>
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({color, size}) => (
                    <Feather name='home' size={size} color={color}/>
                )
            }}/>
            <Tabs.Screen name="carrinho" options={{
                tabBarIcon: ({color, size}) => (
                    <Feather name='shopping-cart' size={size} color={color}/>
                ),
                tabBarBadge: 2,
                tabBarBadgeStyle: {
                    borderRadius: 5,
                    
                }
            }}/>
            <Tabs.Screen name="profile" options={{
                tabBarIcon: ({color, size}) => (
                    <Feather name='user' size={size} color={color}/>
                )
            }}/>
        </Tabs>

    )
}