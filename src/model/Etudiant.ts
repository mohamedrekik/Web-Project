
import { Outils } from "./Outils";
import { Publications } from "./Publications";
import { Evenements } from "./Evenements";
import { Enseignants } from "./Enseignants";

export class Etudiant{
public id:number;
public cin:string='' ; 
public nom:string='' ; 
public prenom:string='' ; 
public email:string ='';
public dateNaiss: Date;
public photo:string ='';
public cv:string ='';
public password:string ='';
public dateInscription: Date;
public sujet:string ='';
public diplome:string ='';
public encadrant:Enseignants;
public pubs:Publications;
public outils:Outils;
public evenements:Evenements;

}
