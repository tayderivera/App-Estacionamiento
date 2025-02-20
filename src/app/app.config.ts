import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [  CommonModule,provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())
    
  ]
};
