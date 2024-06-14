import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../SplashScreen/Splash';
import Home from '../HomeScreen/Home';
import DownloadScreen from '../DownloadScreen/DownloadScreen';
const Stack = createNativeStackNavigator();
 function  Navigation() {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DownloadScreen" component={DownloadScreen} />
        </Stack.Navigator>  
    </NavigationContainer>
    );
  }
export default Navigation;
