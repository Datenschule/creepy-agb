import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgbService {

  private url = 'assets/data/mock.json';

  selectedServices: Array<number> = [];

  constructor(private http:HttpClient) { }

  loadData(): Observable<any> {
    console.log('LOAD AGB');
    return this.http.get(this.url);
  }

  getServices(): Observable<any> {
    console.log('LOAD Service');
    return this.loadData();
  }

  getSelectedServices() {
    return this.selectedServices;
  }

  saveService(id): any {
    console.log(this.selectedServices, id);
    let index = this.selectedServices.indexOf(id);
    if (index >= 0) {
      return this.selectedServices.splice(index, 1)
    } else {
      return this.selectedServices.push(id);
    }
  }
}
