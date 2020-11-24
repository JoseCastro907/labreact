import React from 'react'
import { View,StyleSheet, Image, Pressable} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Text from './TextCustom';

import constants from '../utils/constants';
import { fontsName } from '../utils/fonts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { color } from 'react-native-reanimated';

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
            <View style={{ flex: 1, marginLeft: 30 }}>
                <View style={styles.titleContainer}>
                    <Text  numberOfLines={2} fontFamily="bold" style={styles.title}>{title}</Text>
                   
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.datesContainer}>
                        <Text style={styles.textDate}>{start_date}  -  </Text>
                        <Text style={styles.textDate}>{end_date}</Text>
                    </View>
                    <View style={styles.scoreContainer}>
                        <View style={styles.score}>
                            <Text style={styles.textScore}>{score}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: constants.COLORS.DARK_BLUE2,
        marginBottom: 65,
        borderRadius: 12,
		flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
    },
    titleContainer:{
        flexDirection: "row",
        justifyContent: "space-between",

    },
    title:{
        color: constants.COLORS.WHITE,
        fontSize: 32,
        marginTop: 15,

    },
    detailsContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    scoreContainer:{
        marginTop: 40,
        marginRight: 30,        
    },
    score:{
        backgroundColor: constants.COLORS.RED,
        borderRadius: 12,
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 2,
        paddingBottom: 2,
        height: 22,
        width: 60,
        alignItems: "center",

    },
    textScore:{
        fontSize: 15,
        color: constants.COLORS.WHITE,
    },
    datesContainer:{
        flexDirection: 'row',
        marginLeft: 15,

    },
    textDate:{
        color: constants.COLORS.BLUE_LIGHT,

        fontSize: 12,
    },
    poster:{
        width: 120,
        height: 180,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        position: 'relative',

    }

}); 

export default anime;

