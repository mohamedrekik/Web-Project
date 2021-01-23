import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Outils } from 'model/Outils';

@Component({
  selector: 'app-detail-outil',
  templateUrl: './detail-outil.component.html',
  styleUrls: ['./detail-outil.component.css']
})
export class DetailOutilComponent implements OnInit {

  outil:Outils=new Outils();
  id:number;

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void { this.http.get('http://localhost:9999/outil-service/outil/'+this.id).subscribe(data => {
    // @ts-ignore
    this.outil= data ;
    console.log(this.outil);

  }, error => { console.log('ereur') ; } )  ;
  }

}
