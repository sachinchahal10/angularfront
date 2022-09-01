import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Food } from './shared/models/Food';
import { FoodData } from '../../dist/foodmine-course/assets/model';
import { Observable, of } from 'rxjs';
import { User } from './shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  public foods: Observable<FoodData[]> = of([]);
  postData(data: any) {
    return this._http.post<any>("http://localhost:33188/api/foods", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getlogin(id: number):Observable<User> {
    return this._http.get<User>("http://localhost:33188/api/foods" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getData() {
    return this._http.get<any>("http://localhost:33188/api/Foods")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getDatabyid11(id: number) {
    return this._http.get<FoodData>("http://localhost:33188/api/Foods/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteData(id: number) {
    return this._http.delete<any>("http://localhost:33188/api/Foods/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  //getFoodById(id: number): Food {
    //return this.getData().find(food => food.id == id)!;
  //}

  updateData(data: any, id: number) {
    console.log('api updating');
    return this._http.put<any>("http://localhost:33188/api/Foods/" + id, data)
      .pipe(map((res: any) => {
        console.log('api updated...');
        return res;
      }))
  }
}
