import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import normalize from 'react-native-normalize';

const CustomFeedback = () => {
    const [count, setCount] = useState(0)
    return (
        <View>
            <View style={styles.input}>
                <TextInput
                    multiline maxLength={100} onChangeText={text => setCount(String(text).length)} placeholder="Write your feedback here.." />
            </View>
            <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 16, paddingRight: 16 }}>
                <Text style={{ alignSelf: 'flex-start', flex: 0.5, fontSize: 12 }}>Max 100 characters</Text>
                <Text style={{ alignSelf: 'flex-end', flex: 0.5, textAlign: 'right', fontSize: 12 }}>{count}/100</Text>
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
})
export default CustomFeedback
