import { PackageService } from './../services/package.service';
import { Package } from './../interface/Package.interface';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-paquetes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-paquetes.component.html',
  styleUrl: './lista-paquetes.component.css'
})
export class ListaPaquetesComponent implements OnInit{
  paquetes : Package[] = [];
  private packageService = inject(PackageService);

  constructor() {}

  ngOnInit(): void {
    this.obtenerLista(1);
  }
  private obtenerLista(id: number){
    this.packageService.getListActiveShipment(id).subscribe({
      next: (response) => {
        this.paquetes = response
      },
      error : (error) =>{
        console.error('Error al obtener la lista de paquetes',error);
      }
    }
  )
  }
}
