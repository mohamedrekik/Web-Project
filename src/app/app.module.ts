import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { PublicationsComponent } from './publications/publications.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { OutilsComponent } from './outils/outils.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailsEtudiantsComponent } from './details-etudiants/details-etudiants.component';
import { DetailsEnseignantsComponent } from './details-enseignants/details-enseignants.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { NouveauEtudiantComponent } from './nouveau-etudiant/nouveau-etudiant.component';
import { EditEnseignantComponent } from './edit-enseignant/edit-enseignant.component';
import { NouveauEnseignantComponent } from './nouveau-enseignant/nouveau-enseignant.component';
import { DetailPubComponent } from './detail-pub/detail-pub.component';
import { EditPublicationComponent } from './edit-publication/edit-publication.component';
import { NouveauPublicationComponent } from './nouveau-publication/nouveau-publication.component';
import { NouveauEvenementComponent } from './nouveau-evenement/nouveau-evenement.component';
import { EditEvenementComponent } from './edit-evenement/edit-evenement.component';
import { DetailEvenementComponent } from './detail-evenement/detail-evenement.component';
import { DetailOutilComponent } from './detail-outil/detail-outil.component';
import { EditOutilComponent } from './edit-outil/edit-outil.component';
import { NouveauOutilComponent } from './nouveau-outil/nouveau-outil.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AccueilComponent,
    EtudiantsComponent,
    EnseignantsComponent,
    PublicationsComponent,
    EvenementsComponent,
    OutilsComponent,
    ContactsComponent,
    HeaderComponent,
    DetailsEtudiantsComponent,
    DetailsEnseignantsComponent,
    EditEtudiantComponent,
    NouveauEtudiantComponent,
    EditEnseignantComponent,
    NouveauEnseignantComponent,
    DetailPubComponent,
    EditPublicationComponent,
    NouveauPublicationComponent,
    NouveauEvenementComponent,
    EditEvenementComponent,
    DetailEvenementComponent,
    DetailOutilComponent,
    EditOutilComponent,
    NouveauOutilComponent,
    LoginComponent,
    LogoutComponent,
    
    

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
