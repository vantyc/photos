import { Injectable, inject, Injector, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Photos } from '../interfaces/photos';

@Injectable()

export class PhotosService {
  private http = inject(HttpClient);
  private injector = inject(Injector);

  public getPhotos(): Signal<Photos[]>{
    return toSignal(this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/photos'),{initialValue:[],injector:this.injector});
  }

}
