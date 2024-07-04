import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ListPackagesComponent} from '../../packages/list-packages-to-collect/list-packages.component';

@Component({
  selector: 'app-my-ActiveShipments',
  standalone: true,
  imports: [NavbarComponent,ListPackagesComponent],
  templateUrl: './my-ActiveShipments.component.html',
  styleUrl: './my-ActiveShipments.component.css'
})
export class MyShipmentsComponent {

}
