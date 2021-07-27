import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/MaterialIcons';
import BottomTabNavigator from './BottomTabNavigator';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

    switch (routeName) {
        case 'Home':
            return 'Home';
        case 'Add Feedback':
            return 'Add Feedback';

    }
}
const NavigationDrawerStructure = (props) => {
    const toggleDrawer = () => {
        props.navigation.dispatch(DrawerActions.toggleDrawer())
    };

    return (
        <TouchableOpacity onPress={() => toggleDrawer()}>
            <Icons color="#1E90FF" name="menu" size={28} style={{ padding: 4 }} />
        </TouchableOpacity>
    );
};


const DrawerNavigator = ({ navigation }) => {
    return (
        <Drawer.Navigator
            drawerStyle={{
                borderBottomRightRadius: 16,
                borderTopRightRadius: 16,
                backgroundColor: 'white'
            }}
            drawerContent={props => <DrawerContent {...props} />}
            drawerContentOptions={{
                itemStyle: { marginVertical: 4 },
            }}
            screenOptions={{
                headerShown: true,
                headerLeft: () => <NavigationDrawerStructure navigation={navigation} />,
            }}>
            <Drawer.Screen name="Home" component={BottomTabNavigator} options={({ route }) => ({
                title: 'Home',
                headerTitleStyle: {
                    color: 'black',
                    textAlign: 'left'
                },
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTitle: getHeaderTitle(route),
                drawerIcon: ({ focused }) => (
                    <Icons
                        name="home"
                        size={32}
                        color={focused ? "#F8EA8C" : "gray"}
                    />
                ),
            })} />

        </Drawer.Navigator>
    )
}

export default DrawerNavigator
