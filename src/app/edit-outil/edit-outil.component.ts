import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { Outils } from 'model/Outils';

@Component({
  selector: 'app-edit-outil',
  templateUrl: './edit-outil.component.html',
  styleUrls: ['./edit-outil.component.css']
})
export class EditOutilComponent implements OnInit {

  
  outil:Outils=new Outils();
  id:number;

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }
  ngOnInit(): void {this.http.get('http://localhost:9999/outil-service/outil/'+this.id).subscribe(data => {
    // @ts-ignore
    this.outil= data;
    console.log(this.outil);
}, error => { console.log('ereur') ; } ) ;
  }
  update()
  {
    this.http.put('http://localhost:9999/outil-service/outils/' + this.outil.id, this.outil).subscribe(data => {console.log(data) ;
      alert('bien') ;
      this.route.navigate(['outils']) ;

    }, error => { console.log('ereur') ; } )  ;

  }

}
