import { Component, inject, Signal, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Photos } from '../../interfaces/photos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  private photosService=inject(PhotosService);
  public photos!:Signal<Photos[]>;


  public ngOnInit(){
    this.photos=this.photosService.getPhotos();
  }
}
