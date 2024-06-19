import { Component } from '@angular/core';
import { ShipmentService } from '../service/shipment.service';

@Component({
  selector: 'app-cotizador',
  standalone: true,
  imports: [],
  templateUrl: './cotizador.component.html',
  styleUrl: './cotizador.component.css'
})
export class CotizadorComponent {

  "weight" : number;
  "serviceType" : string;
  "quote": number;
  constructor(private shipmentService: ShipmentService) {}

  getQuote() {
    this.shipmentService.getQuoteShipment(this.weight, this.serviceType).subscribe(
      (data: number) => {
        this.quote = data;
      },
      (error) => {
        console.error('Error fetching quote', error);
      }
    );
  }
}