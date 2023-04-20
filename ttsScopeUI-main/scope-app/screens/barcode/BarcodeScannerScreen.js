import { StyleSheet,SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import HeaderBar from "../../components/HeaderBar";

export default function BarcodeScannerScreen(props) {

  const scopeDetails = () => {
      props.navigation.navigate("ScopeDetailsScreen")
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <TouchableOpacity onPress={scopeDetails}>
      <Image source={require('../../assets/bar_code.png')} style={styles.image}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
  },
  image:{
    position: 'absolute',
    height: 100,
    width: 300,
    alignSelf: "center",
    marginTop:200
  }
})