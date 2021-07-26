import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../redux/action';

const CustomFeedback = ({ item }) => {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState('Submit Feedback')
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    return (
        <View>
            <View style={styles.input}>
                <TextInput
                    value={value}
                    multiline maxLength={100} onChangeText={text => {
                        setValue(text)
                        setCount(String(text).length)
                    }} placeholder="Write your feedback here.." />
            </View>
            <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 16, paddingRight: 16 }}>
                <Text style={{ alignSelf: 'flex-start', flex: 0.5, fontSize: 12 }}>Max 100 characters</Text>
                <Text style={{ alignSelf: 'flex-end', flex: 0.5, textAlign: 'right', fontSize: 12 }}>{count}/100</Text>
            </View>
            <View style={{ marginBottom: 16, paddingRight: 8 }}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        const feedback = { "name": item.name, "date": "26st July 2021", "title": value }
                        console.log(feedback)
                        dispatch(addFeedback(feedback))
                        setTitle('Submitted!')
                    }}
                    style={styles.btn}>
                    <Text style={{ color: 'white', fontSize: 16, }}>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        margin: normalize(12),
        borderWidth: 0.5,
        borderRadius: 8,
        height: normalize(100)
    },
    btn: {
        borderRadius: normalize(8),
        padding: normalize(10),
        marginTop: normalize(24),
        marginLeft: normalize(8),
        marginRight: normalize(8),
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        width: normalize(160),
        alignSelf: 'flex-end'
    },
})
export default CustomFeedback