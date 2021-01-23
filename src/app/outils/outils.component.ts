import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Member } from 'model/Member';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Outils } from 'model/Outils';

@Component({
  selector: 'app-outils',
  templateUrl: './outils.component.html',
  styleUrls: ['./outils.component.css']
})
export class OutilsComponent implements OnInit {

  id:number;
  listeOutils :any;
  outil:Outils;

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/outil-service/outils').subscribe(data => {
      this.listeOutils = data;
      console.log();
  }, error => { console.log('ereur') ; } ) ;
  }

  detailOutil(id:number){
    this.route.navigate(['detailOutil' , id  ] );
  
  }
  edit(id:number)
  {
    this.route.navigate(['editOutil' , id  ] );
  }
  delete(id:number){
    
    
    const conf = window.confirm('voulais vous supprimer cet Outil?');
    if (conf === true) {
  
  
      this.http.delete('http://localhost:9999/outil-service/outils/' + id).subscribe(data => {console.log(data) ;
      alert('bien') ;
      this.route.navigate(['']) ;
      
  
    }, error => {console.log('ereur');
      });
     
    }
  
  else 
  
  {
  }
  
  }
  add(outil:Outils){
    this.route.navigate(['nouveauOutil']) ;
  
  }


}
