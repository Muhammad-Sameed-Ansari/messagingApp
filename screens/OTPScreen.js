import { KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation, useRoute } from '@react-navigation/native'
import Svg, { Path } from 'react-native-svg'

const OTPScreen = () => {
    const navigation = useNavigation()
    const { params } = useRoute()
    const [isFocused, setIsFocused] = useState({
        digit1: false,
        digit2: false,
        digit3: false,
        digit4: false,
    })

    const { phoneNumber } = params

    const handleInputFocus = (input) => {
        setIsFocused({
            [input]: true
        })
    }

    const handleInputBlur = (input) => {
        setIsFocused({
            [input]: false
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
            <SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <FontAwesome name='chevron-left' size={24} style={styles.headerIcon}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headerTitle}>Verification Code</Text>
                    </View>
                    <View style={{ width: 20 }}/>
                </View>
            </SafeAreaView>

            <View>
                <View style={styles.svgWrapper}>
                    <Svg viewBox='0 0 1440 320'>
                        <Path fill="#5566ee" d="M0,192L40,165.3C80,139,160,85,240,101.3C320,117,400,203,480,229.3C560,256,640,224,720,186.7C800,149,880,107,960,117.3C1040,128,1120,192,1200,229.3C1280,267,1360,277,1400,282.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"/>
                    </Svg>
                </View>
            </View>
            
            <View style={styles.content}>
                <Text style={styles.title}>Confirmation</Text>
                <Text style={styles.subTitle}>Please type the verification code send to {phoneNumber}</Text>
                <View style={styles.otpWrapper}>
                    <TextInput 
                        onFocus={() => handleInputFocus('digit1')}
                        onBlur={() => handleInputBlur('digit1')}
                        style={[styles.otpButton, isFocused.digit1 ? styles.focusedInput : styles.notFocusedInput]}
                        keyboardType='numeric'
                        maxLength={1}
                        caretHidden={true}
                        clearTextOnFocus={true}
                    />
                    <TextInput 
                        onFocus={() => handleInputFocus('digit2')}
                        onBlur={() => handleInputBlur('digit2')}
                        style={[styles.otpButton, isFocused.digit2 ? styles.focusedInput : styles.notFocusedInput]}
                        keyboardType='numeric'
                        maxLength={1}
                        caretHidden={true}
                        clearTextOnFocus={true}
                    />
                    <TextInput 
                        onFocus={() => handleInputFocus('digit3')}
                        onBlur={() => handleInputBlur('digit3')}
                        style={[styles.otpButton, isFocused.digit3 ? styles.focusedInput : styles.notFocusedInput]}
                        keyboardType='numeric'
                        maxLength={1}
                        caretHidden={true}
                        clearTextOnFocus={true}
                    />
                    <TextInput 
                        onFocus={() => handleInputFocus('digit4')}
                        onBlur={() => handleInputBlur('digit4')}
                        style={[styles.otpButton, isFocused.digit4 ? styles.focusedInput : styles.notFocusedInput]}
                        keyboardType='numeric'
                        maxLength={1}
                        caretHidden={true}
                        clearTextOnFocus={true}
                    />
                </View>
                <View style={styles.resendBtnWrapper}>
                    <Text style={styles.resendText}>Resend Code &gt;</Text>
                </View>
                <View style={styles.verifyBtnWrapper}>
                    <TouchableOpacity style={styles.verifyBtn}>
                        <Text style={styles.verifyText}>Verify</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OTPScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        paddingBottom: 0
    },
    headerIcon: {
        color: '#151515'
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#151515'
    },
    svgWrapper: {
        height: 100,
    },
    content: {
        flex: 1,
        backgroundColor: '#5566ee',
        marginTop: -10,
        paddingHorizontal: 40,
        paddingTop: 20,
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white'
    },
    subTitle: {
        color: '#a2b2fd',
        textAlign: 'center',
        paddingVertical: 20,
        fontSize: 18,
        fontWeight: '600'
    },
    otpWrapper: {
        flexDirection: 'row',
        marginVertical: 10
    },
    otpButton: {
        width: 60,
        height: 60,
        borderRadius: 60,
        marginHorizontal: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    focusedInput: {
        backgroundColor: 'white',
        color: 'black'
    },
    notFocusedInput: {
        backgroundColor: '#7788ef',
        color: 'white'
    },
    resendBtnWrapper: {
        alignItems: 'center',
        marginVertical: 20
    },
    resendText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8a9af8',
        textTransform: 'uppercase'
    },
    verifyBtnWrapper: {
        alignItems: 'center',
        marginVertical: 10
    },
    verifyBtn: {
        backgroundColor: '#7788ef',
        paddingHorizontal: 30,
        paddingVertical: 20,
        width: '100%',
        alignItems: 'center',
        borderRadius: 10
    },
    verifyText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})