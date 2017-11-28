import React, { Component } from 'react';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            conceptos: [
                { nombre: 'luz', cantidad: -25 },
                { nombre: 'quiniela', cantidad: 45 }
            ],
            form:[
                {nombre:'', cantidad:0}
            ],
            filtro:''
            

        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.addConcepto = this.addConcepto.bind(this);
        this.searchConcepto = this.searchConcepto.bind(this);

    }
    
    onHandleChange(e){
        if (e.target.name === "concepto"){
            this.setState({
            form:{
                nombre:e.target.value, cantidad:this.state.form.cantidad
            }});
        }
        else{
            this.setState({
            form:{
                cantidad:e.target.value, nombre:this.state.form.nombre
            }});
        }
           
    }
    addConcepto(){
       let nuevoConcepto={
        nombre:this.state.form.nombre,
        cantidad:this.state.form.cantidad
       }
       
        let nuevosConceptos= this.state.conceptos.concat([nuevoConcepto]);
        this.setState({
            conceptos: nuevosConceptos,
            form:{
                nombre:'',
                cantidad:0
            }
        })
    }
    searchConcepto(e){
        this.setState({
        filtro:e.target.value
    });
    }

    render() {
        let total=0;
        let filas = this.state.conceptos.map((concepto) => {
            if (concepto.nombre.includes(this.state.filtro)){
               total += parseInt(concepto.cantidad);
                return (
                    <tr>
                        <td>{concepto.nombre}</td>
                        <td>{concepto.cantidad}</td>
                    </tr>)
            }
        });

       
        
        return (
            <div>
                <h1>Gastos e Ingresos</h1>
                <br/>
                 <h2>Buscador</h2>
                    <input name= "buscador" type="text" 
                    onChange={this.searchConcepto} value={this.state.filtro}
                    placeholder="Ingrese el concepto ... "/>
                <br/>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <br/>
                    <tbody>
                        {filas}
                    </tbody>
                    <br/>
                </table>
                <p>Total:{total}</p>
                 <h2>Nuevo concepto</h2>
                    <input name= "concepto" type="text" 
                     onChange={this.onHandleChange} value={this.state.form.concepto} 
                     placeholder="Ingrese aquí el concepto"/>
                <br/>
                 <h2>Nueva Cantidad</h2>
                    <input name= "cantidad" type="number" 
                    onChange={this.onHandleChange} value={this.state.form.cantidad}/>
                <br/>
                <br/>
                <button type="button" onClick={this.addConcepto}>Añadir</button>
                <br/>

            </div>
        );
    }
}
export default Main;
