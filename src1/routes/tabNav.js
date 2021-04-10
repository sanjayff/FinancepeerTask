import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ScrollView,
    Platform,
    FlatList,
  } from 'react-native';


import { Icon } from 'react-native-elements';
import { SizeConfig } from '../constants/size-config';
import { COLORS } from '../constants/colors';

import HomeScreen from "../modules/homeScreen";
import SelfieScreen from "../modules/selfieScreen";
import LocationScreen from "../modules/locationScreen";
import JsonDisplayScreen from "../modules/jsonDisplayScreen";
import ApiScreen from "../modules/apiScreen";

const Tab = createBottomTabNavigator();

export class TabScreen extends React.Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: "#FF6151",
                    inactiveTintColor: COLORS.inactiveTintColor,
                    showLabel: true,
                    style: {
                        height: SizeConfig.blockHeight * 7,
                        // paddingBottom: SizeConfig.blockHeight * 2,

                    },
                    labelStyle: {
                        fontSize: SizeConfig.blockHeight * 2
                    }
                }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            // <Icon name="home" type="ionicon" color={color} size={size} />
                            <Image
                                style={{ tintColor: color }}
                                source={require('../assets/spaces.png')}
                                resizeMode= "cover"
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Selfie"
                    component={SelfieScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="cart" type="ionicon" color={color} size={size} />
                            // <Image
                            //     style={{ tintColor: color }}
                            //     source={require('../assets/newspaper.png')}
                            //     resizeMode= "cover"
                            // />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Location"
                    component={LocationScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            // <Icon name="cart" type="ionicon" color={color} size={size} />
                            <Image
                                style={{ tintColor: color }}
                                source={require('../assets/pinIcon.png')}
                                resizeMode= "cover"
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Json"
                    component={JsonDisplayScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            // <Icon name="cart" type="ionicon" color={color} size={size} />
                            <Image
                                style={{ tintColor: color }}
                                source={require('../assets/tuneIcon.png')}
                                resizeMode= "cover"
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Api"
                    component={ApiScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            // <Icon name="cart" type="ionicon" color={color} size={size} />
                            <Image
                                style={{ tintColor: color }}
                                source={require('../assets/infoIcon.png')}
                                resizeMode= "cover"
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }
}

