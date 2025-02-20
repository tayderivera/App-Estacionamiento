import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FirestoreService } from '../../Servicios/firestore.service';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent], 
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  // Arreglo de colores de los cajones
  colorDiv: string[] = [];

  // Arreglo de tipos de cajones
  tipoCajones: string[] = [];

  // Arreglo de nombres de los cajones
  nombresCajones: string[] = [];

  constructor(private firestoreServ: FirestoreService) {}

  ngOnInit(): void {
    this.firestoreServ.obtenerDatos().subscribe((datos: any[]) => {
      if (datos.length > 0) {
        this.nombresCajones = datos.map((cajon) => cajon.nombre); // Obtener nombres
        this.colorDiv = datos.map((cajon) => this.getColorPorEstado(cajon.estado)); // Obtener colores
        this.tipoCajones = datos.map((cajon) => cajon.tipo); // Obtener tipos
      }
    });
  }

  // Función para obtener el color según el estado
  getColorPorEstado(estado: string): string {
    switch (estado.toLowerCase()) {
      case 'libre':
        return '#808080'; // Gris
      case 'ocupado':
        return '#e57373'; // Rojo
      case 'asignado':
        return '#50b7a6'; // Verde azulado
      default:
        return '#808080'; // Color por defecto
    }
  }

  // Función para verificar si el cajón es de tipo "discapacidad"
  esDiscapacidad(tipo: string): boolean {
    return tipo === 'discapacidad';
  }
}