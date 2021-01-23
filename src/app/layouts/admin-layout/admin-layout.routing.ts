import { Routes } from '@angular/router';



import { PublicationsComponent } from '../../publications/publications.component';
import { EvenementsComponent } from '../../evenements/evenements.component';
import { ContactsComponent } from '../../contacts/contacts.component';

import { AccueilComponent } from '../../accueil/accueil.component';
import { EtudiantsComponent } from '../../etudiants/etudiants.component';
import { EnseignantsComponent } from '../../enseignants/enseignants.component';
import { OutilsComponent } from '../../outils/outils.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'accueil',      component: AccueilComponent },
    { path: 'evenements',      component: EvenementsComponent },
    { path: 'etudiants',      component: EtudiantsComponent },
    { path: 'enseignants',      component: EnseignantsComponent },
    { path: 'outils',           component: OutilsComponent },
    { path: 'contacts',      component: ContactsComponent },
    { path: 'publications',  component: PublicationsComponent }
];
