import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgbService {

  private url = '/assets/data/mock.json';

  constructor(private http:HttpClient) { }

  loadData(): Observable<any> {
    console.log('LOAD AGB');
    return this.http.get(this.url);
  }

  getServices(): Observable<any> {
    console.log('LOAD Service');
    return this.loadData();
  }
}
