import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  uri='http://localhost:3030'

  constructor(private http:HttpClient) { }
                                            // signup
  signup(name, email, password): any{
    this.http
      .post(`${this.uri}/signup`,{
        username: name,
        email: email,
        password: password
      })
      .subscribe((data: any)=>{
        localStorage.removeItem("username")
        localStorage.setItem("username", data.username)

        this.setStatus(data.status)
        if(data.code==1)  
          this.changeStatus(data.status)
        console.log(data)
        return data.code
        })
  }
                                            //login
  login(email, password): any{
    this.http
      .post(`${this.uri}/login`,{
        email: email,
        password: password
        })
      .subscribe((data:any)=>{
        localStorage.removeItem("username")
        localStorage.setItem("username", data.username)
        
        this.setStatus(data.status)
        if(data.code==1)
          this.changeStatus(data.status)
        console.log(data)
        return data.code
        })
  }
                                            //getSingleUser
  getSingleUser(username) {
    let rdata: any
    return this.http
      .post(`${this.uri}/getSingleUser`,{
        username
        })
  }
  updateUser(username, location, jobTitle, bio, privacy){
    return this.http.put(`${this.uri}/updateUser`,{
      username: username,
      location: location,
      jobTitle: jobTitle,
      bio: bio,
      privacy: privacy
    })
  }
  
  public getStatus(){ return localStorage.getItem("status") }
  public setStatus(status: string){ localStorage.setItem("status", status) }

  public getusername(){ return localStorage.getItem("username") }
  public setusername(username: string){ localStorage.setItem("username",username) }

  private messageSource = new BehaviorSubject(this.getStatus());
  currentMessage = this.messageSource.asObservable();

  changeStatus(message: string) {
    this.messageSource.next(message)
  }
  private profileSource = new BehaviorSubject(this.getStatus());
  profileMessage = this.profileSource.asObservable();

  changeProfile(message: string) {
    this.profileSource.next(message)
  }
}