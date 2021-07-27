import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import CustomTextInput from '../components/CustomTextInput'
import normalize from 'react-native-normalize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { register } from '../redux/action';

const Register = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState();
    const [Perr, setPErr] = useState();
    const [imgUri, setimgUri] = useState(null)
    const [showmodal, setShowmodal] = useState(false)
    const dispatch = useDispatch()

    const onSubmit = () => {
        const user = {
            email,
            password
        }
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (email.length < 1 && password.length < 1) {
            alert("Please fill all the details")
        } else if (!pattern.test(String(email).toLowerCase())) {
            alert("Invalid email")
        }
        else if (password.length < 8) {
            alert("Password must be atleast 8 chars")
        }
        else {
            dispatch(register(user))
            navigation.navigate('Login')
        }

    }

    const gotoLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.contentStyle}>
            <View style={styles.container}>
                <Image resizeMode="contain" style={styles.img} source={require('../assets/images/logo.jpeg')} />

                <Text style={styles.title}>Register</Text>
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
                {imgUri ? <Image style={styles.preview} source={{ uri: imgUri }} /> : null}

                <TouchableOpacity
                    activeOpacity={0.5} onPress={() => {
                        setShowmodal(true)
                    }}>
                    <View style={styles.addPic}>
                        <Icon
                            name="add"
                            color='#000'
                            size={24} />
                        <Text style={{ color: 'black', fontSize: 14, }}>Add a picture</Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5} onPress={() => { onSubmit() }}
                    style={styles.btn}>
                    <Text style={styles.btnView}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5} style={{ marginTop: normalize(16) }}
                    onPress={() => { gotoLogin() }}>
                    <Text style={styles.link}>Already have an account? Sign in</Text>
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    animationType="slide"
                    style={{ height: 300 }}
                    visible={showmodal}
                    onRequestClose={() => { setShowmodal(false) }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.mainView}>
                                <Icon
                                    name="close"
                                    color='#000'
                                    size={28} onPress={() => {
                                        setShowmodal(false)
                                    }} />
                                <Text style={styles.selectStyle}>Select an option</Text>
                            </View>
                            <View style={styles.subView}>
                                <View style={styles.imgView}>
                                    <Icon
                                        name="camera"
                                        color='#000'
                                        size={32} onPress={() => {
                                            launchCamera({ quality: 0.5 }, (response) => {
                                                const img = response.assets[0].uri
                                                setimgUri(img)
                                                setShowmodal(false)
                                            })
                                        }} />
                                    <Text>Camera</Text>
                                </View >
                                <Text style={styles.viewPadding}>OR</Text>
                                <View style={styles.imgView}>
                                    <Icon
                                        name="attachment"
                                        color='#000'
                                        size={32} onPress={() => {
                                            launchImageLibrary({ quality: 0.5 }, (response) => {
                                                const img = response.assets[0].uri
                                                setimgUri(img)
                                                setShowmodal(false)
                                            })
                                        }} />
                                    <Text>Gallery</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
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
    contentStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    preview: {
        width: normalize(200),
        height: normalize(200),
        marginTop: 16,
        borderRadius: 16,
        alignSelf: 'center'
    },
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderBottomWidth: 0.5
    },
    viewPadding: {
        padding: 16
    },
    addPic: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
        alignSelf: 'center'
    },
    subView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    selectStyle: {
        paddingLeft: 8,
        fontSize: 16
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
    imgView: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: normalize(200),
        height: normalize(100),
        alignSelf: 'center'
    },
    title: {
        fontSize: normalize(24),
        padding: normalize(8),
        alignSelf: 'center',
        marginBottom: normalize(24),
        fontWeight: 'bold'
    },
    btnView: {
        color: 'black',
        fontSize: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 8,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})

export default Register
