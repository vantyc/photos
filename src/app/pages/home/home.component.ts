import { Component, inject, Signal } from '@angular/core';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  private photosService!=inject(PhotosService);
  public photos:Signal<Photos[]>;


  public ngonInit(){
    fotos=fotosService.getPhotos();
  }

}
