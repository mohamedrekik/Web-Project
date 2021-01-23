import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/accueil', title: 'Accueil',  icon: 'dashboard', class: '' },
    { path: '/etudiants', title: 'Étudiants',  icon:'supervised_user_circle', class: '' },
    { path: '/enseignants', title: 'Enseignants',  icon:'people', class: '' },
    { path: '/publications', title: 'Publications',  icon:'receipt_long', class: '' },
    { path: '/evenements', title: 'Événements',  icon:'event', class: '' },
    { path: '/outils', title: 'Outils',  icon:'developer_mode', class: '' },
    { path: '/contacts', title: 'Contacts',  icon:'phonelink_ring', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
