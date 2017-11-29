import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cmp-formulario',
  templateUrl: './cmp-formulario.component.html',
  styleUrls: ['./cmp-formulario.component.css']
})
export class CmpFormularioComponent implements OnInit {

  formulario: FormGroup;
  constructor(private fB: FormBuilder) { }

  ngOnInit() {
    this.formulario =this.fB.group({
        nombre: ['Maria', [Validators.required, this.esStark]],
        email: ['', [Validators.required, Validators.email]],
        password: ['']
  });
  }
  enviarForm(){
    console.log(this.formulario);

  }
  esStark(control: FormControl){
    const starks = ['rickon', 'bran',
                    'arya', 'robb', 'sansa'];
    if(starks.indexOf(control.value.toLowerCase()) != -1){
      return null;
    }
    return {
      nombreInvalido:true
    };
  }

}
