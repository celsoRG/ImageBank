import React, {Component} from 'react';
import Buscador from './components/Buscador'

class App extends  Component {

  //Funcio'n que recibe datos enviados por componentes hijos
  datosBusqueda = (termino) =>{
    console.log(termino);
  }

  render(){
    return (
      <div className="App container">
        <div className = "jumbotron">
          <p className ="lead text-center">Buscador de imagenes</p>
          <Buscador
           datosBusqueda = {this.datosBusqueda}
          />
        </div>
      
      </div>
    );
  }
}


export default App;
