import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let date = new Date();
    date.setFullYear(2023);
    const users = [
      { id: 1, name: 'Guillem', password:'Guillem123', dateExpire: date, enable: true },
      { id: 2, name: 'Marc', password:'Marc123', dateExpire: date, enable: true },
      { id: 3, name: 'Gerard', password:'Gerard123', dateExpire: date, enable: false }
    ];
    return {users};
  }


}
