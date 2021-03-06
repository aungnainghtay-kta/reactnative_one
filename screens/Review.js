import React from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'
import {globalStyles, images} from '../styles/Global'
import Card from '../shared/card'

export default function Review({navigation}){
    const handleNavigate=()=>{
        navigation.goBack();
    }

    const rating=navigation.getParam('rating')
    console.log(rating)
    return(
        <View style={globalStyles.container}>
            <Card>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <View style={styles.rating}>
                <Text>Programmer rating: </Text>
                <Image source={images.ratings[rating]} />
            </View>
            </Card>
        </View>
    )
}

const styles=StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})