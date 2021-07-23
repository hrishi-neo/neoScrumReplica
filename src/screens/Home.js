import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import CustomFlatList from '../components/CustomFlatList'
import data from '../assets/data/data'


const Home = () => {
    return (
        <View style={styles.container}>
            <CustomFlatList data={data} numofColumn={1}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
        paddingBottom:60,
        flex: 1,
        
    }
})
export default Home
