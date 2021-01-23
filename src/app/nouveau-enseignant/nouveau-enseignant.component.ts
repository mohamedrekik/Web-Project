import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';
import { Enseignants } from 'model/Enseignants';

@Component({
  selector: 'app-nouveau-enseignant',
  templateUrl: './nouveau-enseignant.component.html',
  styleUrls: ['./nouveau-enseignant.component.css']
})
export class NouveauEnseignantComponent implements OnInit {
  id:number;
  enseignant:Enseignants=new Enseignants();
  liste:any ; 

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/membre-service/enseignants').subscribe(data => {
      this.liste = data;


    }, error => { console.log('ereur') ; } ) ;
  }
   save()
  {
    for(var i=0;i<this.liste.length;i++)
    {
      if(this.liste[i].cin==this.enseignant.cin)
      alert('impo') ; 
    }
    this.http.post('http://localhost:9999/membre-service/membres/enseignant', this.enseignant).subscribe(data => {console.log(data);
      this.route.navigate(['enseignants']) ;
    },error =>{
      console.log("erreur");
    }) ;
  
  }

}
