import { Component, OnInit} from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email="affan@gmail.com";
  password="affan";
  loginStatus: String;
  status:Number

  constructor(private data: DataService) {}
  
  submit(){
    if(this.email && this.password){
      this.status = this.data.login(this.email, this.password)
    }
  }
  ngOnInit(): void {}
}
