import { Component} from '@angular/core';
import { Person } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent  {
  
 
  new :Person ={
    name:'Maestro Roshi',
    power: 7890
  }


  constructor (){}
  
}
