import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';
import { Publications } from 'model/Publications';
@Component({
  selector: 'app-nouveau-publication',
  templateUrl: './nouveau-publication.component.html',
  styleUrls: ['./nouveau-publication.component.css']
})
export class NouveauPublicationComponent implements OnInit {

  id:number;
  publication:Publications=new Publications();
  liste:any ; 

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }


  ngOnInit(): void {
    this.http.get('http://localhost:9999/publication-service/publications').subscribe(data => {
      this.liste = data;


    }, error => { console.log('ereur') ; } ) ;
  }
  save()
{
  for(var i=0;i<this.liste.length;i++)
  {
    if(this.liste[i].type==this.publication.type)
    alert('impo') ; 
  }
  this.http.post('http://localhost:9999/publication-service/publication/new', this.publication).subscribe(data => {console.log(data);
    this.route.navigate(['publications']) ;
  },error =>{
    console.log("erreur");
  }) ;

}

}
