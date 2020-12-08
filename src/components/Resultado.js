import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';



class Resultado extends Component {
    constructor(props){
        super(props)
    }

    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;   
        
        
        

        console.log(imagenes);

    }

    render() { 
       const {imagenes} = this.props
        return ( 
               <>
                    <div className = "col-12 p-5 row">
                        
                        {
                            imagenes.map(c => (
                                <Imagen 
                                key = {c.id}
                                imagen = {c}
                                />
                            ) )
                        }
                                

                        </div>
                        <Paginacion
                           adelante = {this.props.adelante}
                        regresar = {this.props.regresar} 
                        />
                </>
          
           

         );
    }
}
 
export default Resultado;