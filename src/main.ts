import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initializeApp } from "firebase/app";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const firebaseConfig = {
  apiKey: "AIzaSyB4hvUP9UBxoR7juLo-SD-z-91HkauB_oc",
  authDomain: "coinbase-geeks.firebaseapp.com",
  projectId: "coinbase-geeks",
  storageBucket: "coinbase-geeks.appspot.com",
  messagingSenderId: "594663009421",
  appId: "1:594663009421:web:102d8115b04d1a44e9c6c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
