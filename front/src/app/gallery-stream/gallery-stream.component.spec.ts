import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryStreamComponent } from './gallery-stream.component';

describe('GalleryStreamComponent', () => {
  let component: GalleryStreamComponent;
  let fixture: ComponentFixture<GalleryStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
