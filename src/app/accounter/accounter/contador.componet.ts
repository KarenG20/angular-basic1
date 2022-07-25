import {Component}from '@angular/core'

@Component({
    selector:'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="accumulate(base)"> +{{base}}</button>
    <span> {{number}} </span>
    <button (click)="accumulate(-base)">-{{base}}</button>

    `
})
export class ContadorComponent {

    title: string = 'Contador APP';
    number: number =10;
    base: number = 5;
    /**sum (){
      this.number +=1
    }
  
    subtract (){
      this.number =1
    }*/
    accumulate (value: number){
      this.number += value;
    }
     power (value: number){
      this.number*=value
    }
}