import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Evenements } from 'model/Evenements';

@Component({
  selector: 'app-detail-evenement',
  templateUrl: './detail-evenement.component.html',
  styleUrls: ['./detail-evenement.component.css']
})
export class DetailEvenementComponent implements OnInit {

  evenement:Evenements=new Evenements();
  id:number;

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {this.http.get('http://localhost:9999/evenement-service/evenement/'+this.id).subscribe(data => {
    // @ts-ignore
    this.evenement= data ;
    console.log(this.evenement);

  }, error => { console.log('ereur') ; } )  ;
  }

}
