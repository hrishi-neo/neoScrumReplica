import React from 'react'
import { View, StyleSheet } from 'react-native'
import CustomFlatList from '../components/CustomFlatList'
import { useSelector } from 'react-redux';


const Home = () => {
    const data = useSelector((state) => state.data);
   
    return (
        <View style={styles.container}>
            <CustomFlatList data={data} numofColumn={1} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 60,
        flex: 1,
    }
})
export default Home
