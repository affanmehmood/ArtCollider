import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user:any
  username = this.data.getusername()
  bio = ""
  jobTitle = ""
  followerCount = ""
  followingCount = ""
  likeCount = ""
  constructor(private data: DataService) {
      data.getSingleUser(data.getusername()).subscribe(
        (rdata: any)=>{
          this.bio = rdata.bio
          this.jobTitle = rdata.jobTitle
          this.followerCount = rdata.followerCount
          this.followingCount = rdata.followingCount
          this.likeCount = rdata.likeCount
          console.log(rdata)
        })
  }
  openEditProfile(){
    this.data.changeProfile("edit")
  }
  ngOnInit(): void {}
}
