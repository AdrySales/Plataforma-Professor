import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import {Cursos} from '../modelos/cursos';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class CursosService {


  cursosCollection:AngularFirestoreCollection<Cursos>;
  cursos: Observable<Cursos[]>;
  cursosDoc: AngularFirestoreDocument<Cursos>;
  constructor(public afs: AngularFirestore) {
    //this.atividadesCollection=this.afs.collection('atividades');
    this.cursosCollection = this.afs.collection('cursos', ref => ref.orderBy('nome','asc'));
  this.cursos=this.afs.collection('cursos').snapshotChanges().map(changes =>{
    return changes.map(a =>{
      const data= a.payload.doc.data() as Cursos;
      data.id = a.payload.doc.id;
      return data;
    });
  });
   }

  getCursos(){
    return this.cursos;
  }

  addCursos(cursos:Cursos){
   this.cursosCollection.add(cursos);
  }
  deleteCursos(cursos:Cursos){
     this.cursosDoc=this.afs.doc(`cursos/${cursos.id}`);
     this.cursosDoc.delete();
  }
  updateCursos(cursos:Cursos){
    this.cursosDoc=this.afs.doc(`cursos/${cursos.id}`);
    this.cursosDoc.update(cursos);
  }

 
}
