import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OTPScreen from './screens/OTPScreen';
import PhoneNumScreen from './screens/PhoneNumScreen';
import ChatsListScreen from './screens/ChatsListScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Phone" component={PhoneNumScreen} />
            <Stack.Screen name="OTP" component={OTPScreen} />
            <Stack.Screen name="Chats" component={ChatsListScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})