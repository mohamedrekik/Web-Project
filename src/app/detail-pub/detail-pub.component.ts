import { Component, OnInit } from '@angular/core';
import { Publications } from 'model/Publications';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-pub',
  templateUrl: './detail-pub.component.html',
  styleUrls: ['./detail-pub.component.css']
})
export class DetailPubComponent implements OnInit {

  publication:Publications=new Publications();
  id:number;

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/publication-service/publications/'+this.id).subscribe(data => {
      // @ts-ignore
      this.publication= data ;
      console.log(this.publication);
 
    }, error => { console.log('ereur') ; } )  ;
  }

}
