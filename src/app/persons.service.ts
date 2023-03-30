import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/person';



@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) { }

  getPersons() {
    return this.http.get<Person[]>(
      'https://billowing-moon-4057.fly.dev/api/persons'
    );
  }
}
