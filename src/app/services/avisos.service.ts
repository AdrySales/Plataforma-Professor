import { Injectable } from '@angular/core';
import {AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Avisos} from '../modelos/avisos';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  avisosCollection:AngularFirestoreCollection<Avisos>;
  avisos: Observable<Avisos[]>;
  avisosDoc: AngularFirestoreDocument<Avisos>;
  constructor(public afs: AngularFirestore) {
    //this.aulas = this.afs.collection('aulas').valueChanges();
    this.avisosCollection = this.afs.collection('avisos', ref => ref.orderBy('nome','asc'));
    this.avisos=this.afs.collection('avisos').snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data= a.payload.doc.data() as Avisos;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

   getAvisos(){
    return this.avisos;
  }
  addAviso(avisos:Avisos){
      this.avisosCollection.add(avisos);
  }

  
   deleteAvisos(avisos:Avisos){
      this.avisosDoc=this.afs.doc(`avisos/${avisos.id}`);
      this.avisosDoc.delete();
   }
   updateAvisos(avisos:Avisos){
     this.avisosDoc=this.afs.doc(`avisos/${avisos.id}`);
     this.avisosDoc.update(avisos);
   }
 
 
  
}
