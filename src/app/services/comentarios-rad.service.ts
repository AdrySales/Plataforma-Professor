import { Injectable } from '@angular/core';
import {AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {ComentarioRad} from '../modelos/comentarioRad';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComentariosRadService {

  comentarioRadCollection:AngularFirestoreCollection<ComentarioRad>;
  comentarioRad: Observable<ComentarioRad[]>;
  comentarioRadDoc: AngularFirestoreDocument<ComentarioRad>;
  constructor(public afs: AngularFirestore) {
    //this.aulas = this.afs.collection('aulas').valueChanges();
    this.comentarioRadCollection = this.afs.collection('comentariosRad', ref => ref.orderBy('nome','asc'));
    this.comentarioRad=this.afs.collection('comentariosRad').snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data= a.payload.doc.data() as ComentarioRad;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

   getComentarioRad(){
    return this.comentarioRad;
  }
  addComentario(comentario:ComentarioRad){
      this.comentarioRadCollection.add(comentario);
  }

  
   deleteComentarioRad(comentarioRad:ComentarioRad){
      this.comentarioRadDoc=this.afs.doc(`comentario/${comentarioRad.id}`);
      this.comentarioRadDoc.delete();
   }
   updateComentarioRad(comentarioRad:ComentarioRad){
     this.comentarioRadDoc=this.afs.doc(`comentario/${comentarioRad.id}`);
     this.comentarioRadDoc.update(comentarioRad);
   }
 
   
}
