import React, { useState } from 'react'
import { View, Button, Text} from 'react-native'
import {globalStyles} from '../styles/Global'
import {Formik} from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import FlatButton from '../shared/flatbutton'
import * as Yup from 'yup';

const reviewSchema=Yup.object({
    title:Yup.string()
    .required()
    .min(4),
    body:Yup.string()
    .required()
    .min(8),
    rating:Yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be number between 1-5', (val)=>{
        return parseInt(val) <6 && parseInt(val) >0
    })
})

export default function ReviewForm({addReview}){
    return(
        <View style={globalStyles.container}>
            <Formik 
                initialValues={
                    {
                        title: '', body: '', rating: ''
                    }
                }
                validationSchema={reviewSchema}
                onSubmit={
                    (values, actions)=>{
                        actions.resetForm()
                        addReview(values)
                    }
                }
            >
                {(props)=>(
                    <View>
                        {/* start text */}
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.showError}>{props.touched.title && props.errors.title}</Text>
                        {/* end start text */}
                        {/* start text */}
                        <TextInput
                            multiline minHeight={80}
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.showError}>{props.touched.body && props.errors.body}</Text>
                        {/* end start text */}
                        {/* start text */}
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.showError}>{props.touched.rating &&props.errors.rating}</Text>
                        {/* end start text */}
                        <FlatButton text='Save' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}