import React from "react";
import {View,Text, StyleSheet,Image} from "react-native";

const Splash =(props)=>{
    setTimeout(() => {
        props.navigation.replace('Home')
    }, 3000);
    return(
        <View style={styles.container}>
            <View>
                
                <Image style={styles.img} source={require('../../../assets/splashLogo.png')}>
                    
                </Image>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,

    },
    img:{
        width:400,
        height:300,
        alignSelf:"center",
    }

})
export default Splash;