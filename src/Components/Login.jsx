import React from 'react';
import {View, StyleSheet,Text, ImageBackground, Pressable, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc'
const Login = ({navigation}) => {
    return (
           <SafeAreaView>
             <ImageBackground style={tw`w-full h-70`} source={{uri:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'}}>
                <View style={tw`w-full items-center`}>
                    <Text style={tw`font-bold text-3xl text-white absolute top-50`}>
                        iek Food
                    </Text>
                    <Text style={tw`font-bold text-sm p-2 text-gray-100 absolute top-55`}>
                        Delivery App
                    </Text>
                </View>    
            </ImageBackground> 

            <View>
                <View>
                    <View style={tw`flex-row bg-white shadow-xl shadow-gray-100 rounded-xl items-center m-5 justify-around `}>
                        <Pressable style={tw`border-b-2 border-yellow-400 p-3`}>
                            <Text style={tw` text-xl `}>
                                Login
                            </Text>
                        </Pressable>
                        <Pressable style={tw`p-2`}>
                            <Text style={tw` text-xl `}>
                                Signup
                            </Text>
                        </Pressable>
                    </View>

                    <View>
                        <View>
                            <View style={tw`border-b-2 m-2 border-gray-300`}>
                            <Text style={tw`font-bold  text-gray-300 p-1`}>
                                Email Address
                            </Text>
                            <View style={tw`flex flex-row items-center justify-between`}>
                            <TextInput style={tw`p-1 font-bold`} placeholder='imadeddinekebour@gmail.com' textContentType='emailAddress'/>
                            <Icon name="check" style={tw`text-xl`}/>
                            </View>
                            </View>
                            <View style={tw`border-b-2 m-2 border-gray-300`}>
                            <Text style={tw`font-bold  text-gray-300 p-1`}>
                                Password
                            </Text>
                            <View style={tw`flex flex-row items-center justify-between`}>
                            <TextInput style={tw`p-1 font-bold`} textContentType='password' placeholder='password'/>
                            <Icon name="check" style={tw`text-xl`}/>
                            </View>
                            </View>
                        </View>
                        <Text style={tw`text-red-900 text-right p-1 mr-2 font-bold`}>
                            Forgot password?
                        </Text>
                    </View>

                    <View style={tw`items-center p-2`}>
                        <View style={tw`w-full p-2 `}>
                            <Pressable style={tw`rounded-xl  shadow-lg shadow-yellow-600 bg-yellow-400 p-4`}
                                onPress={()=>{navigation.navigate('Home')}}
                            >
                                <Text style={tw`text-xl text-center font-bold `}>Login</Text>
                            </Pressable>
                        </View> 
                        <View>
                            <View style={tw`flex-row`}>
                                <Text style={tw`font-bold p-1`}>Don't have an account?</Text>
                                <Text style={tw`font-bold text-yellow-400 p-1`}>Signup</Text>
                            </View>
                        </View>
                    </View>
                </View>    
            </View>  
           </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Login;
