import React from 'react';
import { Dimensions } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import AddFeedback from '../screens/AddFeedback';
import Icons from 'react-native-vector-icons/MaterialIcons';
import normalize from 'react-native-normalize';

const DEVICE_WIDTH = Dimensions.get('window').width;

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            barStyle={{
                    borderTopLeftRadius: 21,
                    borderTopRightRadius: 21,
                    backgroundColor: "white",
                    position: 'absolute',
                    bottom: 0,
                    padding: 10,
                    width: DEVICE_WIDTH,
                    borderTopWidth: 0,
                    height: normalize(60)
            }}>

            <Tab.Screen name="Home" component={Home} options={{
               
                tabBarLabel: () => { return null },
                tabBarIcon: ({ focused }) => (
                    <Icons style={{ paddingBottom: 4, }} color={focused ? "#1E90FF" : "gray"} name="home" size={28} />
               ),
            }} />
            <Tab.Screen name="Add Feedback" component={AddFeedback} options={{
               
               tabBarLabel: () => { return null },
                tabBarIcon: ({ focused }) => (
                    <Icons style={{ paddingBottom: 4, }} color={focused ? "#1E90FF" : "gray"} name="rate-review" size={28} />
                ),
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator
