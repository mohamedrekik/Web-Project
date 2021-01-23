import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';
import { Outils } from 'model/Outils';

@Component({
  selector: 'app-nouveau-outil',
  templateUrl: './nouveau-outil.component.html',
  styleUrls: ['./nouveau-outil.component.css']
})
export class NouveauOutilComponent implements OnInit {

  id:number;
  outil:Outils=new Outils();
  liste:any ; 

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/outil-service/outils').subscribe(data => {
      this.liste = data;


    }, error => { console.log('ereur') ; } ) ;
  }
  save()
{
  for(var i=0;i<this.liste.length;i++)
  {
    if(this.liste[i].dateGeneration==this.outil.dateGeneration)
    alert('impo') ; 
  }
  this.http.post('http://localhost:9999/outil-service/outils/new', this.outil).subscribe(data => {console.log(data);
    this.route.navigate(['outils']) ;
  },error =>{
    console.log("erreur");
  }) ;

}

}
