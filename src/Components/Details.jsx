import React from 'react';
import {View, StyleSheet,Text, SafeAreaView, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import tw from 'twrnc'
const Details = ({navigation}) => {
    return (
        <SafeAreaView style={tw` h-full`}>
            <View>
                <View style={tw`flex-row p-8 justify-between `}>
                    <View style={tw`bg-white  w-10 h-10 rounded-xl items-center justify-center shadow-xl  shadow-gray-400`}>
                        <Pressable onPress={()=>{navigation.navigate('Home')}}>
                        <Icon name="chevron-left" style={tw`font-bold text-xl`}/>
                        </Pressable>
                    </View>
                    <View style={tw`bg-white  w-10 h-10 rounded-xl items-center justify-center shadow-xl  shadow-gray-400`}>
                        <Icon name="shopping-cart" style={tw`font-bold text-xl`}/>
                    </View>
                </View>

                <View style={tw`items-center relative`}>
                    <View>
                        <Image style={tw`h-40 w-40 rounded-full`} source={{uri:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}}/>
                    </View>
                    <View style={tw`bg-white h-115 w-full mt-10 rounded-3xl shadow-xl shadow-gray-100`}>
                    <View>
                        <View style={tw`p-7 flex-row justify-between `}>
                            <Text style={tw`font-bold text-xl`}>
                                chicken salad with egg
                            </Text>
                            <View style={tw`flex-row justify-center items-center text-center`}>
                                    <Text style={tw`text-yellow-400 pr-1 font-bold text-center font-bold `}>$</Text>
                                    <Text style={tw`font-bold text-2xl`}>9.80</Text>
                            </View>
                        </View>
                        <View style={tw`p-5 flex-row justify-around`}>
                            <Text style={tw`border-2 p-2 border-yellow-400 rounded-xl text-center font-bold`}>2.6</Text>
                            <Text style={tw`border-2 p-2 border-yellow-400 rounded-xl text-center font-bold`}>150 calories</Text>
                            <Text style={tw`border-2 p-2 border-yellow-400 rounded-xl text-center font-bold`}>20-30 min</Text>
                        </View>

                        <View>
                            <Text style={tw`text-xl font-bold p-3`}>
                                Details
                            </Text>
                            <Text style={tw`text-gray-300 p-2`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iste architecto ratione? Quod, repudiandae? Ea provident quae, corrupti eius ex dolore natus eligendi accusantium libero explicabo asperiores officia enim ut.
                            </Text>
                        </View>
                        <View>
                            <Text style={tw`text-xl font-bold p-3`}>
                                Ingredients
                            </Text>
                            <Text style={tw`text-gray-300 p-2`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iste architecto ratione? Quod, repudiandae? Ea provident quae, corrupti eius ex dolore natus eligendi accusantium libero explicabo asperiores officia enim ut.
                            </Text>
                        </View>
                    </View>
                    </View>
                    <View style={tw`absolute z-5 top-45 flex-row items-center justify-center shadow-xl shadow-gray-200 rounded-full bg-yellow-400 p-1`}>
                        <Text style={tw`text-2xl font-bold p-1 mr-3 ml-2`}>
                            -
                        </Text>
                        <Text style={tw`text-2xl font-bold p-1`}>
                            1
                        </Text>
                        <Text style={tw`text-2xl font-bold p-1 ml-3 mr-2`}>
                            +
                        </Text>
                    </View>

                    
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Details;
