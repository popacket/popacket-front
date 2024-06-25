import { Routes, RouterOutlet } from '@angular/router';
import { MyShipmentsComponent } from './pages/user/my-ActiveShipments/my-ActiveShipments.component';
import { VerOrdenEnvioComponent } from './pages/shipment/ver-orden-envio/ver-orden-envio.component';

export const routes: Routes = [
  {
    path: 'myactiveshipments',
    component : MyShipmentsComponent
  },
  {
    path: 'verordenenvio',
    component: VerOrdenEnvioComponent
  }
];
