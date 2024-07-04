import { PackageService } from '../services/package.service';
import { Package } from '../interface/Package.interface';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent implements OnInit{
  paquetes : Package[] = [];
  private packageService = inject(PackageService);

  constructor() {}

  ngOnInit(): void {
    this.obtenerLista(1,'Pendiente');
  }
  private obtenerLista(id: number,status:string){
    this.packageService.getListPendingPackages(id, status).subscribe({
      next: (response) => {
        console.log(response)
        this.paquetes = response
      },
      error : (error) =>{
        console.error('Error al obtener la lista de paquetes',error);
      }
    }
  )
  }
  cancelPackage(id: number): void {
    this.packageService.cancelPackage(id).subscribe({
      next: (response) => {
        this.paquetes = this.paquetes.filter(pkg => pkg.id !== id);
        console.log(`Paquete con ID ${id} cancelado`, response);
        this.obtenerLista(1,"Pendiente");//Vuelve a cargar la lista
      },
      error: (error) => {
        console.error('Error al cancelar el paquete', error);
      }
    });
  }
}
