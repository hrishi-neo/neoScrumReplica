import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import CardView from 'react-native-cardview'
import normalize from 'react-native-normalize';
import LinearGradient from 'react-native-linear-gradient';

const CustomFlatList = ({ data, numofColumn }) => {
    return (
        <View>
            <FlatList data={data} numColumns={numofColumn}
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
                                        <Text style={styles.title}>Feedback</Text>
                                        <View style={styles.line}></View>
                                        <Text style={styles.content}>" {item.title} "</Text>
                                        <View style={{ padding: 8, }}>
                                            <Text style={styles.dateView}>
                                                Sent by - {item.name}
                                            </Text>
                                            <Text style={styles.dateView}>
                                                Posted on - {item.date}
                                            </Text>
                                        </View>
                                    </LinearGradient>
                                </View>
                            </CardView>
                        </View>
                    )
                }} />
        </View>
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
    title: {
        fontSize: normalize(18),
        textAlign: 'center',
        padding: normalize(8),
        paddingTop: normalize(10),
    },
    content: {
        fontSize: normalize(16),
        padding: normalize(8),
        paddingBottom: normalize(8),
    },
    line: {
        borderBottomWidth: 0.5
    },
    dateView: {
        alignSelf: 'flex-end',
        fontSize: normalize(14),
        paddingRight: normalize(8),

    }
})

export default CustomFlatList