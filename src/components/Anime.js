import React from 'react'
import { View, Text,StyleSheet, Image, Pressable} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import constants from '../utils/constants';

const anime = ({ anime , navigation }) => {

    const { title,score,start_date,end_date,image_url} = anime;

    const loadAnime= () => {
        navigation.navigate(constants.SCREEN.DETAILS, { anime });
    };

    return (
        <Pressable style={styles.card} onPress={loadAnime}>
            <Image
                style={styles.poster}
                source={{uri:image_url}}   
            />
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.datesContainer}>
                    <Text style={styles.startDate}>{start_date}</Text>
                    <Text>{end_date}</Text>
                </View>
                    <Text>{score}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: constants.COLORS.WHITE,
        marginBottom: 12,
        borderRadius: 25,
		flexDirection: 'row',
		position: 'relative',
    },
    container:{
        flexDirection: 'column',
        marginLeft: 10,
    },
    titleContainer:{
        flexDirection: "row",
    },
    title:{
        color: constants.COLORS.GREEN,
        fontWeight: "bold",
        flexGrow: 1,
        fontSize: 16,
    },
    score:{

    },
    datesContainer:{
        flexDirection: 'row',
    },
    startDate:{
        marginRight: 20,
    },
    poster:{
        width: 100,
        height: 133,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    }

}); 

export default anime;

