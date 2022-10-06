import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { images } from '../constants'

const PhoneNumScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#5566ee" barStyle="light-content" />
            <SafeAreaView style={styles.headerWrapper}>
                <View style={styles.header}>
                    <View>
                        <Icon name="chevron-left" size={24} style={styles.iconWhite} />
                    </View>
                    <View>
                        <Text style={styles.headerText}>Send Code</Text>
                    </View>
                    <View style={{ width: 20 }} />
                </View>
                <View style={styles.icon}>
                    <Image 
                        style={{ width: 80, height: 80 }}
                        source={images.phoneIcon}
                    />
                </View>
            </SafeAreaView>

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>Personal Information &gt;</Text>
                </View>
                <View style={styles.countryCode}>
                    <Image 
                        style={styles.flag}
                        source={images.pakistan}
                    />
                    <Text style={styles.countryName}>Pakistan (+92)</Text>
                    <View />
                </View> 
                <View>
                    <TextInput 
                        style={styles.phoneInput}
                        placeholder='Your phone number'
                        placeholderTextColor='#ababab'
                    />
                </View>
                <View>
                    <Text style={styles.description}>We will send you a verification code to your phone number</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button}>
                        <Icon name='arrow-right' size={25} style={styles.iconButton}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PhoneNumScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7'
    },
    headerWrapper: {
        backgroundColor: '#5566ee',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconWhite: {
        color: '#fff'
    },
    headerText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18
    },
    icon: {
        paddingTop: 80,
        paddingBottom: 160,
        alignItems: 'center'
    },
    content: {
        marginHorizontal: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: -80,
        paddingBottom: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#2d2d2d',
        paddingVertical: 20
    },
    countryCode: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#d7d7d7',
        borderBottomWidth: 2,
        marginBottom: 20,
    },
    flag: {
        marginRight: 20
    },
    countryName: {
        color: '#3a3a3a',
        fontSize: 18,
        paddingVertical: 20,
        fontWeight: 'bold'
    },
    phoneInput: {
        fontWeight: '500',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 2,
        fontSize: 16,
        marginBottom: 20,
        paddingVertical: 20
    },
    description: {
        color: '#989898',
        textAlign: 'center',
        fontSize: 18,
        padding: 20,
        fontWeight: '500'
    },
    buttonWrapper: {
        alignItems: 'center',
        marginVertical: 30
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4355ee',
        width: 50,
        height: 50,
        borderRadius: 50
    },
    iconButton: {
        color: '#fff'
    }
})