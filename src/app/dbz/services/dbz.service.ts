import { Injectable } from "@angular/core";
import { Person } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
    
    private _personages: Person []= [
        {
          name:'Vegeta',
          power:10000
        },
        {
          name:'Goku',
          power:75000
        }
      ];

    get personages (): Person[]{
        return [...this._personages];
      }
    constructor (){}
      addPerson (person: Person){
        this._personages.push(person);
      }


}