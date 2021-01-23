import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'model/Etudiant';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details-etudiants',
  templateUrl: './details-etudiants.component.html',
  styleUrls: ['./details-etudiants.component.css']
})
export class DetailsEtudiantsComponent implements OnInit {
  etudiant:Etudiant=new Etudiant();
  id:number;

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/membre-service/etudiants/'+this.id).subscribe(data => {
      // @ts-ignore
      this.etudiant= data ;
      console.log(this.etudiant);
 
    }, error => { console.log('ereur') ; } )  ;
  }
  forcerTelechargement()
  {
    window.open('assets/img/Mohamed_Rekik_CV_EN.pdf');
  }

}
