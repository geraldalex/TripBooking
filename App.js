
import React from 'react';
import { Image, TouchableOpacity} from 'react-native';
import {NavigationContainer, DefaultTheme} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {
   Onboarding,
  Home,
  DestinationDetail} from './src/screens/'

  import Tabs from "./src/navigation/tabs"
import { COLORS, icons, SIZES } from './src/constans';

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border:'trasparent',
    }
  }

  const Stack = createNativeStackNavigator();

  const App = () => {
return(
<NavigationContainer theme={theme}>
<Stack.Navigator
initialRouteName={'Onboarding'}
>
{/* Screens */}
<Stack.Screen
name="Onboarding"
component={Onboarding}
options={{
  title: null,
  headerStyle: {
    backgroundColor: COLORS.white
  },
  headerLeft: null,
  headerRight: () => (
    <TouchableOpacity
    style={{marginRight:SIZES.padding}}
    onPress={() => console.log("Pressed")}
    >
<Image
source={icons.barMenu}
resizeMode='contain'
style={{
  width:25,
  height:25
}}
/>

    </TouchableOpacity>
  )
}}
/>
{/* Tabs */}

<Stack.Screen
name="DestinationDetail"
component={DestinationDetail}
options={{headerShown:false}}
/>

<Stack.Screen
name='Home'
component={Tabs}
options={{
  title: null,
  headerStyle: {
    backgroundColor: COLORS.white
  },
//   headerLeft: ({onPress}) => (
//     <TouchableOpacity
//     style={{marginLeft:SIZES.padding}}
//     onPress={() =>onPress}
    
//     >
// <Image 
// source={icons.back}
// resizeMode='contain'
// style={{
//   width:25,
//   height:25
// }}
// />
//     </TouchableOpacity>
//   ),

headerRight: () => (
  <TouchableOpacity
  style={{marginRight: SIZES.padding}}
  onPress={() => console.log("Menu")}

  >

<Image
source={icons.menu}
resizeMode='contain'
style={{
  width:25,
  height:25
}}

/>
    </TouchableOpacity>
)
}}
/>
</Stack.Navigator>
</NavigationContainer>
)
  }


  export default () => {
    return <App/>;
  }