import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { Publications } from 'model/Publications';

@Component({
  selector: 'app-edit-publication',
  templateUrl: './edit-publication.component.html',
  styleUrls: ['./edit-publication.component.css']
})
export class EditPublicationComponent implements OnInit {

  publication:Publications=new Publications();
  id:number;

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/publication-service/publications/'+this.id).subscribe(data => {
      // @ts-ignore
      this.publication = data;
      console.log(this.publication);
  }, error => { console.log('ereur') ; } ) ;
  }
  update()
  {
    this.http.put('http://localhost:9999/publication-service/publication/' + this.publication.id, this.publication).subscribe(data => {console.log(data) ;
      alert('bien') ;
      this.route.navigate(['publications']) ;

    }, error => { console.log('ereur') ; } )  ;

  }


}
