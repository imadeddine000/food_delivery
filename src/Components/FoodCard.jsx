import React from 'react';
import {View, StyleSheet,Pressable,Image,Text} from 'react-native';
import tw from 'twrnc'
const FoodCard = ({navigation}) => {
    return (
        <View>
            <Pressable onPress={()=>{navigation.navigate('Details')}}>
                    <View style={tw`p-5`}>
                        <View style={tw`bg-white p-2  shadow-2xl shadow-gray-300 rounded-2xl justify-center items-center`}>
                            <Image style={tw`w-25 h-25 rounded-full`} source={{uri:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'}} />
                            <View>
                                <Text style={tw`text-center p-2 text-lg font-bold`}>chicken Salad</Text>
                                <Text style={tw`text-gray-300`}>
                                    chicken salad with egg
                                </Text>
                                <Text style={tw`text-center p-1 text-red-900 font-bold`}>
                                    150 calories
                                </Text>
                                <View style={tw`flex-row justify-center items-center`}>
                                    <Text style={tw`text-yellow-400 pr-1 font-bold `}>$</Text>
                                    <Text style={tw`font-bold text-2xl`}>9.80</Text>
                                </View>
                            </View>
                        </View>
                        
                    </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({})

export default FoodCard;
