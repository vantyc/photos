import { Routes } from '@angular/router';
import { PhotosService } from './services/photos.service';

export const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'photos'
  },
  {
    path: 'photos',
    providers: [PhotosService],
    loadComponent: ()=>import('./pages/home/home.component').then(comp=>comp.HomeComponent)
  }
];
