import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
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



const routes: Routes =[
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    },
    { path: 'detailsEtud/:id', component: DetailsEtudiantsComponent },
    { path: 'detailsEns/:id', component: DetailsEnseignantsComponent },
    { path: 'editEtudiant/:id', component: EditEtudiantComponent },
    { path: 'nouveauEtudiant', component: NouveauEtudiantComponent },
    { path: 'editEnseignant/:id', component: EditEnseignantComponent },
    { path: 'nouveauEnseignant', component: NouveauEnseignantComponent }
    ,
    { path: 'detailPub/:id', component: DetailPubComponent },
    
    { path: 'editPublication/:id', component: EditPublicationComponent }
    ,
    { path: 'nouveauPub', component: NouveauPublicationComponent },
    { path: 'nouveauEvent', component: NouveauEvenementComponent },
    { path: 'editEvent/:id', component: EditEvenementComponent },
    { path: 'detailEvent/:id', component: DetailEvenementComponent },
    { path: 'detailOutil/:id', component: DetailOutilComponent },
    { path: 'editOutil/:id', component: EditOutilComponent }
    ,
    { path: 'nouveauOutil', component: NouveauOutilComponent } ,
    { path: 'login', component: LoginComponent }
  ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
