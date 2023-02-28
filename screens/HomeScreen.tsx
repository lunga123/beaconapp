import React from 'react';
import { StyleSheet,Button,Image, ScrollView, TouchableOpacity,  } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getBackgroundColorAsync } from 'expo-system-ui';

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"HomeScreen">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button title="Go to info"onPress={() => navigation.navigate('InfoScreen')}/>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/HomeScreen.tsx" />
   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:3 ,
    alignItems: "center",
    justifyContent: "center",
    height:3,
  
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 40,
    height: 1,
    width: "80%",
  },
  Button: {
    marginRight: 5,
    height: 1,
    width: "80%",
  },  
});
