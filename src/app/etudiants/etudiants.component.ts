import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Etudiant } from 'model/Etudiant';
import { Member } from 'model/Member';
import { Route, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  listeEtudiants:any;
  id:number;
  listePub :any;
  etudiant:Etudiant;

 
  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    
   
    this.http.get('http://localhost:9999/membre-service/etudiants').subscribe(data => {
      this.listeEtudiants = data;
      console.log();
  }, error => { console.log('ereur') ; } ) ;
  
  
  
}
detail(id:number){
  this.route.navigate(['detailsEtud' , id  ] );

}
edit(id:number)
{
  this.route.navigate(['editEtudiant' , id  ] );
}
delete(id:number){
  
  
  const conf = window.confirm('voulais vous supprimer cet étudiant?');
  if (conf === true) {


    this.http.delete('http://localhost:9999/membre-service/members/' + id).subscribe(data => {console.log(data) ;
    alert('bien') ;
    this.route.navigate(['']) ;
    

  }, error => {console.log('ereur');
    });
   
  }

else 

{
}

}
add(etudiant:Etudiant){
  this.route.navigate(['nouveauEtudiant']) ;

}
}
