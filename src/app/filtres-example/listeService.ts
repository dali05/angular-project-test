import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  constructor(private http: HttpClient) { }

  getListe1() {
    return this.http.get<any>('assets/list1.json')
      .toPromise()
      .then(res => res.data)
      .then(data => { return data; });
  }

  getListe2() {
    return this.http.get<any>('assets/list2.json')
      .toPromise()
      .then(res => res.data)
      .then(data => { return data; });
  }


}
