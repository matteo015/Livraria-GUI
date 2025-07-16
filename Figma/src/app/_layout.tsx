import { colors } from "@/styles/colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SQLiteProvider } from "expo-sqlite";
import { startDatabase } from "@/database/setup";

export default function Layout(){
    return(
        <SQLiteProvider databaseName="store.db" onInit={startDatabase}>
        <>
            <StatusBar style='light'/>
            <Stack screenOptions={{headerShown: false,}}/>
        </>
        </SQLiteProvider>
    )
}