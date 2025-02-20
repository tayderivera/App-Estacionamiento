import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  obtenerDatos(): Observable<any[]> {
    const ref = collection(this.firestore, 'Cajones'); // Cambia al nombre de tu colección
    return collectionData(ref, { idField: 'id' });
  }
}
