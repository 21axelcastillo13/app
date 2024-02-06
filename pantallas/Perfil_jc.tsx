import React, { useImperativeHandle,useState } from 'react';
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
  import Evaluacion from '../components/evaluacion/evaluacion';

const Perfil_jc= ({navigation}) =>{

  const handlePress=()=>{
    navigation.navigate('Home');
  };

  const [calificacion, setCalificacion]= useState(0);

  const handleCalificacionChanged=(valor:number)=>{
    if(calificacion==0.5 && valor==0.5){
      setCalificacion(0)
    }else if(calificacion<=1 && valor <=1){
      setCalificacion(1)
    }else if(calificacion==1.5 && valor==1.5){
      setCalificacion(2)
    }else if(calificacion==2.5 && valor==2.5){
      setCalificacion(3)
    }else if(calificacion==3.5 && valor==3.5){
      setCalificacion(4)
    }else if(calificacion==4.5 && valor==4.5){
      setCalificacion(5)
    }else{
      setCalificacion(valor)
    }
    console.log(valor)
  }

    return (
        <SafeAreaView style={styles.fondo}>
          <ScrollView contentContainerStyle={styles.SVcontenedor} contentInsetAdjustmentBehavior='automatic'>
            <Text style={styles.encabezado}>Perfil</Text>
            <Image style={styles.fotoperfil} source={require('../imagenes/johncena.jpg')}></Image>
            <Evaluacion
            calificacion={calificacion} onCalificacionChange={handleCalificacionChanged} 
            />
    
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