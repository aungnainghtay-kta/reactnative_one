import React, { useState } from 'react'
import { Text, View, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import {globalStyles} from '../styles/Global'
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './reviewForm'


export default function Home({navigation}){
    const handleNavigate=()=>{
        //navigation.navigate('Detail')
        navigation.push('Detail')
    }
    const [reviews, setReviews]=useState([
        {title: 'Programmer from arakan', rating: 5, body: 'Hello programmers', key: '1'},
        {title: 'Network engineers', rating: 4, body: 'Hello programmers', key: '2'},
        {title: 'Hardware repair', rating: 2, body: 'Hello programmers', key: '3'},
        {title: 'Hackers from india', rating: 5, body: 'Hello programmers', key: '4'},
    ])

    const addReview=(review)=>{
        review.key=Math.random().toString()
        setReviews((currentReview)=>{
            return [review, ...currentReview]
        })
        setOpenModal(false)
    }

    //show hide modal 

    const [openModal, setOpenModal]=useState(false)
    return(
        <View style={globalStyles.container}>
            <Modal visible={openModal} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <MaterialIcons name="close" size={25} style={{ ...styles.modalIcon, ...styles.closeModal }} onPress={()=>setOpenModal(false)} />
                    <ReviewForm addReview={addReview} />
                </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons name="add" size={25} style={styles.modalIcon} onPress={()=>setOpenModal(true)} />
            <FlatList data={reviews} 
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Detail', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    modalIcon: {
        alignSelf: 'center',
        padding: 10,
    },
    closeModal: {
        marginBottom: 20,
    },
    modalContent: {
        flex:1,
    }
})