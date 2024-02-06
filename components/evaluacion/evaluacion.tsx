import React from "react";
import { StyleSheet, View } from "react-native";
import { SvgUri } from "react-native-svg";
import StarEmpty from "./starEmpty";
import StarFill from "./startFill";
import starMedium from "./starMedium";
import StarMedium from "./starMedium";

export type EvalProps={
    calificacion:number;
    onCalificacionChange: any;
};
export type StarProp={
    posicion:number;
    onClick: any;
};

const Evaluacion=(props:EvalProps)=>{

    const handleOnClick=(posicion:number)=>{
        props.onCalificacionChange(posicion+0.5);
    }
    return <View style={style.contenedor}>
    {[0, 1, 2, 3, 4].map((posicion) => (
      <React.Fragment key={posicion}>
        {props.calificacion < posicion + 0.5 && (
          <StarEmpty onClick={() => handleOnClick(posicion)} posicion={posicion} />
        )}
        {props.calificacion >= posicion + 0.5 && props.calificacion < posicion + 1 && (
          <StarMedium onClick={() => handleOnClick(posicion)} posicion={posicion} />
        )}
        {props.calificacion >= posicion + 1 && (
          <StarFill onClick={() => handleOnClick(posicion)} posicion={posicion} />
        )}
      </React.Fragment>
    ))}
  </View>
}; 

const style=StyleSheet.create({
   contenedor:{
    display:'flex',
    flexDirection:'row',
   }
})
export default Evaluacion;