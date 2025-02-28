import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RealtimeDBService } from '../../Servicios/realtimedb.service';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent], 
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  colorDiv: string[] = [];
  tipoCajones: string[] = [];
  nombresCajones: string[] = [];

  constructor(private dbService: RealtimeDBService) {}

  ngOnInit(): void {
    this.dbService.obtenerDatos().subscribe((datos: any[]) => {
      if (datos.length > 0) {
        this.nombresCajones = datos.map((cajon) => cajon.nombre);
        this.colorDiv = datos.map((cajon) => this.getColorPorEstado(cajon.estado));
        this.tipoCajones = datos.map((cajon) => cajon.tipo);
      }
    });
  }

  getColorPorEstado(estado: string): string {
    switch (estado.toLowerCase()) {
      case 'libre':
        return '#808080';
      case 'ocupado':
        return '#e57373';
      case 'asignado':
        return '#50b7a6';
      default:
        return '#808080';
    }
  }

  esDiscapacidad(tipo: string): boolean {
    return tipo === 'discapacidad';
  }
}
