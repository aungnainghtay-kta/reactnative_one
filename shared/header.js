import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image, ImageBackground} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
 
export default function Header({navigation, title}){
    const handlePress=()=>{
        navigation.openDrawer()
    }
    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            {/* icon */}
            <MaterialIcons name='menu' size={28} style={styles.icon} onPress={handlePress} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.heartLogo} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles=StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 12,
    },
    headerTitle:{
        flexDirection: 'row',
        alignItems: 'center',

    },
    heartLogo: {
        width: 20,
        height: 20,
        marginHorizontal: 15,
    }
})