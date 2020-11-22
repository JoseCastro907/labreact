import React, { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList,SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import constants from '../utils/constants';

import axios from '../utils/axios';

import Anime from '../components/Anime';
import { fontsName } from '../utils/fonts';

export const HomeScreen = ({ navigation, route }) => {

    const [ animes, setAnimes] = React.useState([]);
    useEffect(() => {
        axios.get(`top/anime/1`)
        .then((res) => {

           const dataAnime = res.data.top;
            setAnimes(dataAnime);
        })
        .catch((err) => console.log(err));
    }, [setAnimes]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <MaterialCommunityIcons name="menu" size={38} color="white" />  
                <Text style={styles.title}>AnimeList</Text>
                <FontAwesome5 name="search" size={22} color="white" />
            </View>
            <FlatList
                style={styles.list}
                data={animes}
                renderItem={({ item }) => <Anime anime={item} navigation={navigation}/> }
                keyExtractor={(item) => item.id}
            />
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: constants.COLORS.LIGHT_GRAY,
    },
    list:{
        padding: 20,
    },
    titleContainer:{    
        paddingHorizontal: 20,
        flexDirection: "row",
        paddingBottom: 8,
        paddingTop: 18,
        alignItems: "center",
        justifyContent: "space-between",
    },
    title:{
        fontFamily: fontsName.TITLE,
        fontSize: 22,
        color: constants.COLORS.WHITE,
    },
});