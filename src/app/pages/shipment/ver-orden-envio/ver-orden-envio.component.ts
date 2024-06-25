import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { shipmentResponse } from '../interface/shipmentResponse.inteface';
import { ShipmentService } from '../service/shipment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ver-orden-envio',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './ver-orden-envio.component.html',
  styleUrls: ['./ver-orden-envio.component.css']
})
export class VerOrdenEnvioComponent {
  shipmentId!: number;
  shipmentInfo?: shipmentResponse;

  constructor(private shipmentService: ShipmentService) {}

  buscarOrdenEnvio() {
    if (this.shipmentId < 0) {
      console.error('El ID de envío no puede ser negativo');
      return;
    } else {
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
}
