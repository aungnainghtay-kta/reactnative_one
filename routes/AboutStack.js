import {createStackNavigator} from 'react-navigation-stack'
import About from '../screens/About'
import Header from '../shared/header'
import React from 'react'

const screens={
    
    About: {
        screen: About,
        navigationOptions:({navigation})=>{
            return{
                headerTitleAlign: 'center',
                headerTitle: ()=> <Header navigation={navigation} title='About Us' />
            }
        }
    }
}
const AboutStack=createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: '#eee', height: 80
        }
    }
});
export default AboutStack;