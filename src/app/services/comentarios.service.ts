import { Injectable } from '@angular/core';
import {AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Comentario} from '../modelos/comentario';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  comentarioCollection:AngularFirestoreCollection<Comentario>;
  comentario: Observable<Comentario[]>;
  comentarioDoc: AngularFirestoreDocument<Comentario>;
  constructor(public afs: AngularFirestore) {
    //this.aulas = this.afs.collection('aulas').valueChanges();
    this.comentarioCollection = this.afs.collection('comentarios', ref => ref.orderBy('nome','asc'));
    this.comentario=this.afs.collection('comentarios').snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data= a.payload.doc.data() as Comentario;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

   getComentario(){
    return this.comentario;
  }
  addComentario(comentario:Comentario){
      this.comentarioCollection.add(comentario);
  }

  
   deleteComentario(comentario:Comentario){
      this.comentarioDoc=this.afs.doc(`comentarios/${comentario.id}`);
      this.comentarioDoc.delete();
   }
   updateComentario(comentario:Comentario){
     this.comentarioDoc=this.afs.doc(`comentarios/${comentario.id}`);
     this.comentarioDoc.update(comentario);
   }
 
   
}
