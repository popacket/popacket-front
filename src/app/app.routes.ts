import { Routes, RouterOutlet } from '@angular/router';
import { MyShipmentsComponent } from './pages/user/my-ActiveShipments/my-ActiveShipments.component';
import { ViewOrderShipment } from './pages/shipment/view-order-shipment/view-order-shipment.component';
import { LoginComponent } from './pages/user/login/login.component'
import { RegisterComponent } from './pages/user/register/register.component'
import { ConfigureProfileComponent } from './pages/user/configure-profile/configure-profile.component';
import { MakeShipmentComponent } from './pages/shipment/make-shipment/make-shipment.component';
import { CostComponent } from './pages/shipment/cost/cost.component';
import { RegisterComponent as DeliveryPersonRegisterComponent} from './pages/delivery-person/register/register.component'
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'myactiveshipments',
    component: MyShipmentsComponent
  },
  {
    path: 'viewordershipment',
    component: ViewOrderShipment
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'configureprofile',
    component: ConfigureProfileComponent
  },
  {
    path: 'makeshipment',
    component: MakeShipmentComponent
  },
  {
    path: 'cost',
    component: CostComponent
  },
  {
    path: 'deliveryperson/register',
    component: DeliveryPersonRegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
