import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { Etudiant } from 'model/Etudiant';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {
  etudiant:Etudiant=new Etudiant();
  id:number;

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/membre-service/etudiants/'+this.id).subscribe(data => {
      // @ts-ignore
      this.etudiant = data;
      console.log(this.etudiant);
  }, error => { console.log('ereur') ; } ) ;

  }
  update()
  {
    this.http.put('http://localhost:9999/membre-service/membres/etudiant/' + this.etudiant.id, this.etudiant).subscribe(data => {console.log(data) ;
      alert('bien') ;
      this.route.navigate(['etudiants']) ;

    }, error => { console.log('ereur') ; } )  ;

  }

}
