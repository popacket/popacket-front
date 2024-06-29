import { Routes } from '@angular/router';
import { LoginComponent } from './pages/user/login/login.component'
import { RegisterComponent } from './pages/user/register/register.component'
import { RegisterComponent as DeliveryPersonRegisterComponent} from './pages/delivery-person/register/register.component'
import { HomeComponent } from './pages/home/home.component';
import { ListComponent as DeliveryPersonListComponent } from './pages/delivery-person/list/list.component';

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
    path: 'deliveryperson/list',
    component: DeliveryPersonListComponent
  }
  
];
