import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { TouchableOpacity,Alert, TextInput, StyleSheet,Button ,ViewStyle,Image, SafeAreaView,Text, requireNativeComponent } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import {  View,} from "../components/Themed";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


export default function AddAlrmScreen () {
  
  return (
   
    <SafeAreaView>
    
      <View>
      
      <Text style={styles.title}>Login</Text>
      </View>
       <View/>
        <View style={{padding:20,}}>
         <TextInput
          placeholder='username'
          style={styles.container}
      
          />
          <View>
          <FontAwesome name="user" size={20}/>
          </View>
          
          <TextInput
          
          placeholder='password'
          style={styles.container}
          />
          <Text style={styles.forget}>Forget password</Text>
          <View style={styles.fixToButton}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
        </View>
        </View>
    </SafeAreaView>
      
);
}



  const styles = StyleSheet.create({
    container: {
      borderWidth:1,
      padding:10,
      fontSize:16,
      marginTop:20,
      borderRadius:50,
      textAlign:'center'
      

    },
    title: {
      fontSize: 45,
      fontWeight: "bold",
      
    },
    forget: {
      marginTop: 10,
      textAlign: "right",
      fontSize:16,
      color:"Mariner",
      
    },
    fixToButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20,
    
   
    } 
  });