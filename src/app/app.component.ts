import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HistorialEncomiendasComponent } from './historial-encomiendas/historial-encomiendas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HistorialEncomiendasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'popacket-front';
}
