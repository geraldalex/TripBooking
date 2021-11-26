import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, images, SIZES } from '../constans'
import { useFonts } from 'expo-font'

const Onboarding = ({navigation}) => {
   
        const [loaded] = useFonts({
          
          
          "Roboto-Bold": require('../../src/assets/fonts/Roboto-Bold.ttf'),
          "Roboto-Black": require('../../src/assets/fonts/Roboto-Black.ttf'),
          "Roboto-Regular": require('../../src/assets/fonts/Roboto-Regular.ttf'),
         
        });
        
        if (!loaded) {
          return null;
        }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
<Image
source={images.onboardingImage}
resizeMode="contain"
style={{
    width: "100%",
    height: "100%"
}}
/>

            </View>


            <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                <View style={{alignItems:'center', marginHorizontal: SIZES.padding}}>
                    <Text style={{...FONTS.h2}}>Digital Ticket</Text>
                    <Text style={{color:COLORS.gray, marginTop:SIZES.padding, textAlign:'center', ...FONTS.body3}}>Easy solution to buy tickets for your travel, business trips, transportation, lodging and culinary.</Text>
                </View>
                <TouchableOpacity
                style={[styles.shadow, {marginTop:SIZES.padding*2, width:'70%',height:50, alignItems:'center', justifyContent: 'center' }]}
                onPress={() => navigation.navigate("Home")}
                >
<LinearGradient
style={{
height:'100%',
width:'100%',
alignItems:'center',
justifyContent:'center',
borderRadius:15
}}
colors={['#46aeff', '#5884ff']}
start={{x:0,y:0}}
end={{x:1, y:1}}
>
<Text style={{color:COLORS.white, ...FONTS.h3}}>Start !</Text>
</LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:COLORS.white
    },
    shadow: {
        
        borderRadius: 15,
        
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity:0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
