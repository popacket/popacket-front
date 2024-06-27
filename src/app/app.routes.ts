import { Routes, RouterOutlet } from '@angular/router';
import { MyShipmentsComponent } from './pages/user/my-ActiveShipments/my-ActiveShipments.component';
import { VerOrdenEnvioComponent } from './pages/shipment/ver-orden-envio/ver-orden-envio.component';
import { LoginComponent } from './pages/user/login/login.component'
import { RegisterComponent } from './pages/user/register/register.component'

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'myactiveshipments',
    component: MyShipmentsComponent
  },
  {
    path: 'verordenenvio',
    component: VerOrdenEnvioComponent
  }
];
