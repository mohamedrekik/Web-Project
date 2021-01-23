import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';
import { Etudiant } from 'model/Etudiant';

@Component({
  selector: 'app-nouveau-etudiant',
  templateUrl: './nouveau-etudiant.component.html',
  styleUrls: ['./nouveau-etudiant.component.css']
})
export class NouveauEtudiantComponent implements OnInit {
  id:number;
  etudiant:Etudiant=new Etudiant();
  liste:any ; 

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/membre-service/etudiants').subscribe(data => {
      this.liste = data;


    }, error => { console.log('ereur') ; } ) ;
  }
  save()
{
  for(var i=0;i<this.liste.length;i++)
  {
    if(this.liste[i].cin==this.etudiant.cin)
    alert('impo') ; 
  }
  this.http.post('http://localhost:9999/membre-service/etudiants', this.etudiant).subscribe(data => {console.log(data);
    this.route.navigate(['etudiants']) ;
  },error =>{
    console.log("erreur");
  }) ;

}

}
