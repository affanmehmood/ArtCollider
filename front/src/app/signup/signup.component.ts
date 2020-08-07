import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username="";
  email="";
  password="";
  password_re ="";
  status: string;
  constructor(private data: DataService) {}
  
  submit(){
    if(this.username && this.email && this.password && this.password_re && (this.password == this.password_re)){
        this.status = this.data.signup(this.username, this.email, this.password)
    }
  }

  ngOnInit(): void {}
  
}
