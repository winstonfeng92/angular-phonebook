import { Component } from '@angular/core';
import { Person } from 'src/person';
//import { PERSONS } from 'src/person';
import { PersonsService } from '../persons.service';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  // persons = [...PERSONS]
  persons: Person[] = []; //somehow I can incorporate the use of async pipe instead of subscribe?



  constructor(
    private personsService: PersonsService
  ) {}

  ngOnInit() {
    this.personsService.getPersons().subscribe(data => {
      this.persons = data;
      console.log(data)
    });
  }
}
