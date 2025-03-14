import { Injectable } from '@angular/core';
import { Database, ref, set, get, onValue } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PlumaService {
  constructor(private db: Database) {}

  // Escribir un valor en la base de datos
  actualizarEstadoPluma(estado: string) {
    set(ref(this.db, 'pluma/estado'), estado);
  }

  // Leer el estado en tiempo real
  obtenerEstadoPluma(callback: (estado: string) => void) {
    const estadoRef = ref(this.db, 'pluma/estado');
    onValue(estadoRef, (snapshot) => {
      callback(snapshot.val());
    });
  }
}
