import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Etudiant } from 'model/Etudiant';
import { Member } from 'model/Member';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Enseignants } from 'model/Enseignants';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {
  listeEnseignants:any;
  id:number;
  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/membre-service/enseignants').subscribe(data => {
      this.listeEnseignants = data;
      console.log();
  }, error => { console.log('ereur') ; } ) ;
  }
  detailEnseignants(id:number){
    this.route.navigate(['detailsEns' , id  ] );
  
  }
  edit(id:number)
{
  this.route.navigate(['editEnseignant' , id  ] );
}
delete(id:number){
  
  
  const conf = window.confirm('voulais vous supprimer cet enseignant?');
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
add(enseignants:Enseignants){
  this.route.navigate(['nouveauEnseignant']) ;

}

}
