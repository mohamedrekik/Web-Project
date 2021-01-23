import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Enseignants } from 'model/Enseignants';


@Component({
  selector: 'app-details-enseignants',
  templateUrl: './details-enseignants.component.html',
  styleUrls: ['./details-enseignants.component.css']
})
export class DetailsEnseignantsComponent implements OnInit {
  enseignant:Enseignants=new Enseignants();
  id:number;
  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/membre-service/enseignants/'+this.id).subscribe(data => {
      // @ts-ignore
      this.enseignant= data ;
      console.log(this.enseignant);
 
    }, error => { console.log('ereur') ; } )  ;
  }

}
