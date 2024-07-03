import { RateComponent } from './pages/shipment/rate/rate.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/user/login/login.component'
import { RegisterComponent } from './pages/user/register/register.component'
import { RegisterComponent as DeliveryPersonRegisterComponent} from './pages/delivery-person/register/register.component'
import { HomeComponent } from './pages/home/home.component'
import { PreferencesComponent  } from './pages/user/preferences/preferences.component';
import { RescheduleShipmentComponent } from './pages/shipment/rescheduleshipment/rescheduleshipment.component';
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
    path: 'deliveryperson/register',
    component: DeliveryPersonRegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rate', 
    component: RateComponent
  },
  {
    path: 'preferences/:userId',
    component: PreferencesComponent
  },
  {
    path: 'reschedule',  
    component: RescheduleShipmentComponent
  }
];
