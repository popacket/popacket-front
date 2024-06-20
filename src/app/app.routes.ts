import { Routes } from '@angular/router';
import { LoginComponent } from './pages/user/login/login.component'
import { RegisterComponent } from './pages/user/register/register.component'
import { CotizadorComponent } from './pages/shipment/cotizador/cotizador.component';

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
    path : 'cotizador',
    component : CotizadorComponent
  }
];
