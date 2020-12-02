import React, { Component } from 'react';


class Buscador extends Component {
    //funci[on que permite leer valores de inputs
    //mediante react y se indica donde se va utilizar 
    busquedaRef = React.createRef();

    handleGetData = (e) => {
        e.preventDefault();
        //se extrae el contenido del input o bien se toma el valor del input
        //console.log(this.busquedaRef.current.value);
        const termino = this.busquedaRef.current.value;

        //se envia el valor al componente padre
        this.props.datosBusqueda(termino);

    }
    render() { 
        return ( //El onSubmit para atrapar el evento del click en el boto'n buscar y que debe de hacer
            <form onSubmit = {this.handleGetData}> 
                <div className= "row">
            
                    <div className= "form-group col-md-8">
                            <input //Se indica que aqui se utiliza la funcio'n ref
                                ref = {this.busquedaRef} 
                                type="text" 
                                className="form-control form-control-lg" 
                                placeholder ="Busca tu imagen. Ejemplo: Futbol"
                            />     
                    </div>

                    <div className= "form-group col-md-4">
                            <input 
                                type="submit" 
                                className="btn btn-lg btn-danger btn-block" 
                                value= "Buscar..."
                            />     
                    </div>

                </div>
            </form>
         );
    }
}
 
export default Buscador;