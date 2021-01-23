import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publications } from 'model/Publications';
import { Member } from 'model/Member';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  
  id:number;
  listePub :any;
  publication:Publications;

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }


  ngOnInit(): void {

    this.http.get('http://localhost:9999/publication-service/publications').subscribe(data => {
      this.listePub = data;
      console.log();
  }, error => { console.log('ereur') ; } ) ;
  }



  detailPub(id:number){
    this.route.navigate(['detailPub' , id  ] );
  
  }
  edit(id:number)
  {
    this.route.navigate(['editPublication' , id  ] );
  }
  delete(id:number){
    
    
    const conf = window.confirm('voulais vous supprimer cet Publication?');
    if (conf === true) {
  
  
      this.http.delete('http://localhost:9999/publication-service/publication/' + id).subscribe(data => {console.log(data) ;
      alert('bien') ;
      this.route.navigate(['']) ;
      
  
    }, error => {console.log('ereur');
      });
     
    }
  
  else 
  
  {
  }
  
  }
  add(publication:Publications){
    this.route.navigate(['nouveauPub']) ;
  
  }

 
}
