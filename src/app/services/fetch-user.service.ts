import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../userModel';

@Injectable({
  providedIn: 'root'
})
export class FetchUserService {
  private users: UserModel[];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.users = data;
    })
  }
  public getJSON(): Observable<any> {
    return this.http.get('../assets/users.json');
  }
  public getUser(usedId: string) {
    return {...this.users.find(user => {
        return user.id === usedId;
      })};
  }
}
