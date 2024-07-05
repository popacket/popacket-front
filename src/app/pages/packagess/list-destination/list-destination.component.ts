import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/packagess.service';
import { PackageResponse } from '../interface/package-response.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-destination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-destination.component.html',
  styleUrls: ['./list-destination.component.css']
})
export class ListDestinationComponent implements OnInit {
  packages: PackageResponse[] = [];

  constructor(private packageService: PackageService) {}

  ngOnInit(): void {}

  loadPackageAddresses(): void {
    this.packageService.getAllDestinationAddressesWithId().subscribe({
      next: (data) => {
        this.packages = data;
      },
      error: (err) => {
        console.error('Error al cargar las direcciones de envío', err);
      }
    });
  }
}
