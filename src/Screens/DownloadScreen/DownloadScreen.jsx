import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React, { useState } from "react";
import {View, Text,StyleSheet, ScrollView,Image,StatusBar,TextInput, VirtualizedList,FlatList, SafeAreaView, TouchableOpacity} from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

Feather.loadFont();

const DownloadScreen =({route})=>{      
    return(
        
        <View style={styles.container}>   
        <SafeAreaView>
            <ScrollView>
            <View>
                <Image style={styles.bookimg} source={route.params.image}/>
                <Text style={styles.txtStyle}>    
                </Text>
            </View>
            <View style={styles.bookName}>                
                <Text style={styles.txtStyle}>{route.params.name}</Text>
                <Text style={styles.ratingTxt}>Rating {route.params.ratings}</Text>
                
             
            </View>
            <View style={styles.icon}>
                <Ionicons name="star" size={20} color="#F7D500" />
                <Ionicons  name="star" size={20} color="#F7D500" />
                <Ionicons name="star" size={20} color="#F7D500" />
                <Ionicons name="star" size={20} color="#F7D500" />
                <Ionicons name="star" size={20} color="#908F96" />
            </View>
            <Text style={{fontSize:20,fontWeight:"bold",position:'absolute',marginTop:460,alignSelf:"center"}}> About</Text>
            <View style={styles.dumytxt}>
                
                <Text style={styles.dumyTxt}> {route.params.about}</Text>
                
            </View>
            <View >
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnTxt}>Download</Text>
                </TouchableOpacity>
            </View>
            <Text style={{fontSize:20,fontWeight:"bold",
            position:'absolute',marginTop:740,alignSelf:"center", opacity:0.7}}> Leave A Comment </Text>
            <View style={styles.cmntBox}>
                <TextInput  style={{width:400}} multiline={true} ></TextInput>
            </View>
            <View>
                <TouchableOpacity style={{backgroundColor:"green",height:30,width:100,borderRadius:20,marginLeft:300,marginTop:10}}>
                     <Text style={{marginLeft:30,marginTop:5,fontWeight:"bold",color:"white",fontSize:16}}> Send</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:20}}>

            </View>
            <StatusBar/>
            </ScrollView>
            </SafeAreaView>
        </View>
    )
    }
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F5F5F5"
    },
    DownloadBook:{
        width: 420,
        height: 350,   
    },
    txtStyle:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:20,
        marginTop:100
    }, 
    bookName:{
        position:"absolute",
        marginTop:250,
        alignSelf:"center",
    },
    bookimg:{
        width:420,
        height:350,
    },
    ratingTxt:{
        fontSize:20,
        textAlign:"center",
        marginTop:20,
        
        
    },
    icon:{
       position:'absolute',
       marginTop:420,
        alignSelf:"center",
        flexDirection:'row'
    },
    dumyTxt:{
        textAlign:"center",
        marginTop:20

    },
    dumytxt:{
        width:400,
        height:200,
    },
    button:{
        backgroundColor:"green",
        height:40,
        width:400,
        alignSelf:"center",
        borderRadius:10,
    },
    btnTxt:{
        color:"white",
        alignSelf:"center",
        marginTop:10,
        fontWeight:"bold"
    },
    cmntBox:{
        borderWidth:1,
        height:200,
        width:400,
        alignSelf:"center",
        borderRadius:10,
        marginTop:70,
        opacity:0.7
        
    }
})
export default DownloadScreen;