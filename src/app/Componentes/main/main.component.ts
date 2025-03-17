
import { HeaderComponent } from "../header/header.component";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {CajonesService} from '../../Servicios/cajones.service';
import { Component } from '@angular/core';
import { PlumaService } from '../../Servicios/pluma.service';
import { CommonModule } from '@angular/common';
interface Cajon {
  id: string;
  nombre: string;
  estado: string;
}


@Component({
  selector: 'app-main',
  imports: [HeaderComponent, CommonModule], 
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent{
cajones:  Cajon[] = [];



  constructor( private plumaService : PlumaService, private cajonesService: CajonesService){
  }
  ngOnInit() {
    this.cajonesService.obtenerCajones().subscribe(data => {
      this.cajones = data;
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

   

 //apertura de las plumas
 abrirPluma() {
  this.plumaService.actualizarEstadoPluma('abierto');
}

cerrarPluma() {
  this.plumaService.actualizarEstadoPluma('cerrado');
}
abrirPlumaEmergencias() {
  this.plumaService.actualizarEstadoPluma('abierto total');
}

}