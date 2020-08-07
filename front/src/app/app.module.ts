import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {HttpClientModule} from '@angular/common/http';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ToolsComponent } from './tools/tools.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { GalleryStreamComponent } from './gallery-stream/gallery-stream.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    UserprofileComponent,
    EditprofileComponent,
    ToolsComponent,
    GalleryComponent,
    GalleryGridComponent,
    GalleryStreamComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
