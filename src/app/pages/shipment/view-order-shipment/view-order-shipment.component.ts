import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { shipmentResponse } from '../interface/shipmentResponse.inteface';
import { ShipmentService } from '../service/shipment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-order-shipment',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './view-order-shipment.component.html',
  styleUrls: ['./view-order-shipment.component.css']
})
export class ViewOrderShipment {
  shipmentId!: number;
  shipmentInfo?: shipmentResponse;

  constructor(private shipmentService: ShipmentService) {}

  buscarOrdenEnvio() {
    this.shipmentService.getTrackingInfo(this.shipmentId).subscribe({
      next: (response) => {
        this.shipmentInfo = response;
      },
      error: (error) => {
        console.error('Error al obtener la información de seguimiento', error);
      }
    });
  }
}
