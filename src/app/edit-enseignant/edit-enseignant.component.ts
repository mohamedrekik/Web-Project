import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { Enseignants } from 'model/Enseignants';

@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrls: ['./edit-enseignant.component.css']
})
export class EditEnseignantComponent implements OnInit {
  enseignant:Enseignants=new Enseignants();
  id:number;
  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }
  ngOnInit(): void {
    this.http.get('http://localhost:9999/membre-service/enseignants/'+this.id).subscribe(data => {
      // @ts-ignore
      this.enseignant = data;
      console.log(this.enseignant);
  }, error => { console.log('ereur') ; } ) ;

  }
  update()
  {
    this.http.put('http://localhost:9999/membre-service/membres/enseignant/' + this.enseignant.id, this.enseignant).subscribe(data => {console.log(data) ;
      alert('bien') ;
      this.route.navigate(['enseignants']) ;

    }, error => { console.log('ereur') ; } )  ;

  }

}
