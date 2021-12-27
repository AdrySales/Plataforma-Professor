import { Injectable } from '@angular/core';
import {AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Aulas} from '../modelos/aulas';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AulasService {
  periodo;
  ano;
  aulasCollection:AngularFirestoreCollection<Aulas>;
  aulas: Observable<Aulas[]>;
  aulasDoc: AngularFirestoreDocument<Aulas>;
  constructor(public afs: AngularFirestore) {
    //this.aulas = this.afs.collection('aulas').valueChanges();
    this.aulasCollection = this.afs.collection('aulas', ref => ref.orderBy('nome','asc'));
    this.aulas=this.afs.collection('aulas').snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data= a.payload.doc.data() as Aulas;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

   getAulas(){
    return this.aulas;
  }
  addAula(aula:Aulas){
      this.aulasCollection.add(aula);
  }

  
   deleteAula(aulas:Aulas){
      this.aulasDoc=this.afs.doc(`aulas/${aulas.id}`);
      this.aulasDoc.delete();
   }
   updateAula(aulas:Aulas){
     this.aulasDoc=this.afs.doc(`aulas/${aulas.id}`);
     this.aulasDoc.update(aulas);
   }
 
 
  
  }