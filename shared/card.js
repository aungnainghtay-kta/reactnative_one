import React from 'react'
import {View, StyleSheet} from 'react-native'

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardBody}>
                { props.children }
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation:3,
        backgroundColor: '#fff',
        shadowOffset: {width:1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        marginHorizontal: 5,
        marginVertical: 8,
        justifyContent: 'center',

    },
    cardBody:{
        marginHorizontal: 8,
        marginVertical: 10,

    }
})