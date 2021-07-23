import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import data from '../assets/data/data'
import FeedbackList from '../components/FeedbackList'

const AddFeedback = () => {
    return (
        <View style={styles.container}>
            <FeedbackList data={data} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       
        flex: 1,
    }
})

export default AddFeedback
