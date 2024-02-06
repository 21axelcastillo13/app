/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useImperativeHandle, useState } from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Perfil_VG from './pantallas/perfil_vg';
import Inicio from './pantallas/inicio';
import Perfil_jc from './pantallas/Perfil_jc';
import Evaluacion from './components/evaluacion/evaluacion';


const Stack=createNativeStackNavigator();

function App(): React.JSX.Element {

 return <NavigationContainer>
  

  <Stack.Navigator>
    <Stack.Screen name='Home' component={Inicio}/>
    <Stack.Screen name='PerfilP' component={Perfil_VG}/>
    <Stack.Screen name='John Cena' component={Perfil_jc}/>
      
  </Stack.Navigator>
 </NavigationContainer>;
}


export default App;
