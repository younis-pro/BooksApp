import React, { useEffect, useState } from "react";
import {View, Text,StyleSheet, ScrollView,Image,StatusBar,TextInput, VirtualizedList,FlatList, SafeAreaView, TouchableOpacity} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Feather from 'react-native-vector-icons/Feather';
import NewBooks from "../../Component/NewBooks";
import MostPopularBooks from "../../Component/PopularBooks";


Feather.loadFont();
const Home =({navigation})=>{
    const [images,setImages]=React.useState([
        require('../../../assets/images/lord.jpg'),
        require('../../../assets/images/images2.jpg'),
        require('../../../assets/images/images3.jpg'),
    ]);
      const renderItem=({item})=>{
        return(
            <View style={styles.booksWrap}>
                <TouchableOpacity onPress={()=>{navigation.navigate("DownloadScreen",item)}}
                >
                   
                    <Image style={{width:100,height:100,borderRadius:20,}} source={item.image}/>
                    <View >
                    <Text style={{textAlign:'center',}}>{item.name}</Text>


                    </View>
                </TouchableOpacity>
            </View>
        )
      }
    return(
        <View style={styles.container}>
            <SafeAreaView>
            <ScrollView 
            nestedScrollEnabled={true}
         contentInsetAdjustmentBehavior="scrollableAxes"
            showsVerticalScrollIndicator={false}>
                
            <View style={styles.headerImages}>
                <SliderBox 
                images={images}
                sliderBoxHeight={400}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"  
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
            />
            </View>
            <View style={styles.search}>
               <TextInput placeholder="Search" style={styles.searchbar}></TextInput>
               <Feather name="search" size={20} style={styles.searchIcon}/>
            </View>
              {/* Most Popular Books */}
            <View>
                <Text style={styles.popular} >Most Popular</Text>
                   
            </View>
            <FlatList
            data={(MostPopularBooks , NewBooks)}
            numColumns={3}
            renderItem={renderItem}
            keyExtractor={item=>item.id +""}
            />
            <View>
            <View >   
                        <Text style={{...styles.popular,}}>NewBooks</Text> 
                        <FlatList
            data={ NewBooks}
            numColumns={3}
            renderItem={renderItem}
            keyExtractor={item=>item.id +""}
            />
                    </View>
            </View>
            <StatusBar/>
            </ScrollView></SafeAreaView>
        </View>
    );
      }
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F5F5F5"
        
    },
    headerImages:{
        width: 420,
        height: 290,
        backgroundColor: '#2B5961',
        borderRadius: 20,
    },
    searchbar:{
        backgroundColor:"white",
        borderRadius:10,
        textAlign:"center",
        height:40,
        opacity:0.7,
        width:400,
        
    },
    search:{
        position:'absolute',
        alignSelf:"center",
        marginTop:120,
        

    },
    searchIcon:{
        marginTop:10,
        position:"absolute",
        marginLeft:5,
        opacity:0.7
    },
    
   
    text:{
        fontStyle:"italic",fontSize:12
    },
    popular:{
        fontSize:20,
        marginTop:20,
        fontWeight:"bold",
        marginLeft:20
    },
    booksWrap:{
        marginTop:20,
        flexDirection:"row",
        paddingStart:20,
        paddingLeft:20,
        padding:10,
        
        
        
       
        
    }
})
export default Home;