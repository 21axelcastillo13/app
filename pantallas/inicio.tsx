import React,{useState} from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Inicio =({navigation}) =>{

    const handlePress=()=>{
        navigation.navigate('PerfilP');
    };
    const handlePress2=()=>{
        navigation.navigate('John Cena');
    };
    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.contenedor}>
              <Text style={styles.encabezado}>Bienvenido</Text>
              <Image style={styles.ini} source={require('../imagenes/inicio.png')}></Image>
              <View style={styles.botones}>
                <Button title='Ir a mi perfil' onPress={handlePress}/>
                <Button title='Perfil John Cena' onPress={handlePress2}/>
              </View>
            </ScrollView>
        </SafeAreaView>

    );

};
const styles=StyleSheet.create({
    
    contenedor:{
        alignItems:'center',
        
    },
    encabezado:{
        fontSize:36,
        fontWeight:'bold',
        color:'blue',
    },
    botones:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    ini:{
        width:300,
        height:220,
        margin:10,
        borderRadius:10,
      },
});
export default Inicio;