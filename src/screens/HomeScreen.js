import React, { useEffect } from 'react'
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import constants from '../utils/constants';

import axios from '../utils/axios';

import Anime from '../components/Anime';

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
        <View>
            <FlatList
                style={styles.list}
                data={animes}
                renderItem={({ item }) => <Anime anime={item} navigation={navigation}/> }
                keyExtractor={(item) => item.id}
            />
            
        </View>
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
});