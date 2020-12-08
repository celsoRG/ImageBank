import React, {Component} from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends  Component {

  state = {
    termino: '',
    imagenes: [],
    pagina : ''
  }

  
  regresar = () =>{
    //Se lee como se encuentra la pagina actual
    let pagina = this.state.pagina;

    //si la pagina ya es uno  no seguir atras
    if(pagina === 1) return null;

    //Restar 1 pagina mas a la pagina actual
     pagina--;

    //Actualizar el cambio de estado
    this.setState({
      pagina
    }, () =>{
      this.consultarApi();
    });
    
   

  }

  adelante = () => {
    //Se lee como se encuentra la pagina actual
    let pagina = this.state.pagina;

    //si la pagina ya es tres  no seguir adelante
    if(pagina === 3) return null;

    //Agregarle una pagina mas a la pagina actual
     pagina++;

    //Actualizar el cambio de estado
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
    });
    

  }

  consultarApi = ()=>{
    const termino = this.state.termino;
    const pagina = this.state.pagina;

    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`;
    
    fetch(url)
    .then(respuesta => respuesta.json() )
    .then(resultado => this.setState({imagenes: resultado.hits}))
  }

  //Funcio'n que recibe datos enviados por componentes hijos yse ejecuta func
  //busqueda
  datosBusqueda = (termino) =>{
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    })
  }

  render(){
    return (
      <div className="App container">
        <div className = "jumbotron">
          <p className ="lead text-center">Busca un producto</p>
          <Buscador
           datosBusqueda = {this.datosBusqueda}
          />
        </div>
     
        <div className="row justify-content-center">
            <Resultado 
                 imagenes = {this.state.imagenes}
                 adelante = {this.adelante}
                 regresar = {this.regresar} 
            />
            
        </div>
        
      </div>
    );
  }
}


export default App;
