import React from 'react'
import { View, StyleSheet } from 'react-native'
import FeedbackList from '../components/FeedbackList'
import { useSelector } from 'react-redux';

const AddFeedback = () => {
    const data = useSelector((state) => state.data);

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
