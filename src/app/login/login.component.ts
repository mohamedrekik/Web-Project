import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';
import { Member } from 'model/Member';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   id:number;
  member:Member=new Member();

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) {
    this.id=ar.snapshot.params.id ; 
   }

  ngOnInit(): void {
    this.http.get('http://localhost:9999/membre-service/membres/'+1).subscribe(data => {
      // @ts-ignore
      this.member = data;
      console.log(this.member);
  }, error => { console.log('ereur') ; } ) ;
    
  }
  login (){
    if (this.member.nom == "Jmaiel" && this.member.password == "0000"){
      this.route.navigate(['']) ;
    }
    else {
      this.route.navigate(['login']) ;
    }

  }
 

}
