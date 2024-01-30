import React, { useImperativeHandle } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    TouchableOpacity,
    BackHandler,
    findNodeHandle,
    Button,
  } from 'react-native';

const Perfil_jc= ({navigation}) =>{

  const handlePress=()=>{
    navigation.navigate('Home');
  };

    return (
        <SafeAreaView style={styles.fondo}>
          <ScrollView contentContainerStyle={styles.SVcontenedor} contentInsetAdjustmentBehavior='automatic'>
            <Text style={styles.encabezado}>Perfil</Text>
            <Image style={styles.fotoperfil} source={require('../imagenes/johncena.jpg')}></Image>
    
            <Text style={styles.info}>John Felix Anthony Cena</Text>
            <Text style={styles.info}>23 de abril de 1977 (edad 46 años)</Text>
            <Text style={styles.info}>Luchador profesional, actor y exrapero</Text>
            <Text style={styles.info}>1.85 m</Text>
            <Text style={styles.info}>16-time world champion</Text>

            <Button title='Regresar' onPress={handlePress}/>
           
          </ScrollView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    fondo:{
    },
    encabezado:{
      fontSize:36,
      fontWeight:'bold',
      padding:10,
      
    },
    SVcontenedor:{
      alignItems:'center',
    },
    fotoperfil:{
      width:200,
      height:220,
      margin:10,
      borderRadius:100,
    },
    info:{
      borderRadius:10,
      padding:15,
      marginTop:8,
      marginBottom:8,
      borderWidth:1,
      borderColor:'#2c2321',
      fontSize:15,
      fontWeight:'600',
      width:'55%',
      textAlign:'center',
      alignItems:'center'
    },
    botonContainer:{
     
    },
    button: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
      width:200,
  
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign:'center'
    },
  });
  export default Perfil_jc;