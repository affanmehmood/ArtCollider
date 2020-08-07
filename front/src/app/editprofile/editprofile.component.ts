import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  location = "Australia"
  jobTitle = "Backend Designer"
  bio = "I like to code"
  privacy = false
  constructor(private data: DataService) {}
  
  ngOnInit(): void {}
  updateProfile(){
    this.data.updateUser(
      this.data.getusername(),
      this.location,
      this.jobTitle,
      this.bio,
      this.privacy
      ).subscribe(rdata=>{
      console.log(rdata)
    })
  }
}
