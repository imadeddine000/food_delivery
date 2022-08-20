import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
const Appbar = () => {
    return (
        <View style={tw`justify-center items-center`}>
            <View style={tw`bg-white flex-row justify-around absolute w-full top-20 p-1`}>
                <Pressable >
                    <Icon name='home' style={tw`text-3xl text-yellow-400`}/>
                </Pressable>
                <Pressable>
                    <Icon name='book' style={tw`text-3xl`}/>
                </Pressable>
                <Pressable>
                    <Feather name='bookmark' style={tw`text-3xl`}/>
                </Pressable>
                <Pressable>
                    <Ionicons name='notifications-outline' style={tw`text-3xl`}/>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Appbar;
