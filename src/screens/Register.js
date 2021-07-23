import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import CustomTextInput from '../components/CustomTextInput'
import normalize from 'react-native-normalize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Register = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState();
    const [Perr, setPErr] = useState();
    const [imgUri, setimgUri] = useState(null)
    const [showmodal, setShowmodal] = useState(false)

    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.container}>
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
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 16 ,alignSelf:'center'}}>
                        <Icon
                            name="add"
                            color='#000'
                            size={24} />
                        <Text style={{ color: 'black', fontSize: 14, }}>Add a picture</Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5} onPress={() => { navigation.navigate('Login') }}
                    style={styles.btn}>
                    <Text style={{ color: 'black', fontSize: 16, }}>Register</Text>
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    animationType="slide"
                    style={{ height: 300 }}
                    visible={showmodal}
                    onRequestClose={()=>{setShowmodal(false)}}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8,borderBottomWidth:0.5 }}>
                                <Icon
                                    name="close"
                                    color='#000'
                                    size={28} onPress={() => {
                                        setShowmodal(false)
                                    }} />
                                <Text style={{ paddingLeft: 8,fontSize:16 }}>Select an option</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 8, }}>
                                <View style={{ padding: 16, justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon
                                        name="camera"
                                        color='#000'
                                        size={32} onPress={()=>{
                                            launchCamera({ quality: 0.5 }, (response) => {
                                                const img = response.assets[0].uri
                                                setimgUri(img)
                                                setShowmodal(false)
                                            })
                                        }} />
                                    <Text>Camera</Text>
                                </View >
                                <Text style={{ padding: 16, }}>OR</Text>
                                <View style={{ padding: 16, justifyContent: 'center', alignItems: 'center' }}>
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
        justifyContent: 'center'
    },
    preview:{
        width: normalize(200),
         height: normalize(200),
         marginTop:16,
         borderRadius:16,
         alignSelf:'center'
    },
    btn: {
        borderRadius: normalize(8),
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
