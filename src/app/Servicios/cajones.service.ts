import { Injectable } from '@angular/core';
import { Database, ref, get, child, listVal } from '@angular/fire/database';
import { Observable } from 'rxjs';

interface Cajon {
  id: string;
  nombre: string;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class CajonesService {
  constructor(private db: Database) {}

  obtenerCajones(): Observable<Cajon[]> {
    const cajonesRef = ref(this.db, 'Cajones');
    return listVal<Cajon>(cajonesRef) as Observable<Cajon[]>;
  }
}
