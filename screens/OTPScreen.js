import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import Svg, { Path } from 'react-native-svg'

const OTPScreen = () => {
    const navigation = useNavigation()
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
                <Text>Confirmation</Text>
                <Text>Please type the verification code send to </Text>
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
        padding: 20
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
        height: 100
    },
    content: {
        flex: 1,
        backgroundColor: '#5566ee',
        marginTop: -10,
        paddingHorizontal: 40,
        paddingTop: 20        
    }
})