import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompromisoComponent } from './pages/compromiso/compromiso.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DistribucionComponent } from './pages/distribucion/distribucion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    CompromisoComponent,
    ContactoComponent,
    DistribucionComponent,
    InicioComponent,
    NosotrosComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: environment.firebase.apiKey,
      appId: environment.firebase.appId,
      authDomain: environment.firebase.authDomain,
      projectId: environment.firebase.projectId,
      storageBucket: environment.firebase.storageBucket,
      messagingSenderId: environment.firebase.messagingSenderId,
      databaseURL: environment.firebase.databaseURL
    }),
    AngularFirestoreModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
