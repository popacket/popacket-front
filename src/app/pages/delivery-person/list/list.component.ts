import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DeliveryPersonService } from '../services/delivery-person.service';
import { DeliveryPersonResponse } from '../interface/delivery-person-response.interface';

@Component({
  selector: 'app-delivery-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  deliveryPersons: DeliveryPersonResponse[] = [];
  showList: boolean = false;
  constructor(private deliveryPersonService: DeliveryPersonService) { }

  ngOnInit(): void {
    this.getDeliveryPersons();
  }

  toggleList(): void { // Añadir esta función
    this.showList = !this.showList;
  }

  getDeliveryPersons(): void {
    this.deliveryPersonService.getAllDeliveryPersons().subscribe({
      next: (response) => {
        this.deliveryPersons = response;
      },
      error: (error) => {
        console.error('Error al obtener los datos', error);
      }
    });
  }
}
