import React from 'react';
import {View, StyleSheet,Text, Image, TextInput, Pressable, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo'
import tw from 'twrnc'
import  IconSearch  from 'react-native-vector-icons/Octicons';
import IconSettings from 'react-native-vector-icons/Feather'
import FoodCard from './FoodCard';
import Appbar from './Appbar';
const Home = ({navigation}) => {
  
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View >
                <View style={tw`flex-row justify-between p-2 items-center`}>
                    <View style={tw`bg-white shadow w-10 h-10 rounded-2xl justify-center items-center`}>
                    <Icon name="menu" style={tw`text-2xl`}/>
                    </View>
                    <View style={tw`bg-yellow-400 w-9 items-center justify-center rounded-lg h-9`} >
                        <Image style={tw`w-8 h-8 rounded-lg`} source={{uri:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'}}/>
                    </View>
                </View>
            </View>
            <View style={tw`p-4`}>
                <View style={tw`p-2`}>
                    <Text style={tw`text-3xl`}>
                        Let's eat
                    </Text>
                    <Text style={tw`text-3xl font-bold`}>
                        Quality food
                    </Text>
                </View>
            </View>
            <View>
                <View style={tw`p-4 flex-row`}>
                    <View style={tw`bg-gray-50 grow rounded-xl flex-row items-center p-2`}>
                        <IconSearch name='search' style={tw`text-xl pr-4 font-bold`}/>
                        <TextInput placeholder='Search food...' style={tw`text-lg`}/>
                    </View>
                    <View style={tw`bg-yellow-400 ml-4 w-12 items-center justify-center rounded-xl `}>
                        <IconSettings name='settings' style={tw`font-bold text-xl`}/>
                    </View>
                </View>
            </View>
            <View style={tw`p-4`}>
                <View style={tw`flex-row`}>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                    <Pressable style={tw`bg-yellow-400  flex-row p-2 rounded-2xl items-center shadow-xl shadow-yellow-600`}>
                        <Image style={tw`w-7 h-7 rounded-lg`} source={{uri:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'}}/>
                        <Text style={tw`font-bold p-2`}>
                            Fast food
                        </Text>
                    </Pressable>

                    <Pressable style={tw`border-2 border-yellow-400 ml-3 flex-row p-2 rounded-2xl items-center `}>
                        <Image style={tw`w-7 h-7 rounded-lg`} source={{uri:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'}}/>
                        <Text style={tw`font-bold p-2`}>
                            Fast food
                        </Text>
                    </Pressable>

                    <Pressable style={tw`border-2 border-yellow-400 ml-3 flex-row p-2 rounded-2xl items-center `}>
                        <Image style={tw`w-7 h-7 rounded-lg`} source={{uri:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'}}/>
                        <Text style={tw`font-bold p-2`}>
                            Fast food
                        </Text>
                    </Pressable>

                    <Pressable style={tw`border-2 border-yellow-400 ml-3 flex-row p-2 rounded-2xl items-center `}>
                        <Image style={tw`w-7 h-7 rounded-lg`} source={{uri:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'}}/>
                        <Text style={tw`font-bold p-2`}>
                            Fast food
                        </Text>
                    </Pressable>

                    <Pressable style={tw`border-2 border-yellow-400 ml-3 flex-row p-2 rounded-2xl items-center `}>
                        <Image style={tw`w-7 h-7 rounded-lg`} source={{uri:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'}}/>
                        <Text style={tw`font-bold p-2`}>
                            Fast food
                        </Text>
                    </Pressable>
                    </ScrollView>
                </View>

            </View>

            <View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}

                >
                    <FoodCard navigation={navigation}/>
                    <FoodCard navigation={navigation}/>
                    <FoodCard navigation={navigation}/>
                    <FoodCard navigation={navigation}/>
                    <FoodCard navigation={navigation}/>
                    <FoodCard navigation={navigation}/>

                </ScrollView>
            </View>
            <Appbar/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Home;
