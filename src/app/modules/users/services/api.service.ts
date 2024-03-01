import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsreSchema } from '../Models/userSchema';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL="https://emp-server-rt27.onrender.com"
  constructor(private http:HttpClient) { }

  addUserAPI(user:UsreSchema){
   return this.http.post(`${this.SERVER_URL}/users`,user)
  }

  getAllUsersAPI(){
    return this.http.get(`${this.SERVER_URL}/users`)  
  }

  getSingleUserAPI(id:string){
    return this.http.get(`${this.SERVER_URL}/users/${id}`)
  }

  updateUserAPI(userId:string,userDetails:UsreSchema){
    return this.http.put(`${this.SERVER_URL}/users/${userId}`,userDetails)  
  }

  removeUserAPI(userId:string){
    return this.http.delete(`${this.SERVER_URL}/users/${userId}`)
  }
}
