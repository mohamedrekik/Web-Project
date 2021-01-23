import { Etudiant} from "./Etudiant";

export class Enseignants{
    public id:number;
    public cin:string='' ; 
    public nom:string='' ; 
    public prenom:string='' ; 
    public email:string ='';
    public dateNaiss: Date;
    public photo:string ='';
    public cv:string ='';
    public password:string ='';
    public etablissement:string ='';
    public grade:string ='';
    public etudiants:Etudiant;
    }


   