import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//const MiComponente=() =>
//(<h1>FUNCIONA</h1>);//como va entre parentesis no hace falta poner el return

class MiComponente extends Component{
    render(){
        return(
            (<h1>FUNCIONA</h1>) 
        );
    }
}
ReactDOM.render(<MiComponente />,
     document.getElementById('app'));