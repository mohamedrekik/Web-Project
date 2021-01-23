import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Etudiant } from 'model/Etudiant';
import { Member } from 'model/Member';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Evenements } from 'model/Evenements';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit {

  listeEvenements:any;
  id:number;
 
  evenement:Evenements;

 
  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/evenement-service/evenements').subscribe(data => {
      this.listeEvenements = data;
      console.log();
  }, error => { console.log('ereur') ; } ) ;
  }

detail(id:number){
  this.route.navigate(['detailEvent' , id  ] );

}
edit(id:number)
{
  this.route.navigate(['editEvent' , id  ] );
}
delete(id:number){
  
  
  const conf = window.confirm('voulais vous supprimer cet evenement?');
  if (conf === true) {


    this.http.delete('http://localhost:9999/evenement-service/evenements/' + id).subscribe(data => {console.log(data) ;
    alert('bien') ;
    this.route.navigate(['']) ;
    

  }, error => {console.log('ereur');
    });
   
  }

else 

{
}

}
add(evenements:Evenements){
  this.route.navigate(['nouveauEvent']) ;

}

}
