import { Component } from '@angular/core';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { ListaPaquetesComponent } from '../../packages/lista-paquetes/lista-paquetes.component';

@Component({
  selector: 'app-my-ActiveShipments',
  standalone: true,
  imports: [NavbarComponent,ListaPaquetesComponent],
  templateUrl: './my-ActiveShipments.component.html',
  styleUrl: './my-ActiveShipments.component.css'
})
export class MyShipmentsComponent {

}
