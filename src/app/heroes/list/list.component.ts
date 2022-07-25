import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})

export class ListComponent  {

 heroes: string[] =['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroClear: string ='';
 clearHero (){
    this.heroClear=this.heroes.shift() || '';
   
 }
}
