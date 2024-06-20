import { routes } from './app.routes';
import { Routes, RouterOutlet } from '@angular/router';
import { MyShipmentsComponent } from './user/my-ActiveShipments/my-ActiveShipments.component';

export const routes: Routes = [
  {
    path: 'myactiveshipments'
   : MyShipmentsComponent
  }
];
