import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  id:number;
 

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
  }
  logout(){
    this.route.navigate(['login']) ;
  }
}
