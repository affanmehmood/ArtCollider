import { Component, Output, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DataService } from "./data.service";
import { UserprofileComponent } from './userprofile/userprofile.component';
import {EditprofileComponent} from './editprofile/editprofile.component'
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
  
  title = 'Art Collider';
  mainCompCont:any;
  status = this.data.getStatus();
  mode = false
  username = this.data.getusername()
  
  constructor(private data: DataService) {
    this.mainCompCont = HomeComponent
    }
  mainNav(from: String){
    if(from == "home"){
      this.mainCompCont = HomeComponent
    } else if(from == "login"){
      this.mainCompCont = LoginComponent
    } else if(from == "signup"){
      this.mainCompCont = SignupComponent
    } else if(from == "profile"){
      this.mainCompCont = UserprofileComponent
    } else if(from == "gallery"){
      this.mainCompCont = GalleryComponent
    } else if(from == "signout"){
      localStorage.clear()
      this.data.changeStatus("false")
    }
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      if(message == "true"){
        this.mode = true
        this.username = this.data.getusername()
        this.mainCompCont = HomeComponent
      } else {
        this.mode = false
        this.mainCompCont = HomeComponent
      }
    })
    this.data.profileMessage.subscribe(message=>{
      if(message=="edit")
        this.mainCompCont = EditprofileComponent
    })
  }
  scrollTools(){
    const xCoord = 0
    const yCoord = 1000
    window.scrollTo(xCoord, yCoord);
  }
}
