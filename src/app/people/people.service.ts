import { Injectable } from '@angular/core';

import { Person } from './person';
import { PersonSearchCriteria } from './person-search-criteria';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private static firstNames: string[] = [
    "Charlie",
    "Sophie",
    "Jace",
    "Jamiya",
    "Ross",
    "Mikaela",
    "Braedon",
    "Liliana",
    "Tyrone",
    "Olive",
    "Santiago",
    "Parker",
    "Robert",
    "Matilda",
    "Jonathon",
    "Tanya",
    "Brooks",
    "Camila",
    "Lamont",
    "Ashley"
  ];

  private static lastNames: string[] = [
    "Franklin",
    "Thompson",
    "Newton",
    "Park",
    "Klein",
    "Copeland",
    "Cameron",
    "Salazar",
    "Raymond",
    "Gutierrez",
    "Holloway",
    "Taylor",
    "Mann",
    "Young",
    "Tran",
    "Davenport",
    "Berger",
    "Butler",
    "Stein",
    "Russo"
  ];

  private people: Person[] = [];
  private searchResultPeople: Person[] = [];

  constructor() {
    this.populatePeople();
  }

  getPeople(criteria: PersonSearchCriteria): Observable<Person[]> {
    this.populateSearchResults(criteria.searchTerm);
    let startIdx = criteria.pageIdx * criteria.pageSize;
    let endIdx = (criteria.pageIdx + 1) * criteria.pageSize;
    return of(
      this.searchResultPeople.slice(
        Math.max(startIdx, 0),
        Math.min(endIdx, this.searchResultPeople.length)
      )
    );
  }


  private populatePeople(): void {
    for (let i = 0; i < 400; i++) {
      let p: Person = {
        _id: i.toString(),
        firstName: PeopleService.firstNames[this.getRandomIndex(PeopleService.firstNames.length)],
        lastName: PeopleService.lastNames[this.getRandomIndex(PeopleService.lastNames.length)],
        fullName: "",
        height: 120 + Math.floor(this.getRandomIndex(80)),
        age: 5 + Math.floor(this.getRandomIndex(100))
      }
      p.fullName = p.firstName + " " + p.lastName;
      this.people.push(p);
    }
    return;
  }

  private populateSearchResults(query: string): void {
    if (query === "") {
      this.searchResultPeople = this.people.slice();
      return;
    }
    let regex = new RegExp(query);
    this.searchResultPeople = this.people.filter(
      function (element, index, array) {
        return regex.test(element.fullName);
      })
  }

  private getRandomIndex(nbr: number): number {
    return Math.floor(Math.random() * nbr);
  }

  getComparator(property: string) {
    let order: number = 1;
    if (property[0] === '-') {
      order = -1;
      property = property.substring(1);
    }
    return function (a: any, b: any) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * order;
    };
  }


}
