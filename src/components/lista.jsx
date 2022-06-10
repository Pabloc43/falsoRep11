import React from 'react';
import Tarea from './tarea'

function List({props}){
    console.log(props)
    return (
        <>
            {props.map(function(person){
                const {id, nombre, descripcion, imagen} = person;
                return(
                    <Tarea nombre={nombre} imagen={imagen} descripcion={descripcion} key={id}/>
                )
            })}
        </>
    )
}
    
export default List;