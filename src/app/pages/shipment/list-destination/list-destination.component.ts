import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../services/shipment.service';
import { ShipmentResponse } from '../interface/shipment-response.interface';

@Component({
  selector: 'app-list-destination',
  templateUrl: './list-destination.component.html',
  styleUrls: ['./list-destination.component.css']
})
export class ListDestinationComponent implements OnInit {
  shipments: ShipmentResponse[] = [];

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit(): void {
    this.loadShipmentAddresses();
  }

  loadShipmentAddresses(): void {
    this.shipmentService.getAllShipmentAddresses().subscribe({
      next: (data) => {
        this.shipments = data;
      },
      error: (err) => {
        console.error('Error al cargar las direcciones de envío', err);
      }
    });
  }
}
