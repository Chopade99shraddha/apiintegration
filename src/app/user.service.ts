import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
private http:HttpClient
  ) { }
  getUser()
  {
   // return this.http.get<UserInterface[]>("https://api.github.com/users")
   return this.http.get<UserInterface[]>("http://localhost:4200/assets/user.json")
    
  }
}
