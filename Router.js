import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {HomeScreen, DetailsScreen }from './src/screens';

import constants from './src/utils/constants';

const Stack= createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName={constants.SCREEN.HOME} 
                screenOptions={{ headerStyle:{ 
                                    backgroundColor: constants.COLORS.DARK_BLUE,
                                    },
                                    }}>   

                <Stack.Screen 
                    name={constants.SCREEN.HOME} 
                    component={HomeScreen} 
                    options={{
                        title: 'ANIMELIST',
                        headerShown: false,

                        }}/>


                <Stack.Screen
                    name={constants.SCREEN.DETAILS} 
                    component={DetailsScreen} 
                    options={{
                        title: '',
                        headerBackTitleVisible: false,
                        headerTintColor: constants.COLORS.WHITE,
                        headerTitle:false,
                        }}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
