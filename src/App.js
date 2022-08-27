import React from "react";
import { FlatList, SafeAreaView, TextInput, View, Text, StyleSheet } from "react-native";
import products_data from './Products.json'
import ProductCard from './components/ProductCard';
import { Colors } from "react-native/Libraries/NewAppScreen";

function App(){

  return(
  <SafeAreaView style={styles.container}>

    <Text style={styles.headerText}>OBTSTORE</Text>
    <TextInput style={styles.input} placeholder="  Ara.."/>

      <FlatList
      data = {products_data}
      numColumns={2} 
      renderItem = {({item}) => <ProductCard pinfo = {item}/> }  
      />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
    margin:10,
  },
  headerText:{
    fontStyle:'bold',
    fontWeight: '700',
    color:'purple',
    fontSize: 50,

  },
  input:{

    backgroundColor: '#eceff1',
    borderRadius: 10,
  },

})

export default App;