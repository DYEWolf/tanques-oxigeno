  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http: HttpClient) {}

  getStates(): Observable<any> {
    return this.http.get("./assets/data/states.json");
  }

  getStateData(state):  Observable<any> {
    return this.http.get(`./assets/data/${state}.json`);
  }

}