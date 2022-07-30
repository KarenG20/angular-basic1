import { Component, Input } from '@angular/core';
import { Person } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personages',
  templateUrl: './personages.component.html'
})
export class PersonagesComponent {
  
  get personages (){
    return this.dbzService.personages;
  }
  //@Input() personages :Person []=[];
  constructor (private dbzService: DbzService){}
 
}
