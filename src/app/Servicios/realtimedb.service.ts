import { Injectable } from '@angular/core';
import { Database, ref, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RealtimeDBService {
  constructor(private db: Database) {}

  obtenerDatos(): Observable<any[]> {
    const dbRef = ref(this.db, 'Cajones'); // Ruta en Realtime Database
    return new Observable((observer) => {
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const listaCajones = Object.keys(data).map((key) => ({
            id: key,
            ...data[key]
          }));
          observer.next(listaCajones);
        } else {
          observer.next([]);
        }
      });
    });
  }
}
