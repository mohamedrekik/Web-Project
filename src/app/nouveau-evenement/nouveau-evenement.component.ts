import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';
import { Evenements } from 'model/Evenements';

@Component({
  selector: 'app-nouveau-evenement',
  templateUrl: './nouveau-evenement.component.html',
  styleUrls: ['./nouveau-evenement.component.css']
})
export class NouveauEvenementComponent implements OnInit {

  id:number;
  evenement:Evenements=new Evenements();
  liste:any ; 

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }
  ngOnInit(): void {
    this.http.get('http://localhost:9999/evenement-service/evenements').subscribe(data => {
      this.liste = data;


    }, error => { console.log('ereur') ; } ) ;
  }
  save()
{  
  for(var i=0;i<this.liste.length;i++)
  {
    if(this.liste[i].titre==this.evenement.titre)
    alert('impo') ; 
    else{this.http.post('http://localhost:9999/evenement-service/evenements', this.evenement).subscribe(data => {console.log(data);
    this.route.navigate(['evenements']) ;
  },error =>{
    console.log("erreur");
  }) ;
}
  }
  
}

}
