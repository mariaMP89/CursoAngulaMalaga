import React, { Component } from 'react';
class Botones extends Component {
    constructor() {
        super();
        
  

    render(){
        return (
            <div>
               
                <button type="button" onClick={() => this.props.onHandleChange()}>Añadir</button>
            </div>

        );
    }
}
export default Botones;