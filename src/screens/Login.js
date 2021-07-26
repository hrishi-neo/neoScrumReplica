import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import CustomTextInput from '../components/CustomTextInput'
import normalize from 'react-native-normalize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from '../redux/action';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState();
    const [Perr, setPErr] = useState();
    const loggedIn = useSelector((state) => state.loggedIn);
    const emailRedux = useSelector((state) => state.email);
    const passRedux = useSelector((state) => state.password);
    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log(emailRedux)
        if (email === emailRedux && password === passRedux) {
            const user = {
                email,
                password
            }
            dispatch(login(user))
            navigation.navigate('Home')
        } else {
            alert("Please check the email and password you've entered!")
        }
    }
    useEffect(() => {
        if (loggedIn == true) {
            navigation.navigate('Home')
        }
    }, [])
    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.container}>
                <Image resizeMode="contain" style={styles.img} source={require('../assets/images/logo.jpeg')} />
                <Text style={styles.title}>Login</Text>
                <CustomTextInput
                    label="Username"
                    hint="test@gmail.com"
                    value={email}
                    err={err}
                    onChangeText={(email) => {
                        const check = email
                        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        setEmail(email)
                        if (!check) {
                            setErr("email is a required field")
                        }
                        else if (!pattern.test(String(check).toLowerCase())) {
                            setErr("email is not valid")
                        }
                        else {
                            setErr(null)
                        }
                    }}
                    icon="person" />
                <CustomTextInput
                    label="Password"
                    hint="********"
                    icon="visibility-off"
                    value={password}
                    err={Perr}
                    onChangeText={(pass) => {
                        const check = pass
                        setPassword(pass)
                        if (!check) {
                            setPErr("password is a required field")
                        }
                        else if (String(check).length < 8) {
                            setPErr("password should be atleast 8 chars")
                        }
                        else {
                            setPErr(null)
                        }
                    }}
                    secureTextEntry />
                <TouchableOpacity
                    activeOpacity={0.5} onPress={() => { onSubmit() }}
                    style={styles.btn}>
                    <Text style={{ color: 'black', fontSize: 16, }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: normalize(8) }}
                    activeOpacity={0.5}>
                    <Text style={styles.link}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5} style={{ marginTop: normalize(16) }}
                    onPress={() => { navigation.navigate('Register') }}>
                    <Text style={styles.link}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: normalize(8),
        margin: normalize(8),
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    img: {
        width: normalize(200),
        height: normalize(100),
        alignSelf: 'center'
    },
    btn: {
        borderRadius: normalize(20),
        padding: normalize(10),
        marginTop: normalize(24),
        marginLeft: normalize(8),
        marginRight: normalize(8),
        alignItems: 'center',
        backgroundColor: '#1E90FF'

    },
    link: {
        color: 'black',
        fontSize: 14,
        alignSelf: 'center',
        padding: normalize(4)
    },
    title: {
        fontSize: normalize(24),
        padding: normalize(8),
        alignSelf: 'center',
        marginBottom: normalize(24),
        fontWeight: 'bold'

    }
})

export default Login
