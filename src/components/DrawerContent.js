import React from 'react'
import { View, StyleSheet, } from 'react-native'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import {
    Avatar,
    Title,
    Drawer,
} from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/action';


const DrawerContent = (props) => {
const dispatch =useDispatch()
    return (
        <View style={{ flex: 1 }}>

            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    <View style={styles.userInfoSection}>
                        <View style={{ padding: 8, justifyContent: 'center' }}>
                            <Avatar.Image
                                source={require('../assets/images/avatar.png')}
                                size={80} />
                            <Title style={styles.title}> Hrishi Kedar</Title>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ size }) => (
                                <Icons color='#1E90FF' name="home" size={size} />)}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }} />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icons color='#1E90FF' name="rate-review" size={size} />)}
                            label="Add Feedback"
                            onPress={() => { props.navigation.navigate('Add Feedback') }} />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem onPress={() => {
                    dispatch(logout())
                    props.navigation.navigate('Login')
                }
                } icon={({ size }) => (<Icons color='#1E90FF'
                    name="exit-to-app" size={size} />)} label="Sign Out" />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        borderBottomWidth: 0.5,
        borderColor: 'gray'
    },
    title: {
        fontSize: 16,
        marginTop: 4,
        color: 'black',
        fontWeight: 'bold',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
});

export default DrawerContent