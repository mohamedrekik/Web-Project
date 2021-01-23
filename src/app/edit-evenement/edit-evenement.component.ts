import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { Evenements } from 'model/Evenements';

@Component({
  selector: 'app-edit-evenement',
  templateUrl: './edit-evenement.component.html',
  styleUrls: ['./edit-evenement.component.css']
})
export class EditEvenementComponent implements OnInit {

  evenement:Evenements=new Evenements();
  id:number;

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }


  ngOnInit(): void { this.http.get('http://localhost:9999/evenement-service/evenement/'+this.id).subscribe(data => {
    // @ts-ignore
    this.evenement = data;
    console.log(this.evenement);
}, error => { console.log('ereur') ; } ) ;
  }
  update()
  {
    this.http.put('http://localhost:9999/evenement-service/evenements/' + this.evenement.id, this.evenement).subscribe(data => {console.log(data) ;
      alert('bien') ;
      this.route.navigate(['evenements']) ;

    }, error => { console.log('ereur') ; } )  ;

  }

}
