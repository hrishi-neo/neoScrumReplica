import React from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import CardView from 'react-native-cardview'
import normalize from 'react-native-normalize';
import LinearGradient from 'react-native-linear-gradient';
import CustomFeedback from './CustomFeedback';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const FeedbackList = ({ data }) => {

    return (
        <KeyboardAwareScrollView >
            <View style={{ paddingBottom: 60 }}>
                <FlatList data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>
                                <CardView
                                    cardElevation={5}
                                    cardMaxElevation={2}
                                    cornerRadius={8}>
                                    <View style={styles.cardView}>
                                        <LinearGradient colors={['#7AD7F0', '#92DFF3', '#B7E9F7', '#DBF3FA', '#F5FCFF']} style={{ borderRadius: 8 }}>
                                            <Image style={styles.logo} source={require('../assets/images/avatar.png')} resizeMode="contain" />
                                            <Text style={styles.title}>{item.name}</Text>
                                            <View style={styles.line}></View>
                                            <CustomFeedback />
                                            <View style={{ marginBottom: 16, paddingRight: 8 }}>
                                                <TouchableOpacity
                                                    activeOpacity={0.5}
                                                    style={styles.btn}>
                                                    <Text style={{ color: 'white', fontSize: 16, }}>Submit Feedback</Text>
                                                </TouchableOpacity>
                                            </View>

                                        </LinearGradient>
                                    </View>
                                </CardView>
                            </View>
                        )
                    }} />
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: normalize(8),
        margin: normalize(8),
    },

    cardView: {
        margin: normalize(8),
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
    title: {
        fontSize: normalize(18),
        textAlign: 'center',
        padding: normalize(8),
        paddingTop: normalize(10),
    },
    logo: {
        width: normalize(100),
        height: normalize(100),
        marginTop: normalize(10),
        alignSelf: 'center'
    },
    content: {
        fontSize: normalize(16),
        padding: normalize(8)
    },
    line: {
        borderBottomWidth: 0.5
    },
    dateView: {
        alignSelf: 'flex-end',
        fontSize: normalize(14),
        padding: normalize(4),
        paddingRight: normalize(8),
        paddingBottom: normalize(8),
    }
})

export default FeedbackList
