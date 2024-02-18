import { Injectable, inject, Injector } from '@angular/core';
import { HttpClient } from '@angular/http';

@Injectable()

export class PhotosService {
private http=inject(HttpClient);
  private injector=inject(Injector);

  public getPhotos: Signal(){
    return(http.get<Posts[]>('https://jsonplaceholder.typicode.com/photos'),{initialValue:[],inject:this.injector});
  }

}
