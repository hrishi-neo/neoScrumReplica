import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import DrawerNavigator from './DrawerNavigator';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();


const StackNavigator = () => {
    const loggedIn = useSelector((state) => state.loggedIn);
    return (
        <NavigationContainer>
            <Stack.Navigator >
                {loggedIn ?
                    <>
                        <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
                    </> :
                    <>
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    </>}


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
