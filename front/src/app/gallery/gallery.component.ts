import { Component, OnInit } from '@angular/core';
import { GalleryGridComponent } from '../gallery-grid/gallery-grid.component';
import { GalleryStreamComponent } from '../gallery-stream/gallery-stream.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galSubComp:any
  constructor() {}

  SubComp(num: string){
    if(num=="grid"){
      this.galSubComp = GalleryGridComponent
    } else if(num=="stream"){
      this.galSubComp = GalleryStreamComponent
    }
  }
  ngOnInit(): void {}
}
