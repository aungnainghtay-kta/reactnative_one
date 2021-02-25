import {createStackNavigator} from 'react-navigation-stack'
import Home from '../screens/Home'
import Detail from '../screens/Review'
import Header from '../shared/header'
import React from 'react'

const screens={
    
    Home: {
        screen: Home,
        navigationOptions:({navigation})=>{
            return{
                headerTitleAlign: 'center',
                headerTitle: ()=> <Header navigation={navigation} title='Programmers' />
            }
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            title: 'Programmer detail'
        }
    },
    
}
const HomeStack=createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: '#eee', height: 80
        }
    }
});
export default HomeStack;