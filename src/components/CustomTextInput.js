import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import normalize from 'react-native-normalize';

const CustomTextInput = ({ label, hint, secureTextEntry, icon, value, onChangeText, err }) => {

    const [iconn, setIconn] = useState(icon)
    const [secure, setSecure] = useState(secureTextEntry)
    const onIconPressed = () => {
        if (iconn == "visibility-off") {
            setIconn("visibility")
            setSecure(false)
        } else if (iconn == "visibility") {
            setIconn("visibility-off")
            setSecure(true)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    placeholder={hint}
                    placeholderTextColor="gray"
                    secureTextEntry={secure}
                    value={value}
                    onChangeText={onChangeText}

                />
                <Icon
                    name={iconn}
                    color='#000'
                    size={20}
                    onPress={onIconPressed}
                />
            </View>
            {err ? <Text style={styles.invalid}>{err}</Text> : null}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: normalize(24),
        justifyContent: 'center',
    },
    title: {
        fontSize: normalize(14),
        color: 'black'
    },
    input: {
        flex: 1,
        color: 'black',
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        height:normalize(50),
        alignItems:'center'
    },
    invalid: {
        color: 'red',
        fontSize: normalize(10)
    }
})

export default CustomTextInput
