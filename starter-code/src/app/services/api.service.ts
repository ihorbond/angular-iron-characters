import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  baseUrl = "http://ih-api.herokuapp.com"

  constructor(private myHttp: Http) { }

 public errorHandler(error) {
   console.log(error);
 }

  getList (ending) {
    let endPoint = ending;
    return this.myHttp.get(this.baseUrl+endPoint)
      .toPromise()
      .then(result => result.json());
  }

  createNew (name, occupation, weapon, debt, ending) {
    let endPoint = ending;
    return this.myHttp.post(this.baseUrl+ending, {
     name: name,
     occupation: occupation,
     weapon: weapon,
     debt: debt
   }).toPromise()
   .then(() => console.log('SUCCESS'));
  }

  editOne (name, occupation, weapon, debt, ending) {
    let endPoint = ending;
    return this.myHttp.patch(this.baseUrl+ending, {
     name: name,
     occupation: occupation,
     weapon: weapon,
     debt: debt
    }).toPromise()
    .then(() => console.log('SUCCESS'));
  }

  deleteOne (ending) {
    let endPoint = ending;
    return this.myHttp.delete(this.baseUrl+endPoint)
    .toPromise()
    .then(res => res.json)
    .catch(this.errorHandler);
  }

}
