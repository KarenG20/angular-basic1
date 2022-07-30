import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Person } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent  {

  @Input () new: Person ={
    name: '',
    power:0
  }
//  @Output() onNewPerson: EventEmitter <Person> = new EventEmitter();
constructor (private dbzService: DbzService){}
 add( ){
  if (this.new.name.trim().length === 0){
    return;
  }
  console.log (this.new)
  //this.onNewPerson.emit (this.new);
  this.dbzService.addPerson(this.new);

   this.new = {
    name:'',
    power: 0

   }
 }


}
