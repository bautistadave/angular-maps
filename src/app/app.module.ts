import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from '../environments/environment';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
//import { DBComponent } from './db/db.component';


//rutas
//const routes: Routes = [
  //{ path: 'registros', component: DBComponent }
//];


@NgModule({
  declarations: [
    AppComponent,
    BarraBusquedaComponent,
    //DBComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule, 
    HttpClientModule,
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyAsqD74iDfN4qmxGyuQtAUts_WWWFVNujs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
