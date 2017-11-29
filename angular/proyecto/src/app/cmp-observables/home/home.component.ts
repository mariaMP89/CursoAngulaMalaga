import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import {Subscription} from 'rxjs/Subscription';

import 'rxjs/Rx';
import { observeOn } from 'rxjs/operator/observeOn';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  subscription:Subscription;
  subscription2:Subscription;
  constructor() { }

  ngOnInit() {
    const misNumeros = Observable.interval(1000);
    this.subscription = misNumeros.subscribe(
      (num) => console.log(num)
    );

    const miObservable = Observable.create((observer: Observer<string>) =>{ 
      setTimeout(() =>{
        observer.next('Hola')
      }, 2000);
      setTimeout(() =>{
        observer.next('Adios')
      }, 4000);
      setTimeout(() =>{
        observer.error('No funciona!')
      }, 6000);
      
    });
  
    this.subscription2 = miObservable.subscribe(
      (dato)=> console.log(dato),
      ( error)=> console.log('Horror Error'),
     
    );
  }
ngOnDestroy(){
  this.subscription.unsubscribe();
  this.subscription2.unsubscribe();
}
}
