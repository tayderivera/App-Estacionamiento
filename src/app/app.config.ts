import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { environment } from '../environments/environment.development';
import { routes } from './app.routes';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { PlumaService } from './Servicios/pluma.service';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    
    provideDatabase(() => getDatabase())
    
  ]
};
